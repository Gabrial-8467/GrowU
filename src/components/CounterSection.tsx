import { Reveal } from './Primitives';
import { counters } from '../data/content';
import { useCountUp, useReveal } from '../hooks';

function CounterItem({
  value,
  label,
  active,
  delay,
}: {
  value: number;
  label: string;
  active: boolean;
  delay: number;
}) {
  const current = useCountUp(value, active, 1200 + delay);

  return (
    <div className="col-lg-3 col-sm-6">
      <Reveal animation="down" delay={delay}>
        <div className="ref-counter-box">
          <div className="number">{current}+</div>
          <div className="label">{label}</div>
        </div>
      </Reveal>
    </div>
  );
}

export default function CounterSection({ onProposal }: { onProposal: () => void }) {
  const { ref, visible } = useReveal();

  return (
    <section className="container mb-5" ref={ref}>
      <div className="row g-4 ref-counters-row">
        {counters.map((counter, index) => (
          <CounterItem
            key={counter.label}
            value={counter.value}
            label={counter.label}
            active={visible}
            delay={index * 120}
          />
        ))}
      </div>

      <div className="row mt-4">
        <div className="col-12">
          <Reveal animation="up">
            <div className="ref-commitment-banner">
              <div className="banner-left">
                <span className="handshake-icon">🤝</span>
                <span className="banner-text">
                  Committed to delivering the best service our client deserves.
                </span>
              </div>
              <button
                type="button"
                className="banner-btn"
                onClick={onProposal}
              >
                <span>Get A Proposal</span>
                <i className="bx bx-right-arrow-alt" style={{ fontSize: '18px' }} />
              </button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}