import Svg from './svg';
import { Reveal } from './Primitives';
import { processSteps } from '../data/content';

export default function Process() {
  return (
    <section className="home3-process-section mb-130">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-7">
            <div className="process-wrapper">
              <Reveal animation="down" className="section-title three white mb-60">
                <span>Working Step</span>
                <h2>Our Proven Process</h2>
              </Reveal>

              <div className="process-card-area">
                <div className="row gy-md-5 gy-4 justify-content-between">
                  {processSteps.map((step, index) => (
                    <div className="col-xl-5 col-md-6" key={step.no}>
                      <Reveal animation={index === 0 ? 'left' : index === 1 ? 'right' : 'up'} delay={index * 200}>
                        <div className={`process-card2 ${step.tone}`}>
                          {step.align === 'left' ? (
                            <>
                              <div className="step-no">
                                <span>Step</span>
                                <strong>{step.no}</strong>
                              </div>
                              <h4>
                                {step.title[0]} <br />
                                {step.title[1]}
                              </h4>
                            </>
                          ) : (
                            <>
                              <h4>
                                {step.title[0]} <br />
                                {step.title[1]}
                              </h4>
                              <div className="step-no">
                                <span>Step</span>
                                <strong>{step.no}</strong>
                              </div>
                            </>
                          )}
                        </div>
                      </Reveal>
                    </div>
                  ))}
                </div>

                <Svg name="processMotionPath" className="vector" width={204} height={650} />
              </div>
            </div>
          </div>

          <div className="col-lg-5 p-0">
            <div className="founder-area">
              <Svg name="founderQuote" className="quote" width={136} height={152} />
              <div className="founder-content">
                <Svg name="divider200Alt" width={200} height={6} />
                <p>
                  We specialize in providing a comprehensive range of digital services designed to help companies
                  build, grow and enhance their presence in the digital world.
                </p>
                <div className="founder-name-and-desig">
                  <span>CEO &amp; Founder</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}