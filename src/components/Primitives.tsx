import { useEffect, useRef } from 'react';
import Svg from './svg';
import { useScrollLock } from '../hooks';

/* ------------------------------------------------------------------ */
/* Buttons                                                            */
/* ------------------------------------------------------------------ */

type ArrowBtn4Props = {
  label: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement | HTMLButtonElement>;
  href?: string;
  variant?: 'default' | 'black-bg' | 'transparent';
  className?: string;
};

export function Button4({ label, onClick, href, variant = 'default', className = '' }: ArrowBtn4Props) {
  const cls = `primary-btn4${variant !== 'default' ? ` ${variant}` : ''}${className ? ` ${className}` : ''}`;
  const inner = (
    <>
      <span className="icon">
        <Svg name="arrowRight" width={10} height={10} />
      </span>
      <span className="content">{label}</span>
      <span className="icon two">
        <Svg name="arrowRight" width={10} height={10} />
      </span>
    </>
  );

  if (href) {
    return (
      <a href={href} className={cls} onClick={onClick}>
        {inner}
      </a>
    );
  }
  return (
    <button type="button" className={cls} onClick={onClick}>
      {inner}
    </button>
  );
}

/* ------------------------------------------------------------------ */
/* Primary button 1 (marquee text swap)                               */
/* ------------------------------------------------------------------ */

export function Button1({ label, href, className = '' }: { label: string; href: string; className?: string }) {
  return (
    <a href={href} className={`primary-btn1${className ? ` ${className}` : ''}`}>
      <span>
        {label} <Svg name="arrowRight" width={10} height={10} />
      </span>
      <span>
        {label} <Svg name="arrowRight" width={10} height={10} />
      </span>
    </a>
  );
}

/* ------------------------------------------------------------------ */
/* Result block                                                        */
/* ------------------------------------------------------------------ */

export function ResultArea({ value = '100%', text = 'Measurable Results & ROI.' }: { value?: string; text?: string }) {
  return (
    <div className="result-area">
      <span>{value}</span>
      <p>{text}</p>
      <Svg name="divider200" width={200} height={6} />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Section wrapper with reveal animation                               */
/* ------------------------------------------------------------------ */

type RevealProps = {
  children: React.ReactNode;
  animation?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
  className?: string;
};

export function Reveal({ children, animation = 'up', delay = 0, className = '' }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            node.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal reveal-${animation}${className ? ` ${className}` : ''}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Modal                                                               */
/* ------------------------------------------------------------------ */

type ModalProps = {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  size?: 'md' | 'lg';
};

export function Modal({ open, onClose, title, children, size = 'lg' }: ModalProps) {
  const closeRef = useRef<HTMLButtonElement>(null);
  useScrollLock(open);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    closeRef.current?.focus();
    return () => document.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="modal-root" role="dialog" aria-modal="true" aria-label={title}>
      <div className="modal-backdrop-custom" onClick={onClose} />
      <div className={`modal-panel modal-panel-${size}`}>
        <div className="modal-panel-header">
          {title ? <h5>{title}</h5> : <span />}
          <button ref={closeRef} type="button" className="modal-close" onClick={onClose} aria-label="Close">
            <i className="bi bi-x" />
          </button>
        </div>
        <div className="modal-panel-body">{children}</div>
      </div>
    </div>
  );
}