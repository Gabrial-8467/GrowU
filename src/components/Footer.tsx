import { useState } from 'react';
import Svg from './svg';
import { quickLinks, socials, usefulLinks } from '../data/content';



export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const subscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail('');
  };

  return (
    <footer className="footer-section style-4" id="contact">
      <div className="container">
        <div className="footer-menu-wrap">
          <div className="row gy-5">
            <div className="col-lg-3 col-md-6">
              <div className="footer-contact-wrap">
                <div className="widget-title">
                  <div className="company-logo">
                    <a href="#home" aria-label="Growu Digital">
                      <img className="footer-logo" src="/assets/img/logo/gtransparent.png" alt="Growu Digital" />
                    </a>
                  </div>
                </div>
                <div className="title-area">
                  <p className="white-text">
                    We transform bold ideas into powerful digital solutions - blending smart technology, creative
                    innovation, and real business impact.
                  </p>
                  <p className="text-white mt-2">
                    <i className="bi bi-briefcase-fill" /> &nbsp;ABN: 63 634 476 369
                  </p>
                </div>
              </div>
            </div>

            <div className="col-xl-2 col-lg-2 justify-content-lg-end col-md-6 d-flex">
              <div className="footer-widget">
                <div className="widget-title">
                  <h3>Quick links</h3>
                </div>
                <ul className="widget-list grid-list">
                  {quickLinks.map((link) => (
                    <li key={link.label} className="hover-move">
                      <a href={link.href}>
                        <i className="bx bx-right-arrow-alt" />
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="col-xl-3 col-lg-3 d-flex justify-content-lg-end col-md-6">
              <div className="footer-widget sm-widget">
                <div className="widget-title">
                  <h3>Useful Links</h3>
                </div>
                <ul className="widget-list grid-list">
                  {usefulLinks.map((link) => (
                    <li key={link.label} className="hover-move">
                      <a href={link.href}>
                        <i className="bx bx-right-arrow-alt" />
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="col-lg-4 d-flex justify-content-lg-end col-md-6">
              <div className="newsletter-area">
                <h3>Newsletter</h3>
                <div className="sm-footer">
                  <form className="newsletter-form" onSubmit={subscribe}>
                    <input
                      type="email"
                      placeholder={subscribed ? 'Thanks for subscribing!' : 'Email'}
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        setSubscribed(false);
                      }}
                      aria-label="Email address"
                    />
                    <button type="submit" style={{ background: 'none' }} aria-label="Subscribe">
                      <Svg name="newsletterSubmit" width={18} height={18} />
                    </button>
                  </form>

                  <div className="social-area">
                    <h5>Let's Connect</h5>
                    <ul className="social-list">
                      {socials.map((social) => (
                        <li key={social.label}>
                          <a href={social.href} target="_blank" rel="noreferrer" aria-label={social.label}>
                            <i className={`bx ${social.icon}`} />
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="copyright-and-social-area">
            <p className="text-white">
              © 2025 |{' '}
              <a href="https://growudigital.com.au/" target="_blank" rel="noreferrer">
                Growu Digital
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}