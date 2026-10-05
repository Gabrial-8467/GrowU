import { Reveal } from './Primitives';
import { techStack, trustedClients } from '../data/content';

export default function TechStack() {
  return (
    <section className="tech-stack-section">
      <div className="container py-5">
        <Reveal animation="up">
          <h1 className="mb-4 title text-center">Our Technology Stack</h1>
          <p className="mb-5 text-center sub-title">
            The tools we use to build scalable, secure, and innovative solutions.
          </p>
        </Reveal>

        <Reveal animation="up" delay={150} className="justify-content-center tech-container">
          {techStack.map((src) => (
            <div className="tech-item-container" key={src}>
              <div className="tech-item" style={{ backgroundImage: `url('${src}')` }} />
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

export function TrustedClients() {
  return (
    <div className="partner-area four pt-130">
      <div className="container">
        <Reveal animation="down" className="partner-title-area">
          <h6 style={{ background: '#e9f7fb' }}>
            Our <span className="sub-title">Trusted Clients</span> and <span className="sub-title">Partners </span>
          </h6>
        </Reveal>
        <div className="partner-wrap">
          <div className="partner-grid">
            {trustedClients.map((src, i) => (
              <div className="partner-grid-item service-card" key={i}>
                <img src={src} alt="" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}