import { Reveal } from './Primitives';
import Svg from './svg';
import { whyCards } from '../data/content';

export default function WhyGrowu() {
  return (
    <section className="home2-feature-section mb-130" id="why">
      <div className="container">
        <div className="row mb-60">
          <Reveal animation="down" className="col-lg-12 d-flex align-items-lg-end align-items-center justify-content-between gap-3 flex-wrap">
            <div className="section-title two">
              <span className="gradient-color-title sub-title">What we offer</span>
              <h2 className="title">Why Growudigital ?</h2>
            </div>
            <a className="primary-btn2 transparent" href="#about">
              <span className="gradient-color-title">
                Feature List <Svg name="arrowRight" width={10} height={10} />
              </span>
              <span>
                Feature List <Svg name="arrowRight" width={10} height={10} />
              </span>
            </a>
          </Reveal>
        </div>

        <div className="row g-4">
          {whyCards.map((card, index) => (
            <div className="col-lg-4 col-md-6" key={card.title}>
              <Reveal animation="down" delay={index === 2 ? 600 : 0} className="h-100">
                <div className="feature-card2 magnetic-item h-100">
                  <div className="feature-content">
                    <h3 className="sub-title">{card.title}</h3>
                    <p>{card.text}</p>
                  </div>
                  <div className="feature-img">
                    <img src={card.img} alt={card.title} loading="lazy" />
                  </div>
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}