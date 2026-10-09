import { Reveal } from './Primitives';

export default function Hero({ onProposal }: { onProposal: () => void }) {
  return (
    <section className="ref-hero-section" id="home">
      <div className="container">
        <div className="row gy-5 align-items-center">
          <div className="col-lg-7">
            <Reveal animation="left">
              <div className="ref-hero-pill">
                <span className="ref-pill-badge">
                  <span className="badge-dot" />
                  Adelaide's Leading Performance Digital Agency
                </span>
              </div>

              <h1 className="ref-hero-title">
                Digital Marketing Agency
                <span className="accent">Adelaide</span>
              </h1>

              <p className="ref-hero-desc">
                We provide a full range of services in online Marketing, Web &amp; App
                Development, Design, and other innovative digital solutions tailored
                to your needs.
              </p>

              <div className="ref-hero-actions">
                <button
                  type="button"
                  className="ref-btn-primary"
                  onClick={onProposal}
                  aria-label="Get A Proposal"
                >
                  <span>Get A Proposal</span>
                  <i className="bx bx-right-arrow-alt" style={{ fontSize: '18px' }} />
                </button>

                <div className="ref-google-rating-pill">
                  <span className="stars">★★★★★</span>
                  <span className="rating-text">GOOGLE 5.0 RATING</span>
                </div>

                <div className="ref-success-pill">
                  <span style={{ fontSize: '15px' }}>📈</span>
                  <span>3X+ Success Rate</span>
                </div>
              </div>

              <div className="ref-hero-stats">
                <div className="ref-hero-stat-item">
                  <div className="stat-num">100%</div>
                  <div className="stat-lbl">MEASURABLE ROI</div>
                </div>
                <div className="ref-hero-stat-item">
                  <div className="stat-num">150+</div>
                  <div className="stat-lbl">HAPPY CLIENTS</div>
                </div>
                <div className="ref-hero-stat-item">
                  <div className="stat-num">10+</div>
                  <div className="stat-lbl">YEARS FIELD EXP</div>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="col-lg-5">
            <Reveal animation="right">
              <div className="ref-hero-visual-wrap">
                <div className="ref-floating-stats-card">
                  <div className="icon-box">
                    <i className="bx bx-line-chart" />
                  </div>
                  <div className="info">
                    <span className="label">Average Traffic Surge</span>
                    <span className="value">+284.6%</span>
                    <span className="verified">✓ Verified Client Data</span>
                  </div>
                  <span className="ref-hero-tag-badge ms-2">Performance Marketing</span>
                </div>

                <img
                  src="/assets/img/grow/vector-smart-object.png"
                  alt="GrowU Adelaide Digital Marketing Agency"
                  className="ref-hero-img"
                  loading="eager"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}