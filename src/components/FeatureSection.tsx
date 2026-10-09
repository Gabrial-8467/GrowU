import { Reveal } from './Primitives';

export default function FeatureSection({ onTalk }: { onTalk: () => void }) {
  return (
    <div className="container mb-4">
      <Reveal animation="up">
        <div
          className="ref-commitment-banner top-banner"
          style={{
            background: '#ffffff',
            border: '1px solid #e2e8f0',
            boxShadow: '0 4px 16px rgba(0,0,0,0.04)',
          }}
        >
          <div className="banner-left">
            <span className="banner-text">
              Committed to delivering the best service our client deserves.
            </span>
          </div>
          <button
            type="button"
            className="banner-btn"
            onClick={onTalk}
          >
            <span>Let's Talk</span>
            <i className="bx bx-phone-call" style={{ fontSize: '16px' }} />
          </button>
        </div>
      </Reveal>
    </div>
  );
}