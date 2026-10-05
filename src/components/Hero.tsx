import { Button4 } from './Primitives';

export default function Hero({ onProposal }: { onProposal: () => void }) {
  return (
    <div className="home4-banner-section mb-50">
      <div className="container position-relative">
        <div className="row gy-5 align-items-end">
          <div className="col-lg-8">
            <div className="banner-content-wrap">
              <h1 className="text-center hero-title" style={{ color: '#4b4b4d' }}>
                <span className="title">Digital Marketing Agency</span> Adelaide{' '}
              </h1>
              <p className="text-center hero-text">
                We provide a full range of services in online{' '}
                <span className="sub-title">Marketing, Web &amp; App Development, Design,</span> and other
                innovative digital solutions tailored to your needs.
              </p>
              <div className="btn-and-counter-area">
                <Button4 label="Get A Proposal" variant="black-bg" onClick={onProposal} />
                <div className="google-logo">
                  <img src="/assets/img/grow/partner/Google-logo.png" alt="Google Partner" />
                </div>
                <div className="counter-area">
                  <div className="icon">
                    <svg width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
                      <g>
                        <path d="M0.3519 27.6225C0.1434 27.9805 0.2646 28.4396 0.6225 28.6481C0.9805 28.8566 1.4396 28.7354 1.6481 28.3775L0.3519 27.6225ZM29 3L21.7485 7.73454L29.4745 11.6472L29 3ZM20.0155 20.7406L19.3465 20.4017L20.0155 20.7406ZM1.6481 28.3775L7.7352 17.9257L6.439 17.1708L0.3519 27.6225L1.6481 28.3775ZM11.4985 17.7338L14.3075 21.5923L15.5202 20.7094L12.7112 16.851L11.4985 17.7338ZM20.6846 21.0794L26.6194 9.36065L25.2813 8.68295L19.3465 20.4017L20.6846 21.0794ZM14.3075 21.5923C15.957 23.8581 19.4184 23.5797 20.6846 21.0794L19.3465 20.4017C18.5867 21.9019 16.5099 22.0689 15.5202 20.7094L14.3075 21.5923ZM7.7352 17.9257C8.5526 16.5221 10.5425 16.4206 11.4985 17.7338L12.7112 16.851C11.1179 14.6624 7.8014 14.8315 6.439 17.1708L7.7352 17.9257Z" />
                        <circle cx="22" cy="17" r="3" />
                      </g>
                    </svg>
                  </div>
                  <div className="content">
                    <div className="number">
                      <h3>3</h3>
                      <span>X+</span>
                    </div>
                    <p>Success Rate</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 d-lg-block d-none">
            <div className="banner-img-wrap">
              <img src="/assets/img/grow/vector-smart-object.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}