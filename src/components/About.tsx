import { Reveal } from './Primitives';

export default function About() {
  return (
    <section className="ref-about-section" id="about">
      <div className="container">
        <div className="row gy-5 align-items-center">
          <div className="col-lg-6">
            <Reveal animation="left">
              <div className="ref-about-img-container">
                <img
                  src="/assets/img/grow/about-image.png"
                  alt="Where Creativity Meets Digital Innovation"
                  loading="lazy"
                />
                <div className="ref-about-badge-overlay">
                  100% Measurable Results &amp; ROI
                </div>
              </div>
            </Reveal>
          </div>

          <div className="col-lg-6">
            <Reveal animation="right">
              <div className="ref-about-content">
                <span className="ref-eyebrow">INNOVATION &amp; MASTERY</span>
                <h2 className="ref-heading mb-4">
                  Where Creativity Meets Digital Innovation
                </h2>
                <p className="ref-about-desc">
                  We are a dynamic team of digital experts dedicated to crafting
                  visually stunning, innovative, and feature-rich web and mobile
                  solutions aligned with your business objectives. Our cutting-edge
                  digital marketing strategies are designed to drive measurable
                  growth and deliver impactful results that elevate your brand.
                </p>
                <p className="ref-about-desc">
                  From responsive website development and engaging graphic design to
                  effective SEO and comprehensive digital marketing, we bring
                  unmatched technical expertise and professionalism to every
                  project. No matter your vision, we collaborate with you to
                  transform and grow your business with modern, high-quality
                  solutions that make a lasting impact in the digital landscape.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}