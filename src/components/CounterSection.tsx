import { Button4, Reveal } from './Primitives';
import Svg from './svg';
import { counters } from '../data/content';
import { useCountUp, useReveal } from '../hooks';

function Counter({
  value,
  label,
  tone,
  vector,
  active,
  delay,
}: {
  value: number;
  label: string;
  tone: string;
  vector: string;
  active: boolean;
  delay: number;
}) {
  const current = useCountUp(value, active, 1400 + delay);

  return (
    <div className="col-lg-3 col-sm-6">
      <Reveal animation="down">
        <div className={`single-counter ${tone}`}>
          <img src={vector} alt="" className="vector" loading="lazy" />
          <div className="conter-content">
            <div className="number">
              <h2>{current}</h2>
              <span>+</span>
            </div>
            <p>{label}</p>
          </div>
        </div>
      </Reveal>
    </div>
  );
}

export default function CounterSection({ onProposal }: { onProposal: () => void }) {
  const { ref, visible } = useReveal();

  return (
    <div className="home4-counter-section mb-130" ref={ref}>
      <Svg name="counterBgShape" className="bg-shape" width={1920} height={472} />

      <div className="container">
        <div className="row g-xl-4 g-lg-3 g-4 mb-50">
          {counters.map((counter, index) => (
            <Counter
              key={counter.label}
              {...counter}
              active={visible}
              delay={index * 120}
            />
          ))}
        </div>

        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-8 col-md-10">
            <Reveal animation="up">
              <div className="contact-btn-area two">
                <h6>Committed to delivering the best service our client deserves.</h6>
                <Button4 label="Get A Proposal" variant="transparent" onClick={onProposal} />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  );
}