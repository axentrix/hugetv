import { useEffect, useState } from 'react';
import { useRive } from '@rive-app/react-canvas';
import { HugeSeal } from './HugeSeal';
import './VotingChart.css';

export interface VotingCardData {
  id: number;
  videoUrl?: string;
  color?: string;
  title?: string;
}

interface VotingChartProps {
  isOpen: boolean;
  onClose: () => void;
  currentCard?: VotingCardData;
}

type CelebPhase = 'idle' | 'celebrating' | 'flying' | 'done';

/* ─── Confetti ──────────────────────────────────────────── */
function Confetti({ shouldPlay }: { shouldPlay: boolean }) {
  const { RiveComponent, rive } = useRive({
    src: '/confetti.riv',
    artboard: 'confetti',
    stateMachines: 'confetti',
    autoplay: false,
    onLoad: () => {
      console.log('Confetti loaded');
    },
    onLoadError: (error) => {
      console.error('Confetti load error:', error);
    },
  });

  useEffect(() => {
    if (!rive) return;

    if (shouldPlay) {
      rive.reset();
      rive.play('confetti');
    } else {
      rive.pause();
    }
  }, [shouldPlay, rive]);

  if (!shouldPlay) return null;

  return (
    <div className="vc-confetti" aria-hidden="true">
      <RiveComponent />
    </div>
  );
}

/* ─── Banner tag ─────────────────────────────────────────── */
function BannerTag({ number, filled, slotIndex }: { number: number; filled?: boolean; slotIndex?: number }) {
  const gradientId = `vc-banner-grad-${number}`;

  return (
    <div
      className={`voting-chart__banner-wrapper ${filled ? 'voting-chart__banner-wrapper--seal' : ''}`}
      style={filled && slotIndex !== undefined ? { animationDelay: `${slotIndex * 0.15}s` } : {}}
    >
      {filled ? (
        <svg
          className="voting-chart__banner-svg"
          width="153"
          height="78"
          viewBox="0 0 153 78"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M149.999 1.77832L149.084 4.18848L135.902 38.8936L149.084 73.5996L149.999 76.0098H1.7832L1.79199 74.2227L1.94922 38.9014L1.79199 3.56445L1.7832 1.77832H149.999Z"
            fill="#F4DC00"
            stroke={`url(#${gradientId}-filled)`}
            strokeWidth="3.5575"
          />
          <defs>
            <linearGradient
              id={`${gradientId}-filled`}
              x1="75.4955"
              y1="3.55664"
              x2="75.4955"
              y2="74.231"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#DEC800" />
              <stop offset="1" stopColor="#DC71F8" />
            </linearGradient>
          </defs>
        </svg>
      ) : (
        <svg
          className="voting-chart__banner-svg"
          width="78"
          height="40"
          viewBox="0 0 78 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M1.8125 1.80469L74.7331 1.80469L67.9297 19.7178L74.7331 37.6309H1.8125L1.89251 19.7178L1.8125 1.80469Z"
            fill="black"
            fillOpacity="0.3"
          />
          <path
            d="M77.3457 0L69.8574 19.7168L77.3457 39.4336H0L0.0878906 19.7246L0 0H77.3457ZM1.81152 1.80371L1.8916 19.7168L1.81152 37.6299H74.7324L67.9287 19.7168L74.7324 1.80371H1.81152Z"
            fill={`url(#${gradientId}-empty)`}
          />
          <defs>
            <linearGradient
              id={`${gradientId}-empty`}
              x1="38.2718"
              y1="1.80371"
              x2="38.2718"
              y2="37.6299"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#DEC800" />
              <stop offset="1" stopColor="#DC71F8" />
            </linearGradient>
          </defs>
        </svg>
      )}

      <div className="voting-chart__banner-content">
        <span className="voting-chart__banner-number">{number}</span>
      </div>
    </div>
  );
}

/* ─── Slot card ─────────────────────────────────────────── */
function ChallengeCard({
  number,
  filled,
  videoUrl,
  color,
}: {
  number: number;
  filled?: boolean;
  videoUrl?: string;
  color?: string;
}) {
  return (
    <div className={`voting-chart__card ${filled ? 'voting-chart__card--filled' : ''}`}>
      <div className="voting-chart__card-inner">
        {filled ? (
          videoUrl ? (
            <video
              className="voting-chart__card-video"
              src={videoUrl}
              muted
              playsInline
            />
          ) : (
            <div
              className="voting-chart__card-color-bg"
              style={{ background: color ?? 'linear-gradient(135deg, #EC69FF, #8671FF)' }}
            />
          )
        ) : (
          <>
            <div className="voting-chart__card-image" />
            <span className="voting-chart__card-question">?</span>
          </>
        )}
      </div>

      <BannerTag number={number} filled={filled} slotIndex={number - 1} />
    </div>
  );
}

/* ─── Celebration overlay ───────────────────────────────── */
function CelebrationOverlay({
  phase,
  card,
}: {
  phase: CelebPhase;
  card?: VotingCardData;
}) {
  const isFlying = phase === 'flying';

  return (
    <div className={`vc-celebration ${isFlying ? 'vc-celebration--fading' : ''}`}>
      <Confetti shouldPlay={phase === 'celebrating'} />

      <div className={`vc-celeb-wrapper ${isFlying ? 'vc-celeb-wrapper--flying' : ''}`}>
        <div className="vc-celeb-card">
          <div className="vc-celeb-card__inner">
            {card?.videoUrl ? (
              <video
                className="vc-celeb-card__video"
                src={card.videoUrl}
                muted
                playsInline
              />
            ) : (
              <div
                className="vc-celeb-card__color-bg"
                style={{
                  background: card?.color ?? 'linear-gradient(135deg, #EC69FF, #8671FF)',
                }}
              />
            )}

            <div className="vc-celeb-card__banner">
              <BannerTag number={1} filled slotIndex={0} />
            </div>
          </div>
        </div>

        <div className="vc-celeb-huge-badge">
          <HugeSeal />
        </div>
      </div>
    </div>
  );
}

/* ─── Main component ─────────────────────────────────────── */
export default function VotingChart({
  isOpen,
  onClose,
  currentCard,
}: VotingChartProps) {
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [celebPhase, setCelebPhase] = useState<CelebPhase>('idle');
  const [filledSlots, setFilledSlots] = useState<number[]>([]);

  useEffect(() => {
    if (isOpen) {
      setMounted(true);

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setVisible(true);
        });
      });
    } else {
      setVisible(false);

      const timer = window.setTimeout(() => {
        setMounted(false);
        setCelebPhase('idle');
      }, 420);

      return () => window.clearTimeout(timer);
    }
  }, [isOpen]);

  useEffect(() => {
    if (!visible) return;

    const t0 = window.setTimeout(() => {
      setCelebPhase('celebrating');
    }, 350);

    const t1 = window.setTimeout(() => {
      setCelebPhase('flying');
    }, 2950);

    const t2 = window.setTimeout(() => {
      setCelebPhase('done');

      setFilledSlots((prev) => {
        if (prev.length >= 3) return prev;
        return [...prev, prev.length];
      });
    }, 3500);

    return () => {
      window.clearTimeout(t0);
      window.clearTimeout(t1);
      window.clearTimeout(t2);
    };
  }, [visible]);

  useEffect(() => {
    if (!isOpen) {
      setCelebPhase('idle');
      setFilledSlots([]);
    }
  }, [isOpen]);

  if (!mounted) return null;

  const showCelebration = celebPhase === 'celebrating' || celebPhase === 'flying';

  return (
    <div
      className={`voting-chart__overlay ${visible ? 'voting-chart__overlay--visible' : ''}`}
      onClick={onClose}
    >
      <div
        className={`voting-chart__sheet ${visible ? 'voting-chart__sheet--visible' : ''}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="voting-chart__header">
          <h1 className="voting-chart__title">Voting Chart</h1>
        </div>

        <div className="voting-chart__progress">
          <div className="voting-chart__progress-step voting-chart__progress-step--active" />
          <div className="voting-chart__progress-step" />
          <div className="voting-chart__progress-step" />
        </div>

        <div className="voting-chart__cards">
          {[0, 1, 2].map((slotIndex) => (
            <ChallengeCard
              key={slotIndex}
              number={slotIndex + 1}
              filled={filledSlots.includes(slotIndex)}
              videoUrl={filledSlots.includes(slotIndex) ? currentCard?.videoUrl : undefined}
              color={currentCard?.color}
            />
          ))}
        </div>

        <div className="voting-chart__footer">
          <button className="voting-chart__add-votes-btn" onClick={onClose}>
            Add votes
          </button>
        </div>

        <div className="voting-chart__home-indicator" />

        {showCelebration && (
          <CelebrationOverlay phase={celebPhase} card={currentCard} />
        )}
      </div>
    </div>
  );
}
