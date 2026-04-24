import { forwardRef, useEffect, useImperativeHandle, useState } from 'react';
import { useRive } from '@rive-app/react-webgl2';

export interface RiveSwipeAnimationRef {
  playHeart: () => void;
  playSnooze: () => void;
  clear: () => void;
}

interface RiveSwipeAnimationProps {
  className?: string;
}

type ActiveAnim =
  | { machine: 'heartSM'; nonce: number }
  | { machine: 'snoozeSM'; nonce: number }
  | null;

function RiveMachinePlayer({
  className = '',
  machine,
}: {
  className?: string;
  machine: 'heartSM' | 'snoozeSM';
}) {
  const { rive, RiveComponent } = useRive({
    src: '/huge_2states.riv',
    artboard: 'anna',
    stateMachines: machine,
    autoplay: true,
    onLoad: () => {
      console.log('LOADED:', { artboard: 'anna', machine });
    },
  });

  useEffect(() => {
    if (!rive) return;

    try {
      rive.play();
    } catch (e) {
      console.error('rive.play() failed:', e);
    }
  }, [rive, machine]);

  return (
    <div className={className} style={{ pointerEvents: 'none' }}>
      <RiveComponent />
    </div>
  );
}

const RiveSwipeAnimation = forwardRef<RiveSwipeAnimationRef, RiveSwipeAnimationProps>(
  ({ className = '' }, ref) => {
    const [active, setActive] = useState<ActiveAnim>(null);

    const remount = (machine: 'heartSM' | 'snoozeSM') => {
      setActive(null);

      window.setTimeout(() => {
        setActive({
          machine,
          nonce: Date.now(),
        });
      }, 0);
    };

    useImperativeHandle(ref, () => ({
      playHeart: () => {
        remount('heartSM');
      },
      playSnooze: () => {
        remount('snoozeSM');
      },
      clear: () => {
        setActive(null);
      },
    }));

    if (!active) {
      return <div className={className} />;
    }

    return (
      <RiveMachinePlayer
        key={`anna-${active.machine}-${active.nonce}`}
        className={className}
        machine={active.machine}
      />
    );
  }
);

RiveSwipeAnimation.displayName = 'RiveSwipeAnimation';
export default RiveSwipeAnimation;