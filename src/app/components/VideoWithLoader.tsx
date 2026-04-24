import React, { useState, useRef, forwardRef, useImperativeHandle } from 'react';

interface VideoWithLoaderProps {
  videoUrl: string;
  cardId: number;
  isPopupOpen?: boolean;
}

export interface VideoWithLoaderRef {
  pause: () => void;
  play: () => void;
}

export const VideoWithLoader = forwardRef<VideoWithLoaderRef, VideoWithLoaderProps>(
  ({ videoUrl, cardId, isPopupOpen }, ref) => {
    const [isLoading, setIsLoading] = useState(true);
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPaused, setIsPaused] = useState(isPopupOpen ?? false);

    // Expose pause/play methods via ref
    useImperativeHandle(ref, () => ({
      pause: () => {
        if (videoRef.current) {
          videoRef.current.pause();
          setIsPaused(true);
        }
      },
      play: () => {
        if (videoRef.current) {
          videoRef.current.play().catch(() => {
            // Playback might be blocked by browser policies
          });
          setIsPaused(false);
        }
      },
    }), []);

    // Sync popup open state with pause state
    React.useEffect(() => {
      if (isPopupOpen) {
        setIsPaused(true);
      }
    }, [isPopupOpen]);

    // Ensure video state matches isPaused
    React.useEffect(() => {
      if (videoRef.current) {
        if (isPaused) {
          videoRef.current.pause();
        } else {
          videoRef.current.play().catch(() => {
            // Playback might be blocked
          });
        }
      }
    }, [isPaused]);

    return (
      <>
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/50">
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 border-4 border-white/20 border-t-white rounded-full animate-spin" />
              <p className="text-white text-sm font-general-sans">Loading...</p>
            </div>
          </div>
        )}
        <video
          ref={videoRef}
          key={cardId}
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          onLoadedData={() => setIsLoading(false)}
          onCanPlay={() => setIsLoading(false)}
        >
          <source src={videoUrl} type="video/mp4" />
        </video>
      </>
    );
  }
);

VideoWithLoader.displayName = 'VideoWithLoader';
