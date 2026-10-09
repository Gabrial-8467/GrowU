import { Reveal } from './Primitives';
import { whyCards } from '../data/content';

export default function WhyGrowu() {
  return (
    <section className="ref-why-section" id="why">
      <div className="container">
        <Reveal animation="down">
          <div className="ref-section-header-row mb-4">
            <div>
              <span className="ref-eyebrow">WHAT WE OFFER</span>
              <h2 className="ref-heading">Why Growudigital ?</h2>
            </div>
            <div>
              <a href="#services" className="ref-feature-list-link">
                <span>Feature List</span>
                <i className="bx bx-right-arrow-alt" style={{ fontSize: '18px' }} />
              </a>
            </div>
          </div>
        </Reveal>

        <div className="row g-4">
          {whyCards.map((card, index) => (
            <div className="col-lg-4 col-md-6" key={card.title}>
              <Reveal animation="up" delay={index * 150} className="h-100">
                <div className="ref-why-feature-card">
                  <div className="ref-why-card-img">
                    <img src={card.img} alt={`${card.title} Illustration`} loading="lazy" />
                  </div>
                  <h3 className="ref-why-card-title">{card.title}</h3>
                  <p className="ref-why-card-text">{card.text}</p>
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}