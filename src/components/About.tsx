import { Reveal } from './Primitives';
import Svg from './svg';

export default function About() {
  return (
    <section className="social-responsibility-section mb-130" id="about">
      <div className="container">
        <Reveal animation="down" className="title-area">
          <Svg name="dividerWide" className="divider" width={1320} height={6} />
          <h2 className="title">Where Creativity Meets Digital Innovation </h2>
          <Svg name="dividerWide" className="divider" width={1320} height={6} />
        </Reveal>

        <div className="content-and-img-wrap">
          <div className="row gy-md-5 gy-4">
            <div className="col-lg-6">
              <Reveal animation="left">
                <div className="content-area">
                  <p>
                    We are a dynamic team of digital experts dedicated to crafting visually stunning, innovative,
                    and feature-rich web and mobile solutions aligned with your business objectives. Our cutting-edge
                    digital marketing strategies are designed to drive measurable growth and deliver impactful results
                    that elevate your brand.
                    <br />
                    From responsive website development and engaging graphic design to effective SEO and
                    comprehensive digital marketing, we bring unmatched technical expertise and professionalism to
                    every project. No matter your vision, we collaborate with you to transform and grow your business
                    with modern, high-quality solutions that make a lasting impact in the digital landscape.
                  </p>
                </div>
              </Reveal>
            </div>
            <div className="col-lg-6">
              <Reveal animation="right">
                <img src="/assets/img/grow/about-image.png" alt="About Growu Digital" loading="lazy" />
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}