import Svg from './svg';
import { ResultArea, Reveal } from './Primitives';
import { services } from '../data/content';

export default function Services() {
  return (
    <section className="home4-service-section mb-130" id="services">
      <div className="container">
        <Reveal animation="down" className="mb-70">
          <div className="row g-4 justify-content-between align-items-end">
            <div className="col-xl-5 col-lg-6">
              <div className="section-title2">
                <h2 className="title">Smart Solutions. Guaranteed.</h2>
              </div>
            </div>
            <div className="col-lg-3 d-flex justify-content-lg-end">
              <ResultArea />
            </div>
          </div>
        </Reveal>

        <div className="row gy-md-5 gy-4">
          {services.map((service, index) => (
            <div className="col-lg-4 col-md-6" key={service.title.join('-')}>
              <Reveal animation="down" delay={(index % 3) * 200}>
                <div className={`service-card3 ${service.tone}`}>
                  <h4>
                    <a href={service.href}>
                      {service.title[0]} <br />
                      {service.title[1]}
                    </a>
                  </h4>
                  <ul>
                    {service.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                  <a href={service.href} id="btn">
                    View Details <span />
                  </a>
                  <Svg name="serviceShape" className="shape" width={68} height={250} />
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}