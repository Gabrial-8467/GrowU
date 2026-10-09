import { Reveal } from './Primitives';
import { industries } from '../data/content';

export default function Industry() {
  return (
    <section className="ref-industries-section" id="industry">
      <div className="container">
        <Reveal animation="down">
          <div className="mb-3">
            <span className="ref-pill-badge">
              <span className="badge-dot" />
              100% Measurable Results &amp; ROI
            </span>
          </div>

          <div className="ref-section-header-row mb-5">
            <div>
              <h2 className="ref-heading">Making a Significant Impact.</h2>
              <p className="ref-industries-subtext">
                We deliver expert, personalized solutions tailored to your unique
                industry and objectives.
              </p>
            </div>
            <div>
              <a href="#industry" className="ref-btn-outline-pill">
                <span>View All Industries</span>
                <i className="bx bx-right-arrow-alt" style={{ fontSize: '18px' }} />
              </a>
            </div>
          </div>
        </Reveal>

        <div className="row g-4">
          {industries.map((industry, index) => (
            <div className="col-lg-6" key={industry.name}>
              <Reveal animation="up" delay={index * 100} className="h-100">
                <div className="ref-industry-item-card h-100">
                  <div className="ref-industry-card-top">
                    <h3 className="ref-industry-card-title">{industry.name}</h3>
                    <span className="ref-industry-badge">
                      {industry.success}% Success Rate
                    </span>
                  </div>
                  <p className="ref-industry-card-text">{industry.text}</p>
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}