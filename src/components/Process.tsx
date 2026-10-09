import { Reveal } from './Primitives';
import { processSteps } from '../data/content';

export default function Process() {
  return (
    <section className="container mb-120" id="process">
      <div className="ref-process-dark-section">
        <div className="row g-4 align-items-stretch">
          <div className="col-lg-7">
            <Reveal animation="left">
              <span className="ref-process-eyebrow">WORKING STEP</span>
              <h2 className="ref-process-heading">Our Proven Process</h2>

              <div className="row g-3">
                {processSteps.map((step, index) => (
                  <div className="col-md-4" key={step.no}>
                    <Reveal animation="up" delay={index * 150} className="h-100">
                      <div className={`ref-step-card ${step.tone}`}>
                        <span
                          className={`step-tag ${
                            index === 0
                              ? 'tag-cyan'
                              : index === 1
                                ? 'tag-blue'
                                : 'tag-light'
                          }`}
                        >
                          STEP {step.no}
                        </span>
                        <h4 className="step-title">{step.title}</h4>
                        <p className="step-desc">{step.desc}</p>
                      </div>
                    </Reveal>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="col-lg-5">
            <Reveal animation="right" className="h-100">
              <div className="ref-process-quote-card">
                <span className="quote-mark">”</span>
                <p className="quote-text">
                  &ldquo;We specialize in providing a comprehensive range of digital
                  services designed to help companies build, grow and enhance
                  their presence in the digital world.&rdquo;
                </p>
                <div className="ref-quote-author">
                  <div className="ref-author-avatar">GD</div>
                  <div className="ref-author-info">
                    <div className="name">CEO &amp; Founder</div>
                    <div className="role">GrowU Digital Australia</div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}