import { useState, useEffect, useImperativeHandle, forwardRef, useRef } from 'react';
import { useSpring, animated, to as interpolate } from 'react-spring';
import { useDrag } from '@use-gesture/react';
import { VideoWithLoader, VideoWithLoaderRef } from './VideoWithLoader';
import { ThreeDotsIcon } from './ThreeDotsIcon';
import AvatarOwner from '../../imports/AvatarOwner/AvatarOwner';

interface Card {
  id: number;
  title: string;
  description: string;
  color: string;
  videoUrl?: string;
  avatarName?: string;
  avatarUsername?: string;
  avatarColor?: string;
}

interface CardSwiperProps {
  cards: Card[];
  onSwipeLeft?: (card: Card, index: number) => void;
  onSwipeRight?: (card: Card, index: number) => void;
  onIndexChange?: (index: number) => void;
  onDragChange?: (isDragging: boolean, direction: 'left' | 'right' | null) => void;
  isPopupOpen?: boolean;
}

export interface CardSwiperRef {
  swipe: (direction: 'left' | 'right') => void;
}

export const CardSwiper = forwardRef<CardSwiperRef, CardSwiperProps>(({ cards, onSwipeLeft, onSwipeRight, onIndexChange, onDragChange, isPopupOpen }, ref) => {
  const [gone] = useState(() => new Set());
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const triggerSwipeRef = useRef<{ direction: number } | null>(null);
  const currentVideoRef = useRef<VideoWithLoaderRef>(null);
  const nextVideoRef = useRef<VideoWithLoaderRef>(null);

  const [props, api] = useSpring(() => ({
    x: 0,
    y: 0,
    rot: 0,
    scale: 1,
    opacity: 1,
    config: { friction: 50, tension: 500 }
  }));

  // Handle video pause/play and blur when popup is open
  useEffect(() => {
    if (isPopupOpen) {
      currentVideoRef.current?.pause();
      nextVideoRef.current?.pause();
    } else {
      currentVideoRef.current?.play();
      nextVideoRef.current?.play();
    }
  }, [isPopupOpen]);

  // Expose swipe method via ref
  useImperativeHandle(ref, () => ({
    swipe: (direction: 'left' | 'right') => {
      if (isAnimating) {
        console.log('Already animating, skipping');
        return;
      }

      console.log('=== BUTTON SWIPE START ===');
      console.log('Direction:', direction, 'Current index:', currentIndex);

      const dir = direction === 'right' ? 1 : -1;
      const actualIndex = currentIndex % cards.length;
      const card = cards[actualIndex];
      const nextIndex = currentIndex + 1;

      console.log('Card title:', card.title);
      console.log('Next index will be:', nextIndex);

      // Mark as animating
      setIsAnimating(true);
      console.log('Set isAnimating to true');

      // Show rive animation
      onDragChange?.(true, direction);
      console.log('Called onDragChange');

      // Mark card as gone
      gone.add(currentIndex);
      console.log('Added to gone set');

      // Start the animation
      console.log('Starting spring animation with x =', 600 * dir);
      api.start({
        x: 600 * dir,
        rot: dir * 35,
        scale: 0.7,
        opacity: 0.3,
        config: { friction: 30, tension: 200 }
      });

      // Complete after delay
      setTimeout(() => {
        console.log('=== COMPLETING SWIPE ===');
        console.log('Setting current index from', currentIndex, 'to', nextIndex);

        setCurrentIndex(nextIndex);
        onIndexChange?.(nextIndex);
        setIsAnimating(false);

        console.log('Resetting spring values');
        api.set({
          x: 0,
          rot: 0,
          scale: 1,
          opacity: 1
        });

        onDragChange?.(false, null);

        // Trigger callbacks after animation completes
        if (dir === 1) {
          console.log('Calling onSwipeRight');
          onSwipeRight?.(card, currentIndex);
        } else {
          console.log('Calling onSwipeLeft');
          onSwipeLeft?.(card, currentIndex);
        }

        console.log('=== SWIPE COMPLETE ===');
      }, 500);
    }
  }), [currentIndex, cards, gone, api, onSwipeLeft, onSwipeRight, onIndexChange, onDragChange, isAnimating]);

  const bind = useDrag(
    ({ active, movement: [mx], direction: [xDir], velocity: [vx] }) => {
      const trigger = vx > 0.2 || Math.abs(mx) > 150;
      const dir = xDir < 0 ? -1 : 1;

      // Notify parent about drag state and direction
      if (active && Math.abs(mx) > 20) {
        const dragDirection = mx > 0 ? 'right' : 'left';
        onDragChange?.(true, dragDirection);
      } else if (!active) {
        onDragChange?.(false, null);
      }

      if (!active && trigger) {
        const actualIndex = currentIndex % cards.length;
        const card = cards[actualIndex];
        const nextIndex = currentIndex + 1;
        gone.add(currentIndex);

        setCurrentIndex(nextIndex);
        onIndexChange?.(nextIndex);

        // Delay callbacks until animation completes
        setTimeout(() => {
          if (dir === 1) {
            onSwipeRight?.(card, currentIndex);
          } else {
            onSwipeLeft?.(card, currentIndex);
          }
        }, 500);
      }

      api.start({
        x: active ? mx : gone.has(currentIndex) ? (600) * dir : 0,
        rot: active ? mx / 100 + (active ? dir * vx * 10 : 0) : 0,
        scale: active ? 1.05 : gone.has(currentIndex) ? 0.7 : 1,
        opacity: active ? 1 : gone.has(currentIndex) ? 0.3 : 1,
        config: { friction: 50, tension: active ? 500 : 200 },
        immediate: false
      });
    }
  );

  // Loop back to first card if we've reached the end
  const actualIndex = currentIndex % cards.length;
  const nextIndex = (currentIndex + 1) % cards.length;

  const card = cards[actualIndex];
  const nextCard = cards[nextIndex];

  return (
    <div className="relative flex items-center justify-center w-full h-full px-[16px]">
      {/* Show next card behind */}
      <div
        className="absolute inset-[16px] scale-95 opacity-50"
        style={{ zIndex: 1 }}
      >
        <div
          className="w-full h-full rounded-[32px] overflow-hidden shadow-2xl border-2 border-white/20 relative"
          style={{
            background: nextCard.color,
            filter: isPopupOpen ? 'blur(10px)' : 'blur(0px)',
            transition: 'filter 0.3s ease'
          }}
        >
          {nextCard.videoUrl && (
            <VideoWithLoader ref={nextVideoRef} videoUrl={nextCard.videoUrl} cardId={nextCard.id} isPopupOpen={isPopupOpen} />
          )}

          {/* Top gradient overlay */}
          <div 
            className="absolute top-0 left-0 right-0 h-[100px] pointer-events-none" 
            style={{
              background: 'linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%)',
              backdropFilter: 'blur(4px)',
              WebkitBackdropFilter: 'blur(4px)'
            }}
          />

          {/* Bottom gradient overlay */}
          <div 
            className="absolute bottom-0 left-0 right-0 h-[130px] pointer-events-none"
            style={{
              background: 'linear-gradient(to top, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%)',
              backdropFilter: 'blur(4px)',
              WebkitBackdropFilter: 'blur(4px)'
            }}
          />

          <div className="absolute top-[26px] right-6">
            <ThreeDotsIcon />
          </div>

          <div className="absolute bottom-16 left-6">
            <AvatarOwner
              name={nextCard.avatarName}
              username={nextCard.avatarUsername}
              avatarColor={nextCard.avatarColor}
            />
          </div>
        </div>
      </div>

      <animated.div
        {...bind()}
        style={{
          opacity: props.opacity,
          transform: interpolate(
            [props.x, props.y, props.rot, props.scale],
            (x, y, r, s) => `translate3d(${x}px, ${y}px, 0) rotate(${r}deg) scale(${s})`
          ),
          touchAction: 'none',
          userSelect: 'none',
          zIndex: 2
        }}
        className="absolute inset-[16px] will-change-transform cursor-grab active:cursor-grabbing"
      >
        <div
          className="w-full h-full rounded-[32px] overflow-hidden shadow-2xl border-2 border-white/30 relative"
          style={{
            background: card.color,
            filter: isPopupOpen ? 'blur(10px)' : 'blur(0px)',
            transition: 'filter 0.3s ease'
          }}
        >
          {card.videoUrl && (
            <VideoWithLoader ref={currentVideoRef} videoUrl={card.videoUrl} cardId={card.id} isPopupOpen={isPopupOpen} />
          )}

          {/* Top gradient overlay */}
          <div 
            className="absolute top-0 left-0 right-0 h-[100px] pointer-events-none"
            style={{
              background: 'linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%)',
              backdropFilter: 'blur(4px)',
              WebkitBackdropFilter: 'blur(4px)'
            }}
          />

          {/* Bottom gradient overlay */}
          <div 
            className="absolute bottom-0 left-0 right-0 h-[130px] pointer-events-none"
            style={{
              background: 'linear-gradient(to top, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%)',
              backdropFilter: 'blur(4px)',
              WebkitBackdropFilter: 'blur(4px)'
            }}
          />

          <div className="absolute top-[26px] right-6">
            <ThreeDotsIcon />
          </div>

          <div className="absolute bottom-16 left-6">
            <AvatarOwner
              name={card.avatarName}
              username={card.avatarUsername}
              avatarColor={card.avatarColor}
            />
          </div>
        </div>
      </animated.div>
    </div>
  );
});

CardSwiper.displayName = 'CardSwiper';
