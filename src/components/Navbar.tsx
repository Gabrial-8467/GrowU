import { useEffect, useState } from 'react';
import { useScrolled, useScrollLock } from '../hooks';

const LOGO = '/assets/img/logo/layer-0.png';
const PHONE = '+61 466 522 307';
const PHONE_HREF = 'tel:+61466522307';
const EMAIL = 'info@growudigital.com';
const EMAIL_HREF = 'mailto:info@growudigital.com';

const SOLUTIONS = [
  {
    title: 'Search Engine Optimization',
    desc: 'Rank higher on Google organically',
    icon: 'bx bx-search-alt',
    href: '#services',
  },
  {
    title: 'Pay-Per-Click Advertising',
    desc: 'Targeted ROI-driven paid ads',
    icon: 'bx bx-target-lock',
    href: '#services',
  },
  {
    title: 'Social Media Marketing',
    desc: 'Grow brand reach and engagement',
    icon: 'bx bx-message-rounded-dots',
    href: '#services',
  },
  {
    title: 'Content Marketing',
    desc: 'Strategic copy, blogs & assets',
    icon: 'bx bx-file-blank',
    href: '#services',
  },
  {
    title: 'Email Marketing',
    desc: 'Automated high-converting funnels',
    icon: 'bx bx-envelope',
    href: '#services',
  },
  {
    title: 'Conversion Rate Optimization',
    desc: 'Turn more clicks into customers',
    icon: 'bx bx-line-chart',
    href: '#services',
  },
];

const INDUSTRIES_LIST = [
  { label: 'Information Technology', href: '#industry', icon: 'bx bx-code-alt' },
  { label: 'Education', href: '#industry', icon: 'bx bxs-graduation' },
  { label: 'Fitness', href: '#industry', icon: 'bx bx-dumbbell' },
  { label: 'Health Care', href: '#industry', icon: 'bx bx-plus-medical' },
  { label: 'Logistics', href: '#industry', icon: 'bx bx-package' },
  { label: 'Real Estate', href: '#industry', icon: 'bx bx-building-house' },
];

const ABOUT_LINKS = [
  { label: 'Company Profile', href: '#about', icon: 'bx bx-buildings' },
  { label: 'Why GrowU', href: '#why', icon: 'bx bx-check-shield' },
  { label: 'Our Proven Process', href: '#process', icon: 'bx bx-git-repo-forked' },
  { label: 'Client Feedback', href: '#testimonial', icon: 'bx bx-star' },
];

export default function Navbar({ onContact }: { onContact?: () => void }) {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const scrolled = useScrolled(20);

  useScrollLock(drawerOpen);

  useEffect(() => {
    const handleResize = () => {
      setActiveDropdown(null);
      if (window.innerWidth >= 992) {
        setDrawerOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleDropdown = (key: string) => {
    setActiveDropdown((prev) => (prev === key ? null : key));
  };

  const closeDropdowns = () => setActiveDropdown(null);

  const handleCtaClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setDrawerOpen(false);
    onContact?.();
  };

  return (
    <>
      <header className={`modern-navbar-wrapper${scrolled ? ' scrolled' : ''}`}>
        <div className="container">
          <div className="modern-navbar-inner">
            {/* Brand Logo */}
            <a href="#home" className="modern-navbar-brand" aria-label="GrowU Digital Home">
              <img src={LOGO} alt="GrowU Digital Australia" width={180} height={40} />
            </a>

            {/* Desktop Navigation */}
            <nav aria-label="Primary Navigation">
              <ul className="modern-navbar-nav">
                <li className="modern-nav-item">
                  <a href="#home" className="modern-nav-link active">
                    Home
                  </a>
                </li>

                {/* About Dropdown */}
                <li
                  className={`modern-nav-item${activeDropdown === 'about' ? ' open' : ''}`}
                  onMouseEnter={() => setActiveDropdown('about')}
                  onMouseLeave={closeDropdowns}
                >
                  <button
                    type="button"
                    className="modern-nav-link"
                    onClick={() => toggleDropdown('about')}
                    aria-expanded={activeDropdown === 'about'}
                  >
                    <span>About Us</span>
                    <i className="bx bx-chevron-down dropdown-arrow" />
                  </button>

                  <ul className="modern-dropdown-menu">
                    {ABOUT_LINKS.map((link) => (
                      <li key={link.label}>
                        <a
                          href={link.href}
                          className="modern-dropdown-link"
                          onClick={closeDropdowns}
                        >
                          <i className={link.icon} />
                          <span>{link.label}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>

                {/* Solutions Mega Menu */}
                <li
                  className={`modern-nav-item${activeDropdown === 'solutions' ? ' open' : ''}`}
                  onMouseEnter={() => setActiveDropdown('solutions')}
                  onMouseLeave={closeDropdowns}
                >
                  <button
                    type="button"
                    className="modern-nav-link"
                    onClick={() => toggleDropdown('solutions')}
                    aria-expanded={activeDropdown === 'solutions'}
                  >
                    <span>Solutions</span>
                    <i className="bx bx-chevron-down dropdown-arrow" />
                  </button>

                  <div className="modern-dropdown-menu mega-solutions">
                    {SOLUTIONS.map((item) => (
                      <a
                        key={item.title}
                        href={item.href}
                        className="modern-mega-item"
                        onClick={closeDropdowns}
                      >
                        <div className="modern-mega-icon">
                          <i className={item.icon} />
                        </div>
                        <div className="modern-mega-content">
                          <span className="title">{item.title}</span>
                          <span className="desc">{item.desc}</span>
                        </div>
                      </a>
                    ))}
                  </div>
                </li>

                {/* Industries Dropdown */}
                <li
                  className={`modern-nav-item${activeDropdown === 'industries' ? ' open' : ''}`}
                  onMouseEnter={() => setActiveDropdown('industries')}
                  onMouseLeave={closeDropdowns}
                >
                  <button
                    type="button"
                    className="modern-nav-link"
                    onClick={() => toggleDropdown('industries')}
                    aria-expanded={activeDropdown === 'industries'}
                  >
                    <span>Industries</span>
                    <i className="bx bx-chevron-down dropdown-arrow" />
                  </button>

                  <ul className="modern-dropdown-menu">
                    {INDUSTRIES_LIST.map((ind) => (
                      <li key={ind.label}>
                        <a
                          href={ind.href}
                          className="modern-dropdown-link"
                          onClick={closeDropdowns}
                        >
                          <i className={ind.icon} />
                          <span>{ind.label}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>

                <li className="modern-nav-item">
                  <a href="#why" className="modern-nav-link">
                    Our Work
                  </a>
                </li>

                <li className="modern-nav-item">
                  <a href="#testimonial" className="modern-nav-link">
                    Case Study
                  </a>
                </li>
              </ul>
            </nav>

            {/* Right Action Area */}
            <div className="modern-navbar-actions">
              <a href={PHONE_HREF} className="modern-nav-phone" title="Call GrowU Digital">
                <i className="bx bx-phone-call" />
                <span>{PHONE}</span>
              </a>

              <button
                type="button"
                className="modern-nav-cta"
                onClick={handleCtaClick}
                aria-label="Get A Proposal"
              >
                <span>Get A Proposal</span>
                <i className="bx bx-right-arrow-alt" style={{ fontSize: '18px' }} />
              </button>

              <button
                type="button"
                className="modern-mobile-toggle"
                onClick={() => setDrawerOpen(true)}
                aria-label="Open mobile navigation"
                aria-expanded={drawerOpen}
              >
                <i className="bx bx-menu" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <div
        className={`modern-mobile-overlay${drawerOpen ? ' open' : ''}`}
        onClick={() => setDrawerOpen(false)}
        aria-hidden={!drawerOpen}
      />

      {/* Mobile Offcanvas Drawer */}
      <aside
        className={`modern-mobile-drawer${drawerOpen ? ' open' : ''}`}
        aria-hidden={!drawerOpen}
      >
        <div className="modern-drawer-header">
          <a href="#home" onClick={() => setDrawerOpen(false)}>
            <img src={LOGO} alt="GrowU Digital" width={160} height={36} />
          </a>
          <button
            type="button"
            className="modern-drawer-close"
            onClick={() => setDrawerOpen(false)}
            aria-label="Close menu"
          >
            <i className="bx bx-x" />
          </button>
        </div>

        <ul className="modern-mobile-nav-list">
          <li className="modern-mobile-nav-item">
            <div className="modern-mobile-row">
              <a href="#home" onClick={() => setDrawerOpen(false)}>
                Home
              </a>
            </div>
          </li>

          {/* About Mobile */}
          <li className="modern-mobile-nav-item">
            <div className="modern-mobile-row">
              <button
                type="button"
                onClick={() =>
                  setMobileExpanded(mobileExpanded === 'about' ? null : 'about')
                }
              >
                About Us
              </button>
              <i
                className={`bx ${
                  mobileExpanded === 'about' ? 'bx-chevron-up' : 'bx-chevron-down'
                }`}
              />
            </div>
            {mobileExpanded === 'about' && (
              <ul className="modern-mobile-sublist">
                {ABOUT_LINKS.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} onClick={() => setDrawerOpen(false)}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>

          {/* Solutions Mobile */}
          <li className="modern-mobile-nav-item">
            <div className="modern-mobile-row">
              <button
                type="button"
                onClick={() =>
                  setMobileExpanded(mobileExpanded === 'solutions' ? null : 'solutions')
                }
              >
                Solutions
              </button>
              <i
                className={`bx ${
                  mobileExpanded === 'solutions' ? 'bx-chevron-up' : 'bx-chevron-down'
                }`}
              />
            </div>
            {mobileExpanded === 'solutions' && (
              <ul className="modern-mobile-sublist">
                {SOLUTIONS.map((item) => (
                  <li key={item.title}>
                    <a href={item.href} onClick={() => setDrawerOpen(false)}>
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>

          {/* Industries Mobile */}
          <li className="modern-mobile-nav-item">
            <div className="modern-mobile-row">
              <button
                type="button"
                onClick={() =>
                  setMobileExpanded(mobileExpanded === 'industries' ? null : 'industries')
                }
              >
                Industries
              </button>
              <i
                className={`bx ${
                  mobileExpanded === 'industries' ? 'bx-chevron-up' : 'bx-chevron-down'
                }`}
              />
            </div>
            {mobileExpanded === 'industries' && (
              <ul className="modern-mobile-sublist">
                {INDUSTRIES_LIST.map((ind) => (
                  <li key={ind.label}>
                    <a href={ind.href} onClick={() => setDrawerOpen(false)}>
                      {ind.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>

          <li className="modern-mobile-nav-item">
            <div className="modern-mobile-row">
              <a href="#why" onClick={() => setDrawerOpen(false)}>
                Our Work
              </a>
            </div>
          </li>

          <li className="modern-mobile-nav-item">
            <div className="modern-mobile-row">
              <a href="#testimonial" onClick={() => setDrawerOpen(false)}>
                Case Study
              </a>
            </div>
          </li>
        </ul>

        <div className="modern-drawer-contact-card">
          <a href={PHONE_HREF}>
            <i className="bx bx-phone" />
            <span>{PHONE}</span>
          </a>
          <a href={EMAIL_HREF}>
            <i className="bx bx-envelope" />
            <span>{EMAIL}</span>
          </a>
          <button
            type="button"
            className="modern-nav-cta w-100 mt-3 justify-content-center"
            onClick={handleCtaClick}
          >
            <span>Get A Proposal</span>
            <i className="bx bx-right-arrow-alt" />
          </button>
        </div>
      </aside>
    </>
  );
}