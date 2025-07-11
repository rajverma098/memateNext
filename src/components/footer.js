import React from "react";
import "./footer.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Heart from "@/svg/heart";
const FacebookIcon = "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/footer-facebook.svg";
const LinkdinIcon = "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/footer-linkdin.svg";
const InstagramIcon = "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/footer-instagram.svg";
const AppStoreIcon = "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/app-store-icon.svg";
const PlayStoreIcon = "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/play-store-icon.svg";
const MacAppStoreIcon = "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/mac-app-store.svg";
const MicrosoftAppStoreIcon = "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/microsoft-app-store.svg"

const Footer = () => {
  return (
    <>
  
    <div className="footer-section">
      <div className="main-footer">
        <div className="section1" data-aos="fade-up"
    data-aos-offset="50"
    data-aos-delay="50"
    data-aos-duration="5200"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-bottom">
          <div className="heading-section">
            <div>
              <p className="footer-heading">Down to Business &nbsp;
                {/* <span className="trade-mark">TM</span> */}
                </p>
            </div>
            <div className="footer-icons">
              <div><a href="https://www.facebook.com/mematesoftware/"><img src={FacebookIcon} alt="FacebookIcon"/></a></div>
              <div><a href="https://www.instagram.com/memateapp/"><img src={InstagramIcon} alt="InstagramIcon" /></a></div>
              <div><a href="https://www.linkedin.com/uas/login?session_redirect=%2Fcompany%2F78408530"><img src={LinkdinIcon} alt="LinkdinIcon" /></a></div>
            </div>
          </div>
          <div className="download-section">
            <div className="download-heading">Download</div>
            <div className="application-section">
              <p>Mobile Application for Employees and Contractors</p>
              <div className="application-icons">
                <div><a href="https://play.google.com/store/apps/details?id=com.memate&pli=1"><img src={AppStoreIcon} alt="AppStoreIcon" /></a></div>
                <div><a href="https://apps.apple.com/in/app/memate/id1563935364"><img src={PlayStoreIcon} alt="PlayStoreIcon" /></a></div>
              </div>
            </div>
            <div className="application-section">
              <p>Desktop Application for Business Management</p>
              <div className="application-icons">
                <div><img src={MacAppStoreIcon} alt="MacAppStoreIcon" /></div>
                <div><img src={MicrosoftAppStoreIcon} alt="MicrosoftAppStoreIcon" /></div>
              </div>
            </div>
            <div className="paragraph-section">
              <p>Apple and the Apple logo are trade marks of Apple Inc., registered in the U.S. and other countries. App Store is a service mark of Apple Inc., registered in the U.S. and other countries. Google Play and the Google Play logo are trade marks of Google LLC.</p>
            </div>
          </div>
        </div>
        <div className="section2" data-aos="fade-up"
    data-aos-offset="50"
    data-aos-delay="50"
    data-aos-duration="5500"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-bottom">
          <div className="footer-links">
            <div className="links">
              <p className="link-heading">Company</p>
              <div className="page-links">
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="https://www.linkedin.com/uas/login?session_redirect=%2Fcompany%2F78408530" target="_blank">Carreers</a>
              </div>
            </div>

            <div className="links">
              <p className="link-heading">Business Software</p>
              <div className="page-links" style={{width:"117px"}}>
                <a href="/pricing">Plan and Pricing</a>
                <a href="/features">Features</a>
                <a href="/industries">Industries</a>
                
              </div>
            </div>

            <div className="links">
              <p className="link-heading">Features</p>
              <div className="page-links" style={{width:"141px"}}>
              <a href="/features/client-management-software">Client Management</a>
              <a href="/features/supplier-management-software">Supplier Management</a>
              <a href="/features/sales-management-tools">Sales Pipeline</a>
              <a href="/features/project-management-software">Project Management</a>
              <a href="/features/team-communication-tools">Communication</a>
              <a href="/features/job-management-software">Schedule Jobs</a>
              <a href="/features/invoicing-software">Invoicing</a>
              <a href="/features/business-statistics-tools">Statistic</a>
              <a href="/features/business-reporting-tools">Reports</a>
              </div>
            </div>

            <div className="links">
              <p className="link-heading">Resources & Tools</p>
              <div className="page-links" style={{width:"118px"}}>
               <a href="/knowledge-base">Knowledge Base</a>
                <a href="/customer-stories">Customer Stories</a>
                <a href="/supplier-database">Supplier Database</a>
                <a href="/brand">Brand</a>
                <a href="/sitemap">Sitemap</a>
                <a href="https://app.memate.com.au/requestdemo" target="_blank">Request a Demo</a>
                <a href="https://app.memate.com.au/onboarding" target="_blank">My Account</a>
              </div>
            </div>

            <div className="links">
              <p className="link-heading">Industries</p>
              <div className="page-links" style={{width: "181px"}}>
              <a href="/industries/business-software-for-creative-agencies">Creative Agencies</a>
              <a href="/industries/software-for-electronic-repair-businesses">Electronic Repair Specialists</a>
              <a href="/industries/software-for-photo-video-agencies">Photo & Video Agency</a>
              <a href="/industries/business-software-for-automotive-industry">Automotive</a>
              <a href="/industries/business-management-software-for-startups">Startups</a>
              <a href="/industries/business-software-for-construction-industry">Construction</a>
              </div>
            </div>

            <div className="links">
              <p className="link-heading">Compare</p>
              <div className="page-links" style={{width: "149px"}}>
              <a href="/">MeMate vs QuickBooks</a>
              <a href="/">MeMate vs Myob</a>
              <a href="/">MeMate Vs Jira</a>
              <a href="/">MeMate vs Monday</a>
              <a href="/">MeMate vs Trello</a>
              <a href="/">MeMate vs SalesForce</a>
              <a href="/">MeMate vs Airtable</a>
              <a href="/">MeMate vs Wrike</a>
              <a href="/memate-vs-servicem8">MeMate vs Servicem8</a>
              <a href="/">MeMate vs Reckon</a>
              <a href="/">MeMate vs Xero</a>
              <a href="/">MeMate vs ms Project</a>
              <a href="/">MeMate vs Sage</a>
              <a href="/">MeMate vs NetSuite</a>
              </div>
            </div>

            <div className="links">
              <p className="link-heading">Legal</p>
              <div className="page-links" style={{width: "142px"}}>
                <a href="/terms">Terms And Conditions</a>
                <a href="/privacy">Privacy Policy</a>
                {/* <a href="/terms-of-use">Website Terms of Use</a> */}
                {/* <a href="/security">Security</a> */}
                {/* <a href="/legal">Legal</a> */}
              </div>
            </div>

            <div className="links">
              <p className="link-heading">Support</p>
              <div className="page-links" style={{width: "109px"}}>
              <a href="/contact-us">Contact Us</a>
              <a href="/delete-request">Delete Request</a>
                <a href="/memate-software-updates">Software Update </a>
                <a href="/faqs">FAQs</a>
              </div>
            </div>

          </div>
        </div>

        <div className="section3 copyrightWrapper">
          <div className="copyright">
            {/* <p>© MeMate 2024 </p> */}
           <p>Copyright © 2022-2025 | meMate</p>
            <div className="copyright-links">
              <LazyLoadImage
                alt="contact MeMate"
                src="https://res.cloudinary.com/dn0jqjad3/image/upload/v1747717590/Powered-By_logo-stack_CMYK_ew121c.webp"
                effect="blur" 
              />
              </div>
          </div>
          <div className="copyrightright">
            <div className="copyright-links">With&nbsp;<Heart />&nbsp;from Sydney</div>
        </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Footer;
