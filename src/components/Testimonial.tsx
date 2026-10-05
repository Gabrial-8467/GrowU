import { useCallback, useEffect, useRef, useState } from 'react';
import Svg from './svg';
import { ResultArea, Reveal } from './Primitives';
import { awards, ratings, testimonials } from '../data/content';

const AUTOPLAY_MS = 6000;

function Stars({ half }: { half: boolean }) {
  return (
    <ul className="star">
      {[0, 1, 2, 3].map((i) => (
        <li key={i}>
          <i className="bi bi-star-fill" />
        </li>
      ))}
      <li>
        <i className={`bi ${half ? 'bi-star-half' : 'bi-star-fill'}`} />
      </li>
    </ul>
  );
}

export default function Testimonial() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timer = useRef<number | null>(null);

  const total = testimonials.length;
  const go = useCallback((dir: number) => setIndex((i) => (i + dir + total) % total), [total]);

  useEffect(() => {
    if (paused) return;
    timer.current = window.setInterval(() => go(1), AUTOPLAY_MS);
    return () => {
      if (timer.current) window.clearInterval(timer.current);
    };
  }, [go, paused]);

  return (
    <div className="home4-testimonial-section" id="testimonial">
      <img src="/assets/img/home4/testimonial-bg.png" alt="" className="testimonial-bg light" />
      <img src="/assets/img/home4/testimonial-bg-dark.png" alt="" className="testimonial-bg dark" />

      <div className="container">
        <div className="row g-4">
          <div className="col-lg-9 position-relative">
            <Svg name="testimonialDivider" className="divider" width={6} height={644} />
            <div className="testimonial-area">
              <Reveal animation="down" className="section-title2">
                <h2>
                  <strong className="title">They Love Us!</strong>
                  <img src="/assets/img/home4/emoji.png" alt="" />
                </h2>
                <p>
                  Our clients value our strengths and consistently offer constructive feedback that helps us improve
                  and evolve.
                </p>
              </Reveal>

              <div
                className="testimonial-slider swiper home2-testimonial-slider mt-70"
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => setPaused(false)}
              >
                {testimonials.map((item, i) => (
                  <div className={`testimonial-slide swiper-slide${i === index ? ' active' : ''}`} key={item.name} aria-hidden={i !== index}>
                    <div className="testimonial-card4">
                      <div className="row g-4">
                        <div className="col-xl-4 col-md-5">
                          <div className="testimonial-img">
                            <img src={item.img} alt="" loading="lazy" />
                          </div>
                        </div>
                        <div className="col-md-7">
                          <div className="testimonial-content">
                            <span>{item.badge}</span>
                            <p>{item.text}</p>
                            <div className="author-area">
                              <h5>{item.name}</h5>
                              <span>{item.role}</span>
                            </div>
                            <Svg name="testimonialQuote" className="quote" width={110} height={82} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="row">
              <div className="col-lg-11">
                <div className="rating-and-btn-area">
                  {ratings.map((rating) => (
                    <a href="#testimonial" className="single-rating" key={rating.reviews}>
                      <div className="review">
                        <span>{rating.label}</span>
                        {rating.logo === 'google' ? <Svg name="googleReviews" width={74} height={21} /> : <img src={rating.logo} alt="img" width={74} height={21} />}
                      </div>
                      <div className="rating">
                        <Stars half={rating.half} />
                        <span>{rating.reviews} REVIEWS</span>
                      </div>
                    </a>
                  ))}

                  <div className="slider-btn-grp">
                    <button type="button" className="slider-btn" onClick={() => go(-1)} aria-label="Previous review">
                      <Svg name="sliderPrev" width={14} height={14} />
                    </button>
                    <button type="button" className="slider-btn" onClick={() => go(1)} aria-label="Next review">
                      <Svg name="sliderNext" width={14} height={14} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3">
            <Reveal animation="right">
              <div className="result-and-award-area">
                <ResultArea />
                <div className="award-area">
                  <h4 className="award-title">
                    Our Achievements <Svg name="awardArrow" width={13} height={13} />
                  </h4>
                  <ul className="award-list">
                    {awards.map((src, i) => (
                      <li className="single-award" key={i}>
                        <img src={src} alt="" loading="lazy" />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  );
}