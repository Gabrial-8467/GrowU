import { useEffect, useState } from 'react';
import Svg from './svg';
import { Button1, Button4 } from './Primitives';
import { menuItems, type MenuGroup, type MenuItem } from '../data/content';
import { useScrolled, useScrollLock } from '../hooks';

const LOGO = '/assets/img/logo/layer-0.png';
const PHONE = '+61 466 522 307';
const PHONE_HREF = 'tel:+61466522307';

export default function Navbar({ onContact }: { onContact?: () => void }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<number | null>(null);
  const scrolled = useScrolled(30);

  useScrollLock(drawerOpen);

  useEffect(() => {
    const close = () => setOpenIndex(null);
    window.addEventListener('resize', close);
    return () => window.removeEventListener('resize', close);
  }, []);

  const toggle = (index: number) => setOpenIndex((prev) => (prev === index ? null : index));

  const openContact = (event: React.MouseEvent) => {
    event.preventDefault();
    onContact?.();
  };

  return (
    <>
      <header className={`header-area style-4${scrolled ? ' sticky' : ''}`}>
        <div className="container-fluid d-flex flex-nowrap align-items-center justify-content-evenly">
          <div className="company-logo">
            <a className="logo-dark" href="#home" aria-label="Growu Digital home">
              <img className="img-fluid" src={LOGO} alt="image" width={220} height={48} />
            </a>
            <a className="logo-light" href="#home" aria-hidden="true" tabIndex={-1}>
              <img className="img-fluid" src={LOGO} alt="" width={220} height={48} />
            </a>
          </div>

          <div className="menu-wrap">
            <div className="main-menu">
              <div className="mobile-logo-area d-lg-none d-flex align-items-center justify-content-evenly">
                <a className="mobile-logo-wrap" href="#home">
                  <img className="img-fluid light" src={LOGO} alt="image" width={220} height={48} />
                  <img className="img-fluid dark" src={LOGO} alt="" width={220} height={48} />
                </a>
                <button type="button" className="menu-close-btn" onClick={() => setDrawerOpen(false)} aria-label="Close menu">
                  <i className="bi bi-x" />
                </button>
              </div>

              <ul className="menu-list">
                {menuItems.map((item, index) => (
                  <li
                    key={item.label}
                    className={`${item.active ? 'active' : ''}${item.groups || item.mega ? ' menu-item-has-children' : ''}${item.mega ? ' position-inherit' : ''}`}
                    onMouseEnter={() => (item.groups || item.mega) && setOpenIndex(index)}
                    onMouseLeave={() => setOpenIndex(null)}
                  >
                    {item.href ? (
                      <a className={item.active ? '' : ''} href={item.href}>
                        {item.label}
                      </a>
                    ) : (
                      <button type="button" className="drop-down" onClick={() => toggle(index)} aria-expanded={openIndex === index}>
                        {item.label}
                      </button>
                    )}

                    {item.groups || item.mega ? (
                      <i
                        className={`bi bi-plus dropdown-icon${openIndex === index ? ' active' : ''}`}
                        aria-hidden="true"
                        onClick={() => toggle(index)}
                      />
                    ) : null}

                    {item.groups && !item.mega ? (
                      <SubMenu links={item.groups[0].links} open={openIndex === index} />
                    ) : null}
                  </li>
                ))}
              </ul>

              <div className="btn-and-contact-area d-lg-none d-block">
                <Button4
                  label="Let’s Talk"
                  href="#contact"
                  onClick={(event) => {
                    setDrawerOpen(false);
                    openContact(event);
                  }}
                />
              </div>
            </div>

            {menuItems.map((item, index) =>
              item.mega ? (
                <MegaMenu key={`mega-${item.label}`} item={item} open={openIndex === index} onMouseEnter={() => setOpenIndex(index)} />
              ) : null,
            )}
          </div>

          <div className="nav-right">
            <div className="contact-area d-lg-flex d-none">
              <div className="icon">
                <img src="/assets/img/home/Contact.png" alt="" width={40} height={40} />
              </div>
              <div className="content">
                <span>Our Support</span>
                <h6>
                  <a href={PHONE_HREF}>{PHONE}</a>
                </h6>
              </div>
            </div>

            <Button4 label="Let’s Talk" href="#contact" className="d-lg-flex d-none" onClick={openContact} />

            <button type="button" className="sidebar-button mobile-menu-btn" onClick={() => setDrawerOpen(true)} aria-label="Open menu">
              <Svg name="hamburger" width={20} height={18} />
            </button>
          </div>
        </div>
      </header>

      <div className={`mobile-drawer${drawerOpen ? ' open' : ''}`} aria-hidden={!drawerOpen}>
        <div className="mobile-drawer-head">
          <a href="#home" onClick={() => setDrawerOpen(false)}>
            <img src={LOGO} alt="Growu Digital" width={200} height={44} />
          </a>
          <button type="button" onClick={() => setDrawerOpen(false)} aria-label="Close menu">
            <i className="bi bi-x" />
          </button>
        </div>
        <ul className="mobile-menu-list">
          {menuItems.map((item, index) => {
            const links = item.groups?.[0].links ?? [];
            return (
              <li key={item.label}>
                <div className="mobile-menu-row">
                  {item.href ? (
                    <a href={item.href} onClick={() => setDrawerOpen(false)}>
                      {item.label}
                    </a>
                  ) : (
                    <button type="button" onClick={() => setMobileExpanded(mobileExpanded === index ? null : index)}>
                      {item.label}
                    </button>
                  )}
                  {links.length ? (
                    <button
                      type="button"
                      className={`mobile-caret${mobileExpanded === index ? ' open' : ''}`}
                      onClick={() => setMobileExpanded(mobileExpanded === index ? null : index)}
                      aria-label={`Toggle ${item.label}`}
                    >
                      <i className="bi bi-plus" />
                    </button>
                  ) : null}
                </div>
                {links.length && mobileExpanded === index ? (
                  <div className="mobile-submenu">
                    <ul>
                      {links.map((link) => (
                        <li key={link.label} className={link.box === 'bx bx-right-arrow-alt' ? 'all-btn' : 'hover-move'}>
                          <a href={link.href} onClick={() => setDrawerOpen(false)}>
                            {link.box ? <i className={link.box} /> : null}
                            {link.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </li>
            );
          })}
        </ul>
        <div className="mobile-drawer-foot">
          <a href={PHONE_HREF}>{PHONE}</a>
          <Button1 label="Let’s Talk" href="#contact" />
        </div>
      </div>
      {drawerOpen ? <div className="drawer-backdrop" onClick={() => setDrawerOpen(false)} /> : null}
    </>
  );
}

/* ------------------------------------------------------------------ */
/* Desktop sub menu                                                    */
/* ------------------------------------------------------------------ */

function SubMenu({ links, open }: { links: MenuGroup['links']; open: boolean }) {
  return (
    <ul className={`sub-menu${open ? ' show' : ''}`}>
      {links.map((link) => {
        const isAll = link.box === 'bx bx-right-arrow-alt';
        return (
          <li key={link.label} className={isAll ? 'hover-move' : 'service-list hover-move'}>
            <a className={isAll ? 'all-btn' : ''} href={link.href}>
              {link.box ? <i className={link.box} /> : null}
              {link.label}
            </a>
          </li>
        );
      })}
    </ul>
  );
}

/* ------------------------------------------------------------------ */
/* Mega menus (rendered at header level so they centre on the page)    */
/* ------------------------------------------------------------------ */

function MegaMenu({ item, open, onMouseEnter }: { item: MenuItem; open: boolean; onMouseEnter: () => void }) {
  const blog = item.blog;

  return (
    <div className={`mega-menu2${blog ? ' two' : ''}${open ? ' show' : ''}`} onMouseEnter={onMouseEnter}>
      <div className="container">
        <div className="row align-items-lg-end justify-content-between">
          {blog ? (
            <>
              <div className="col-xl-6 col-lg-7 d-lg-block d-none">
                <div className="title-area">
                  <h2>{blog.title}</h2>
                  <div className="icon">
                    <Svg name="arrowRight" width={10} height={10} />
                  </div>
                </div>
                <div className="row">
                  {blog.cards.map((card) => (
                    <div className="col-lg-6" key={card.title}>
                      <div className="menu-blog-card">
                        <a className="blog-img" href={card.href}>
                          <img src={card.img} alt="" width={456} height={350} />
                        </a>
                        <div className="blog-content">
                          <ul className="blog-meta">
                            <li>
                              <a href={card.href}>{card.tag}</a>
                            </li>
                            <li className="blog-date">
                              <a href={card.href}>
                                <Svg name="blogMeta" width={8} height={8} /> {card.date}
                              </a>
                            </li>
                          </ul>
                          <h5>
                            <a href={card.href}>{card.title}</a>
                          </h5>
                          <a className="read-more-btn" href={card.href}>
                            Read More <Svg name="arrowRight" width={10} height={10} />
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="col-lg-4">
                <ul className="menu-row">
                  <li className="menu-single-item">
                    <div className="menu-title">
                      <h6>
                        <Svg name="menuTitleMark" width={17} height={12} /> Innovative Case
                      </h6>
                    </div>
                    <ul>
                      <li className="hover-move">
                        <a href={blog.caseLink.href}>
                          <span>
                            <Svg name="arrowRight" width={10} height={10} /> {blog.caseLink.label}
                          </span>
                          <div className="arrow">
                            <Svg name="menuArrow" width={7} height={9} />
                          </div>
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <>
              <div className="col-xl-7 col-lg-9">
                <div className="title-area">
                  <h2>Challenge We Tackle</h2>
                  <div className="icon">
                    <Svg name="arrowRight" width={10} height={10} />
                  </div>
                </div>
                <ul className="menu-row">
                  {item.groups?.map((group) => (
                    <li key={group.title} className={`menu-single-item${group.width ? ` ${group.width}` : ''}`}>
                      <div className="menu-title">
                        <h6>
                          <Svg name="menuTitleMark" width={17} height={12} /> {group.title}
                        </h6>
                      </div>
                      <ul>
                        {group.links.map((link) => (
                          <li key={link.label} className={link.icon ? 'hover-move' : 'hover-move'}>
                            <a href={link.href} className={link.label === 'View All Services' ? 'all-btn' : ''}>
                              {link.icon ? <Svg name={link.icon} width={22} height={22} /> : null}
                              {link.label}
                              {link.label === 'View All Services' ? <Svg name="arrowRight" width={10} height={10} /> : null}
                            </a>
                          </li>
                        ))}
                        {group.nested ? (
                          <>
                            <li>
                              <div className="menu-title">
                                <h6>
                                  <Svg name="menuTitleMark" width={17} height={12} /> {group.nested.title}
                                </h6>
                              </div>
                            </li>
                            {group.nested.links.map((link) => (
                              <li key={link.label} className="hover-move">
                                <a href={link.href}>
                                  {link.box ? <i className={link.box} /> : null} {link.label}
                                </a>
                              </li>
                            ))}
                          </>
                        ) : null}
                      </ul>
                    </li>
                  ))}
                </ul>
              </div>

              {item.banner ? (
                <div className="col-lg-3">
                  <div className="solution-menu-banner">
                    <div className="banner-content">
                      <h4>{item.banner.text}</h4>
                      <Button1 label={item.banner.cta} href={item.banner.href} />
                    </div>
                    <div className="banner-img">
                      <img src={item.banner.img} alt="" width={320} height={220} />
                    </div>
                  </div>
                </div>
              ) : null}
            </>
          )}
        </div>
      </div>
    </div>
  );
}