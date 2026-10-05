import { certifications } from '../data/content';
import { Reveal } from './Primitives';

/**
 * Infinite scrolling logo strip used for platform certifications.
 * The list is duplicated so the CSS translate loop is seamless.
 */
export default function PartnerMarquee({ heading }: { heading: React.ReactNode }) {
  return (
    <div className="partner-area four mb-50">
      <div className="container">
        <Reveal animation="down" className="partner-title-area">
          <h6>{heading}</h6>
        </Reveal>
        <div className="partner-wrap">
          <div className="marquee">
            {[0, 1].map((copy) => (
              <div className="marquee__group" key={copy} aria-hidden={copy === 1}>
                {certifications.map((src, i) => (
                  <a href="#services" key={i}>
                    <img src={src} alt="" loading="lazy" />
                  </a>
                ))}
              </div>
            ))}
          </div>
          <div className="marquee-fallback">
            {certifications.map((src, i) => (
              <img key={i} src={src} alt="" loading="lazy" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}