import { useRef, useState } from 'react';
import { useNavigate } from 'react-router';
import { CardSwiper, CardSwiperRef } from '../components/CardSwiper';
import RiveSwipeAnimation, { RiveSwipeAnimationRef } from '../components/RiveSwipeAnimation';
import { ButtonSnooze } from '../components/ButtonSnooze';
import { ButtonHuge } from '../components/ButtonHuge';
import MainChallengesPage from '../../imports/MainChallengesPage-1/MainChallengesPage-7-828';
import VotingChart, { VotingCardData } from '../components/VotingChart';
import video1 from '../../imports/IMG_4448.mp4';
import video2 from '../../imports/IMG_4494.mp4';
import video3 from '../../imports/IMG_4586_(1).mp4';

const SAMPLE_CARDS = [
  {
    id: 1,
    title: 'Challenge 1',
    description: '',
    color: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    videoUrl: video1,
    avatarName: 'Sarah Chen',
    avatarUsername: '@sarahchen',
    avatarColor: '#667eea',
  },
  {
    id: 2,
    title: 'Challenge 2',
    description: '',
    color: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    videoUrl: video2,
    avatarName: 'Mike Torres',
    avatarUsername: '@miketorres',
    avatarColor: '#f093fb',
  },
  {
    id: 3,
    title: 'Challenge 3',
    description: '',
    color: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    videoUrl: video3,
    avatarName: 'Alex Rivera',
    avatarUsername: '@alexrivera',
    avatarColor: '#4facfe',
  },
];

export default function CardSwiperPage() {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [snoozeActive, setSnoozeActive] = useState(false);
  const [hugeActive, setHugeActive] = useState(false);
  const [votingChartOpen, setVotingChartOpen] = useState(false);
  const [currentVotingCard, setCurrentVotingCard] = useState<VotingCardData | undefined>();

  const cardSwiperRef = useRef<CardSwiperRef>(null);
  const riveAnimationRef = useRef<RiveSwipeAnimationRef>(null);

  const lastPreviewDirectionRef = useRef<'left' | 'right' | null>(null);
  const suppressDragPreviewRef = useRef(false);

  const handleBackClick = () => {
    navigate('/');
  };

  const clearAllVisuals = () => {
    setHugeActive(false);
    setSnoozeActive(false);
    lastPreviewDirectionRef.current = null;
    riveAnimationRef.current?.clear();
  };

  const showSnooze = () => {
    setSnoozeActive(true);
    setHugeActive(false);
    riveAnimationRef.current?.playSnooze();
  };

  const showHeart = () => {
    setHugeActive(true);
    setSnoozeActive(false);
    riveAnimationRef.current?.playHeart();
  };

  const handleDragChange = (
    dragging: boolean,
    direction: 'left' | 'right' | null
  ) => {
    if (suppressDragPreviewRef.current) {
      return;
    }

    if (!dragging || !direction) {
      clearAllVisuals();
      return;
    }

    if (lastPreviewDirectionRef.current === direction) {
      return;
    }

    lastPreviewDirectionRef.current = direction;

    if (direction === 'left') {
      showSnooze();
    } else {
      showHeart();
    }
  };

  const unlockDragPreviewSoon = () => {
    window.setTimeout(() => {
      suppressDragPreviewRef.current = false;
      lastPreviewDirectionRef.current = null;
    }, 150);
  };

  const handleSwipeLeft = (card: typeof SAMPLE_CARDS[0], index: number) => {
    console.log('Swiped left:', card.title, index);

    suppressDragPreviewRef.current = true;
    clearAllVisuals();
    unlockDragPreviewSoon();
    // Do NOT open popup on left swipe
  };

  const handleSwipeRight = (card: typeof SAMPLE_CARDS[0], index: number) => {
    console.log('Swiped right:', card.title, index);

    suppressDragPreviewRef.current = true;
    clearAllVisuals();
    unlockDragPreviewSoon();
    // Open popup only on right swipe (both button click and drag swipe)
    setCurrentVotingCard({ id: card.id, videoUrl: card.videoUrl, color: card.color, title: card.title });
    setVotingChartOpen(true);
  };

  const triggerSwipeLeft = () => {
    suppressDragPreviewRef.current = true;
    cardSwiperRef.current?.swipe('left');
    // Popup should NOT open on left swipe
  };

  const triggerSwipeRight = () => {
    suppressDragPreviewRef.current = true;
    cardSwiperRef.current?.swipe('right');
    // VotingChart will open via handleSwipeRight callback after the swipe completes
  };

  return (
    <div className="relative size-full overflow-hidden flex items-center justify-center bg-gray-950">
      <div className="relative w-[393px] h-full max-h-[852px] overflow-hidden shadow-2xl bg-black">
        <div className="absolute top-0 left-0 right-0 bottom-[134px] flex items-center justify-center z-10 pointer-events-auto">
          <CardSwiper
            ref={cardSwiperRef}
            cards={SAMPLE_CARDS}
            onSwipeLeft={handleSwipeLeft}
            onSwipeRight={handleSwipeRight}
            onIndexChange={setCurrentIndex}
            onDragChange={handleDragChange}
            isPopupOpen={votingChartOpen}
          />
        </div>

        <div className="absolute inset-0 z-30 pointer-events-none">
          <MainChallengesPage onBackClick={handleBackClick} />
        </div>

        <div
          className="absolute left-[8px] bottom-[113px] w-[377px] flex gap-[44px] items-center justify-center overflow-visible transition-all duration-300"
          style={{
            zIndex: votingChartOpen ? 0 : 999,
            pointerEvents: votingChartOpen ? 'none' : 'auto',
            opacity: votingChartOpen ? 0 : 1
          }}
        >
          <button
            type="button"
            onPointerDown={() => {
              suppressDragPreviewRef.current = true;
              showSnooze();
            }}
            onPointerUp={() => {
              clearAllVisuals();
              unlockDragPreviewSoon();
            }}
            onPointerLeave={() => {
              clearAllVisuals();
              unlockDragPreviewSoon();
            }}
            onClick={triggerSwipeLeft}
            className="cursor-pointer hover:scale-105 transition-all duration-200 active:scale-95 group overflow-visible"
          >
            <ButtonSnooze isActive={snoozeActive} />
          </button>

          <button
            type="button"
            onPointerDown={() => {
              suppressDragPreviewRef.current = true;
              showHeart();
            }}
            onPointerUp={() => {
              clearAllVisuals();
              unlockDragPreviewSoon();
            }}
            onPointerLeave={() => {
              clearAllVisuals();
              unlockDragPreviewSoon();
            }}
            onClick={triggerSwipeRight}
            className="cursor-pointer hover:scale-105 transition-all duration-200 active:scale-95 group overflow-visible"
          >
            <ButtonHuge isActive={hugeActive} />
          </button>
        </div>

        <div
          className="absolute inset-0 pointer-events-none z-[100] flex items-center justify-center"
          style={{ paddingBottom: '100px' }}
        >
          <div className="w-[350px] h-[350px]">
            <RiveSwipeAnimation ref={riveAnimationRef} className="w-full h-full" />
          </div>
        </div>

        <VotingChart
          isOpen={votingChartOpen}
          onClose={() => setVotingChartOpen(false)}
          currentCard={currentVotingCard}
        />
      </div>
    </div>
  );
}
