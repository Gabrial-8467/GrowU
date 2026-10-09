import { certifications } from '../data/content';
import { Reveal } from './Primitives';

export default function PartnerMarquee({ heading }: { heading?: React.ReactNode }) {
  return (
    <section className="ref-partners-section">
      <div className="container">
        <Reveal animation="down">
          <div className="ref-partners-heading">
            {heading || 'CERTIFIED EXPERTISE ACROSS ALL LEADING PLATFORMS'}
          </div>
          <div className="ref-partners-row">
            {certifications.map((src, i) => (
              <a href="#services" key={i} className="ref-partner-item">
                <img src={src} alt="Certified Platform Partner" loading="lazy" />
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}