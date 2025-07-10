

 import { Link } from 'react-router-dom';
import style from './sitemap.module.scss';

const SitemapComponent = () => {


  return (
    <>
    <div className={style.sitemapHEad}>
      <h1>Sitemap memate.com.au</h1>
    </div>
    <div className={style.sitemapPageList}>
     <ul>
      <li>
        <h3>Core Pages</h3>
        <Link to="/about">About</Link>
        <Link to="/pricing">Pricing</Link>
        <Link to="/contact-us">Contact us</Link>
        <Link to="/faqs">Faqs</Link>
        <Link to="/brand">Brand</Link>
      </li>
      <li>
        <h3>Features</h3>
        <div className={style.sitemapGrid}>
        <div className={style.sitemapGridItem}>
          <h4>MANAGEMENT</h4>
            <Link to="/features/client-management-software">Client Management</Link>
            <Link to="/features/supplier-management-software">Supplier Management</Link>
            <Link to="/features/sales-management-tools">Sales Pipeline</Link>
            <Link to="/features/project-management-software">Project Management</Link>
        </div>
        <div className={style.sitemapGridItem}>
          <h4>PRODUCTIVITY</h4>
            <Link to="/features/business-reporting-tools">Reports</Link>
            <Link to="/features/profitability-and-budgeting-software">Profitability & Budgeting</Link>
            <Link to="/features/employee-management-tools">Employee Management</Link>
            <Link to="/features/contractor-management-software">Contractor</Link>
        </div>
        <div className={style.sitemapGridItem}>
          <h4>FUNCTIONALITY</h4>
            <Link to="/features/internal-communication-tools">Internal chat</Link>
            <Link to="/features/time-tracking-software">Time Sheet</Link>
            {/* <Link to="/features/your-business-news-management">Features News</Link> */}
            <Link to="/features/task-management-software">Task Management</Link>
        </div>
        </div>
        <div className={style.sitemapGrid}>
        <div className={style.sitemapGridItem}>
          <h4>TECHNOLOGY</h4>
            <Link to="/features/team-communication-tools">Communication</Link>
            <Link to="/features/job-scheduling-software">Scheduling</Link>
            <Link to="/features/invoicing-software">Invoicing</Link>
            <Link to="/features/business-statistics-tools">Statistic</Link>
        </div>
        <div className={style.sitemapGridItem}>
          <h4>COLLABORATION</h4>
            <Link to="/features/job-management-software">Schedule Jobs</Link>
            <Link to="/features/time-tracking-tools">Fixed or time tracker</Link>
            <Link to="/features/job-approval-software">Job approval</Link>
            <Link to="/features/multi-location-management">Multi Location</Link>
        </div>
        <div className={style.sitemapGridItem}>
          <h4>VALUE</h4>
            <Link to="/features/calendar-timeline-management-software">Calendar</Link>
            <Link to="/features/business-quote-calculator">Calculators</Link>
        </div>
        </div>
        
      </li>
      <li>
        <h3>Industry Pages</h3>
        <div className={style.sitemapGrid}>
        <div className={style.sitemapGridItem}>
          <h4>INDUSTRIES</h4>
            <Link to="/industries/business-software-for-creative-agencies">Creative Agencies</Link>
            <Link to="/industries/software-for-electronic-repair-businesses">Electronic Repair Specialists</Link>
            <Link to="/industries/software-for-photo-video-agencies">Photo & Video Agency</Link>
            <Link to="/industries/business-software-for-automotive-industry">Automotive</Link>
            <Link to="/industries/business-management-software-for-startups">Startups</Link>
            <Link to="/industries/business-software-for-construction-industry">Construction</Link>
        </div>
        </div>
      </li>
      <li>
        <h3>Content Hubs</h3>
            <Link to="/news">News</Link>
            <Link to="/memate-wiki">Memate Wiki</Link>
            <Link to="/resources">Resources</Link>
      </li>
      {/* <li>
        <h3>About</h3>
            <Link to="/about">About Memate</Link>
            <Link to="https://www.linkedin.com/uas/login?session_redirect=%2Fcompany%2F78408530" target='_blank'>Our Careers</Link>
            <Link to="/contact-us">Our Team</Link>
      </li> */}
      <li>
        <h3>Legal</h3>
            <Link to="/terms">Terms & Conditions</Link>
            <Link to="/privacy">Privacy</Link>
      </li>
      <li>
        <h3>RESOURCES</h3>
        <div className={style.sitemapGrid}>
        <div className={style.sitemapGridItem}>
          <h4>RESOURCES & TOOLS</h4>
            <Link to="/supplier-database">Supplier Database</Link>
            <Link to="/knowledge-base">Knowledge Base</Link>
            <Link to="/brand">Brand</Link>
        </div>
        <div className={style.sitemapGridItem}>
          <h4>MEMATE WIKI</h4>
            <Link to="/memate-wiki">Memate Wiki</Link>
        </div>
        </div>
      </li>
      <li>
        <h3>Company</h3>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="https://www.linkedin.com/uas/login?session_redirect=%2Fcompany%2F78408530" target='_blank'>Carreers</Link>
      </li>
      <li>
           <h3>Business Software</h3>
            <Link to="/pricing">Plan and Pricing</Link>
            <Link to="/features">Features</Link>
            <Link to="/industries">Industries</Link>
      </li>
   

      <li>
        <h3>COMPARE</h3>
        <div className={style.sitemapGrid}>
        <div className={style.sitemapGridItem}>
            <Link to="#">MeMate vs QuickBooks</Link>
            <Link to="#">MeMate vs Myob</Link>
            <Link to="#">MeMate Vs Jira</Link>
            <Link to="#">MeMate vs Monday</Link>
            <Link to="#">MeMate vs Trello</Link>
            <Link to="#">MeMate vs SalesForce</Link>
            <Link to="#">MeMate vs Airtable</Link>
           
        </div>
        <div className={style.sitemapGridItem}>
           <Link to="#">MeMate vs Wrike</Link>
            <Link to="/memate-vs-servicem8">MeMate vs Servicem8</Link>
            <Link to="#">MeMate vs Reckon</Link>
            <Link to="#">MeMate vs Xero</Link>
            <Link to="#">MeMate vs ms Project</Link>
            <Link to="#">MeMate vs Sage</Link>
            <Link to="#">MeMate vs NetSuite</Link>
        </div>
        </div>
      </li>
      <li>
           <h3>Support</h3>
            <Link to="/contact-us">Contact Us</Link>
            <Link to="/delete-request">Delete Request</Link>
            <Link to="/memate-software-updates">Software Update</Link>
            <Link to="/faqs">FAQs</Link>
      </li>
     </ul>
    </div>
    </>
  );
};

export default SitemapComponent;
