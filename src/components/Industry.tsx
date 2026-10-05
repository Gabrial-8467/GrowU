import { useState } from 'react';
import Svg from './svg';
import { ResultArea, Reveal } from './Primitives';
import { industries } from '../data/content';

const SIDES = [
  'information-technology',
  'education',
  'fitness',
  'health-care',
  'logistics',
  'real-estate',
];

const img = (kind: 'main' | 'side', name: string) =>
  `/assets/img/home/industry/${kind}/${name}.png`;

export default function Industry() {
  const [active, setActive] = useState(0);

  return (
    <section className="home4-industry-section mb-130" id="industry">
      <div className="container">
        <Reveal animation="down" className="row g-4 align-items-center mb-70">
          <div className="col-lg-3 col-md-4">
            <ResultArea />
          </div>
          <div className="col-lg-6 col-md-8">
            <div className="section-title2">
              <h2 className="title">
                <strong>Making a Significant </strong> Impact.
              </h2>
              <p>We deliver expert, personalized solutions tailored to your unique industry and objectives.</p>
            </div>
          </div>
        </Reveal>

        <div className="row gy-5 align-items-md-end">
          <div className="col-lg-3 d-lg-block d-none">
            <div className="industry-img">
              {industries.map((industry, index) => (
                <div className={`single-img${active === index ? ' active' : ''}`} key={industry.name}>
                  <img src={img('side', SIDES[index])} alt={industry.name} loading="lazy" />
                </div>
              ))}
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="industry-list">
              <ul>
                {industries.map((industry, index) => (
                  <li
                    key={industry.name}
                    className={active === index ? 'active' : ''}
                    onMouseEnter={() => setActive(index)}
                    onFocus={() => setActive(index)}
                    onClick={() => setActive(index)}
                  >
                    <h2 className="title">
                      <a href={industry.href}>{industry.name}</a>
                    </h2>
                    <div className="industry-content">
                      <p>{industry.text}</p>
                      <Svg name="divider313" className="divider" width={313} height={6} />
                    </div>
                  </li>
                ))}
              </ul>
              <a href="#industry" className="details-btn">
                View All Industries <Svg name="arrowRight" width={10} height={10} />
              </a>
            </div>
          </div>

          <div className="col-lg-5 col-md-6">
            <div className="industry-img two">
              {industries.map((industry, index) => (
                <div className={`single-img${active === index ? ' active' : ''}`} key={industry.name}>
                  <img src={img('main', SIDES[index])} alt={industry.name} loading="lazy" />
                  <div className="counter-wrap theme-bg">
                    <div className="counter-content">
                      <div className="number">
                        <h4>{industry.success}</h4>
                        <span>%</span>
                      </div>
                      <span>Success Rate</span>
                    </div>
                    <Svg name="industryArrow" className="arrow" width={15} height={15} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}