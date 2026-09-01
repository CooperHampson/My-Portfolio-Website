import { ServicesHeader } from '../../components/ServicesHeader';
import { ScrollAnimate } from './ServicesPageAnim';
import './ServicesPage.css';

export function ServicesPage() {
  return (
    <>
      <ServicesHeader />

      <div className="services-container">
        <ScrollAnimate className="services-title">Services</ScrollAnimate>

        <ScrollAnimate className="services-text">I offer a range of services, from Landing Pages, Multi-page Websites, Additional pages on an existing website or full Website re-designs, and Website Maintenance.</ScrollAnimate>

        <div className="services-grid">
          <ScrollAnimate className="landing-page">
            <div className="landing-page-container">
              <p className="landing-page-title">Landing Page</p>

              <p className="landing-page-desc">Custom single-page website<br />Starting From $500 AUD <br /> &#8226; Custom Design <br /> &#8226; Responsive development <br /> &#8226; Mobile Optimisation <br /> &#8226; Animations/Interactions <br /> &#8226; Contact/Enquiry Form <br /> &#8226; Basic SEO setup <br /> &#8226; Deployment </p>
              <p className="landing-page-desc-note">Final pricing depends on project requirements.</p>

              <a href="mailto:cooper.hampson07@gmail.com?subject=Landing%20Page%20Enquiry" className="link-general">
               <div className="enquiry-container">
                <p className="enquiry-text">Enquiry</p>
               </div>
              </a>
            </div>
          </ScrollAnimate>

          <ScrollAnimate className="multi-page">
            <div className="multi-page-container">
              <p className="multi-page-title">Multi-page Website</p>

              <p className="multi-page-desc">Custom multi-page website<br />Starting From $1,000 AUD <br /> &#8226; Custom Design <br /> &#8226; Responsive development <br /> &#8226; Mobile Optimisation <br /> &#8226; Animations/Interactions <br /> &#8226; Multiple custom pages <br /> &#8226; Reusable components & consistent designs <br /> &#8226; Contact/Enquiry Form <br /> &#8226; Basic SEO setup <br /> &#8226; Error Handling <br /> &#8226; Deployment</p>
              <p className="multi-page-desc-note">Final pricing depends on project requirements.</p>

              <a href="mailto:cooper.hampson07@gmail.com?subject=Multi%20Page%20Website%20Enquiry" className="link-general">
               <div className="enquiry-container">
                <p className="enquiry-text">Enquiry</p>
               </div>
              </a>
            </div>
          </ScrollAnimate>

          <ScrollAnimate className="web-redesign">
            <div className="web-redesign-container">
              <p className="web-redesign-title">Website Redesign/Additional pages</p>

              <p className="web-redesign-desc">Custom website redesign/additional pages<br />Starting From $250 AUD <br /> &#8226; Single-page custom redesign <br /> &#8226; Multi-page redesign <br /> &#8226; Additional pages <br /> &#8226; Major redesigns <br /> &#8226; Redeployment</p>
              <p className="web-redesign-desc-note">Final pricing depends on project requirements.</p>

              <a href="mailto:cooper.hampson07@gmail.com?subject=Website%20Redesign%20Enquiry" className="link-general">
               <div className="enquiry-container">
                <p className="enquiry-text">Enquiry</p>
               </div>
              </a>
            </div>
          </ScrollAnimate>

          <ScrollAnimate className="web-maintenance">
            <div className="web-maintenance-container">
              <p className="web-maintenance-title">Website Maintenance</p>

              <p className="web-maintenance-desc">Custom Website Maintenance<br />Starting From $75 AUD / month <br /> &#8226; Website Updates <br /> &#8226; Bug Fixes <br /> &#8226; Dependency/Security Updates <br /> &#8226; Content Updates <br /> &#8226; Performance Monitoring <br /> &#8226; General Technical Support <br /> &#8226; Web Hosting</p>
              <p className="web-maintenance-desc-note">Final pricing depends on project requirements.</p>

              <a href="mailto:cooper.hampson07@gmail.com?subject=Website%20Maintenance%20Enquiry" className="link-general">
               <div className="enquiry-container">
                <p className="enquiry-text">Enquiry</p>
               </div>
              </a>
            </div>
          </ScrollAnimate>
        </div>
      </div>
    </>
  );
}