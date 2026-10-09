import { Reveal } from './Primitives';
import { services } from '../data/content';

export default function Services() {
  return (
    <section className="ref-services-section" id="services">
      <div className="container">
        <Reveal animation="down">
          <div className="ref-section-header-row">
            <div>
              <span className="ref-eyebrow">COMPREHENSIVE CAPABILITIES</span>
              <h2 className="ref-heading">Smart Solutions. Guaranteed.</h2>
            </div>
            <div>
              <span className="ref-pill-badge">
                <span className="badge-dot" />
                100% Measurable Results &amp; ROI
              </span>
            </div>
          </div>
        </Reveal>

        <div className="row g-4">
          {services.map((service, index) => (
            <div className="col-lg-4 col-md-6" key={service.title}>
              <Reveal animation="up" delay={(index % 3) * 150} className="h-100">
                <div className="ref-service-grid-card">
                  <div className="ref-service-icon-box">
                    <i className={service.icon || 'bx bx-check-shield'} />
                  </div>

                  <h3 className="ref-service-card-title">{service.title}</h3>

                  <ul className="ref-service-bullet-list">
                    {service.points.map((point, i) => (
                      <li key={i}>{point.replace(/^\+\s*/, '')}</li>
                    ))}
                  </ul>

                  <a href={service.href} className="ref-service-btn">
                    <span>View Details</span>
                    <i className="bx bx-right-arrow-alt" style={{ fontSize: '18px' }} />
                  </a>
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}