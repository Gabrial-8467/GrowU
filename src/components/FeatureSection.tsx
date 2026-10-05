import { Button4, Reveal } from './Primitives';
import Svg from './svg';
import { features } from '../data/content';

export default function FeatureSection({ onTalk }: { onTalk: () => void }) {
  return (
    <section className="home4-feature-section mb-130">
      <div className="container">
        <div className="row justify-content-lg-end mb-70">
          <div className="col-xl-10 col-lg-11">
            <div className="row g-4 justify-content-between align-items-end">
              <div className="col-xl-8 col-lg-8">
                <Reveal animation="left">
                  <div className="section-title2">
                    <h2 className="title">
                      Smart <strong>Marketing . </strong> Simple Growth.
                    </h2>
                    <p>We deliver streamlined digital strategies that effortlessly boost your brand's online presence.</p>
                  </div>
                </Reveal>
              </div>
              <div className="col-lg-4 col-xl-4" />
            </div>
          </div>
        </div>

        <div className="row g-4 mb-50">
          {features.map((feature, index) => (
            <div className="col-xl-3 col-lg-4 col-md-6" key={feature.title}>
              <Reveal animation="down" delay={(index + 1) * 200} className="h-100">
                <div className={`feature-card3 ${feature.tone} magnetic-item`}>
                  <Svg name="featureIconB" className="shape" width={195} height={118} />
                  <Svg name="featureIconA" className="arrow" width={24} height={24} />
                  <div className="feature-content">
                    <h4 className="sub-title">{feature.title}</h4>
                    <p>{feature.text}</p>
                  </div>
                </div>
              </Reveal>
            </div>
          ))}
        </div>

        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-8 col-md-10">
            <Reveal animation="up" delay={200}>
              <div className="contact-btn-area two">
                <h6>Committed to delivering the best service our client deserves.</h6>
                <Button4 label="Let's Talk" variant="transparent" onClick={onTalk} />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}