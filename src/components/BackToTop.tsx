import { useEffect, useState } from 'react';
import Svg from './svg';

/**
 * Circular scroll-progress indicator that doubles as the back-to-top button.
 */
export default function BackToTop() {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const top = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const ratio = height > 0 ? Math.min(top / height, 1) : 0;
      setProgress(ratio);
      setVisible(top > 300);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <div
      className={`progress-wrap${visible ? ' active-progress' : ''}`}
      style={{ '--progress': progress } as React.CSSProperties}
      onClick={scrollTop}
      role="button"
      tabIndex={0}
      aria-label="Back to top"
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') scrollTop();
      }}
    >
      <Svg name="progressCircle" className="progress-circle svg-content" width="100%" height="100%" />
      <Svg name="backToTopArrow" className="arrow" width={16} height={16} />
    </div>
  );
}