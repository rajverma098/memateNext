import React from 'react';
import { Routes, Route, Navigate  } from "react-router-dom";
import { useState, useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';

import {
  BlogPage,
  FeaturePage,
  IndustryPage,
  LandingPage,
  SinglePage,
  SoftwareUpdatePage,
} from "./pages";
import "./App.css";
import ContactUsPage from "./pages/contact-us";
// import ScrollToTop from "./layout/ScrollToTop";
import KnowledgeBasePage from "./pages/knowledge-base";
import { blogList, blogLatest, getCategories } from './api/blogAPI';
import SupplierDatabasePage from "./pages/supplier-database";
// import TOSPage from "./pages/tos-page";
import PricingPage from "./pages/pricing";
import PrivacyPage from "./pages/privacy";
import CustomerStoriesPage from "./pages/customer-stories-page";
import CustomerStoriesPageSingle from "./pages/customer-stories-single";
import DatabasePageSingle from "./pages/data-base-single/data-base-single";
import SupplierManagementPage from "./pages/supplier-management";
import EmployeeManagementPage from "./pages/employee-management";
import ProjectManagementPage from "./pages/project-management";
import ReportsPage from "./pages/reports";
import ProfitabilityAndBudgetingPage from "./pages/profitability-and-budgeting";
import ContractorPage from "./pages/contractor";
import InternalChatPage from "./pages/internal-chat";
import TimeSheetPage from "./pages/time-sheet";
import TaskManagementPage from "./pages/task-management";
import CommunicationPage from "./pages/communication";
import SchedulingPage from "./pages/scheduling";
import InvoicingPage from "./pages/invoicing";
import StatisticPage from "./pages/statistic";
import ScheduleJobsPage from "./pages/schedule-jobs";
import TimeTrackerPage from "./pages/time-tracker";
import JobApprovalPage from "./pages/job-approval";
import MultiLocationPage from "./pages/multi-location";
import CalendarPage from "./pages/calendar";
import CalculatorsPage from "./pages/calculators";
import ElectronicPage from "./pages/electronic";
import PhotoPage from "./pages/photo-video-agency";
import AutomotivePage from "./pages/automotive";
import StartupsPage from "./pages/startups";
import ConstructionPage from "./pages/construction";
import AboutMematePage from "./pages/about-memate";
import DeleteRequestPage from "./pages/delete-request";
import MemateWikiPage from "./pages/memate-wiki";
import SecurityPage from "./pages/security";
import LegalPage from "./pages/legal";
import ContactSalesPage from "./pages/contact-sales";
import WatchDemoPage from "./pages/watch-demo";
import FeaturesPage from "./pages/features";
import IndustriesPage from "./pages/industries";
// import NewsStoriesPage from "./pages/news-stories";
import SitemapPage from "./pages/sitemap";
import ClientPage from "./pages/client-management";
// import FeaturesNewsPage from "./pages/features-news";
import ResourcesPage from "./pages/resources";
import ErrorPage from "./pages/error-page";
import ThankYouPage from "./pages/thankyou-page";
import AddYourCompanyPage from "./pages/add-your-company";
import TronButton from "./layout/hover-button/tourn-but";
import { useLocation } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import MemateWikiSinglePage from "./pages/wiki-single-page";
import CategoryPage from "./pages/single-page/category-page";
import BlogTagPage from "./pages/single-page/blog-tags-page";
import TermsAndConditionsPage from "./pages/terms-and-conditions";
import MemateWikiDetailsPage from './pages/wiki-single-details';
import MemteBrandPage from './pages/memate-brand';
import MemateFaqsPage from './pages/memate-faqs';
import BrandPage from './pages/brand';
import Services8Page from './pages/memate-vs-servicem8';
const queryClient = new QueryClient();
// Register ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

function App() {
  AOS.init();
  let savedlatestPostData = [];
  try {
    savedlatestPostData = JSON.parse(sessionStorage.getItem('latestPostData') || "[]");
  } catch (error) {
    console.error('Error parsing latestPostData from sessionStorage:', error);
    savedlatestPostData = [];
  }
  const [postsLatest, setPostsLatest] = useState(savedlatestPostData || []);
  const [PostsCategories, setPostsCategories] = useState();
  const [posts, setPosts] = useState([]);
  const [activeCategory, setActiveCategory] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPosts, setTotalPosts] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  console.log('error: ', error);
  const limit = 12;

  useEffect(() => {
    const fetchDataLatest = async () => {
      try {
        const dataLatest = await blogLatest();
        sessionStorage.setItem('latestPostData', JSON.stringify(dataLatest));
        setPostsLatest(dataLatest);
      } catch (err) {
        console.log('Error during getting the latest post:', err);
      }
    };

    if (!postsLatest?.length) fetchDataLatest();
  }, [postsLatest?.length]);

  // PostsCategories======================

  useEffect(() => {
    const fetchCateLatest = async () => {
      try {
        const dataCat = await getCategories();
        sessionStorage.setItem('latestCat', JSON.stringify(dataCat));
        setPostsCategories(dataCat);
      } catch (err) {
        console.log('Error during getting the latest post:', err);
      }
    };

    if (!PostsCategories?.length) fetchCateLatest();
  }, [PostsCategories?.length]);

  // const [newposts, setNewPosts] = useState();


  // added multiple rerendering of useEffect if page is clicked twice %blame @ramansaini14 for changes 
  // status: committed on vps tunnel and changes staged automatically
  const handleTabClick = (categoryId) => {
    if (activeCategory !== categoryId) {
      setActiveCategory(categoryId);
      setPosts([]);
      setCurrentPage(1);
    }
  };

  // PostsCategories======================

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const response = await blogList(currentPage, limit, activeCategory);
        const { data, total } = response;
        if (!data) throw new Error("No data found");
        setTotalPosts(total);
        setPosts((prevPosts) => {
          const uniquePosts = data?.filter(
            (newPost) => !prevPosts.some((post) => post.id === newPost.id)
          );
          return [...prevPosts, ...uniquePosts];
        });
      } catch (error) {
        setError(error);
        console.error("Error fetching blog posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [currentPage, activeCategory]);

  const handleNext = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  // useEffect(() => {
  //   const gtAnimate = gsap.utils.toArray('.gradientAnimenate');
  //   gtAnimate.forEach((element) => {
  //     gsap.to(element, {
  //       backgroundImage: "linear-gradient(90deg, #1ab2ff 0%, #65b2c9 45%, #FFB258 65%, #FFB258 100%)",

  //       duration: 1,
  //       scrollTrigger: {
  //         trigger: element,
  //         markers: true,
  //         scrub: false,
  //         toggleActions: "play reset play reset",
  //         start: "center bottom",
  //         end: "bottom top"
  //       }
  //     });
  //   });

  // }, []);

  const location = useLocation();
  useEffect(() => {
    const pathClass = location.pathname === "/"
      ? "home"
      : location.pathname.replace(/\//g, "-").replace(/^-|-$/g, "");
    document.body.classList.add(`page-${pathClass}`);
    return () => {
      document.body.classList.remove(`page-${pathClass}`);
    };
  }, [location.pathname]);
  
  // useEffect(() => {
  //   const currentHost = window.location.hostname;
  //   if (currentHost === "memate.com.au") {
  //     const newUrl = `https://memate.com.au${window.location.pathname}${window.location.search}`;
  //     window.location.replace(newUrl); 
  //   }
  // }, []);
  
  return (
    <div className="App">
       <HelmetProvider>
      {/* <ScrollToTop /> */}
      <QueryClientProvider client={queryClient}>
        <Routes>
         <Route path="/" exact element={<LandingPage posts={posts} postsLatest={postsLatest} />} />
          {/* Redirect 301 */}
           <Route path="/" exact element={<LandingPage posts={posts} postsLatest={postsLatest} />} />
            <Route path="/what-is-memate" element={<Navigate to="/about" replace />} />
            <Route path="/data-single" element={<Navigate to="/supplier-database" replace />} />	
            <Route path="/data-single/memate-enterprise-pty-limited" element={<Navigate to="/supplier-database" replace />} />	
            <Route path="/data-single/safety-xpress-online" element={<Navigate to="/supplier-database" replace />} />	
            <Route path="/internal-chat" element={<Navigate to="/features/internal-communication-tools" replace />} />	
            <Route path="/features-news" element={<Navigate to="/news" replace />} />
            <Route path="/feed" element={<Navigate to="/news" replace />} />	
            <Route path="/?..." element={<Navigate to="/" replace />} />	
            <Route path="/keep-your-teams-productivity-in-check-with-workforce-management-system" element={<Navigate to="/news/keep-your-team-s-productivity-in-check-with-workforce-management-system" replace />} />	
            <Route path="/memate-for-advertising-agencies-streamlining-project-management-and-contractor-management" element={<Navigate to="/news/optimize-operations-in-2024--harness-the-power-of-software-for-business-management" replace />} />	
            <Route path="/news/category/11" element={<Navigate to="/news" replace />} />	
            {/* <Route path="/features/internal-communication-tools" element={<Navigate to="/features/team-communication-tools" replace />} />	 */}
            <Route path="/features/your-business-news-management" element={<Navigate to="/features" replace />} />	
            <Route path="/thank-you-contact" element={<Navigate to="/" replace />} />	
            {/* <Route path="/features/job-scheduling-software" element={<Navigate to="/features/job-management-software" replace />} />	 */}
            <Route path="/terms-and-conditions" element={<Navigate to="/terms" replace />} />	
            <Route path="/news/ideal-tools-for-smbs" element={<Navigate to="/news/time-tracking--the-project-management-need-memate-is-ready-to-meet" replace />} />	
            <Route path="/404" element={<Navigate to="/" replace />} />	
            <Route path="/news/top-business-process-management-software" element={<Navigate to="/news/top-5-business-process-management-software-in-2022" replace />} />	
            <Route path="/task-management" element={<Navigate to="/features/task-management-software" replace />} />	
            <Route path="/news/business-process-software" element={<Navigate to="/news/24-best-business-management-software-2023-update" replace />} />	
            <Route path="/news/business-management-software-2024" element={<Navigate to="/news/streamline-your-operations-in-2024-with-the-best-business-management-software-solutions" replace />} />																							
            <Route path="/news/business-process-management" element={<Navigate to="/news/unlocking-efficiency--the-power-of-business-process-management-software" replace />} />																							
            <Route path="/news/website-optimisation" element={<Navigate to="/news/from-chaos-to-clarity-5-steps-to-organise-your-new-business-like-a-pro" replace />} />																						
            <Route path="/news/top-crm-software" element={<Navigate to="/news/empower-your-small-business-with-the-10-best-crm-solutions-in-australia-for-2023" replace />} />																							
            <Route path="/news/software-for-business-growth" element={<Navigate to="/news/24-best-business-management-software-2023-update" replace />} />																							
            <Route path="/news/australian-business-solutions" element={<Navigate to="/news/5-top-business-management-software-solutions-in-australia-2023" replace />} />																							
            <Route path="/news/enhance-efficiency" element={<Navigate to="/news/unlocking-efficiency--the-power-of-business-process-management-software" replace />} />																						
            <Route path="/news/bpm-selection-criteria" element={<Navigate to="/news/choosing-the-right-business-process-management-software-provider-in-2024" replace />} />																						
            <Route path="/news/project-tracking-software" element={<Navigate to="/news/revealed--top-4-project-management-systems-to-drive-profitability-in-2023" replace />} />																							
            <Route path="/news/business-process-improvement" element={<Navigate to="/news/how-memate-helped-improve-a-yacht-management-service" replace />} />																							
            <Route path="/news/tags/" element={<Navigate to="/news" replace />} />																						
            <Route path="/news/software-for-business-management" element={<Navigate to="/news/optimize-operations-in-2024--harness-the-power-of-software-for-business-management" replace />} />																							
            <Route path="/news/workflow-management-for-small-businesses" element={<Navigate to="/news/time-tracking--the-project-management-need-memate-is-ready-to-meet" replace />} />																							
            <Route path="/news/memate-features" element={<Navigate to="/news/software-comparison-servicem8-vs-memate" replace />} />																						
            <Route path="/news/small-business-management-software" element={<Navigate to="/news/how-a-digital-agency-benefitted-from-memate" replace />} />																						
            <Route path="/news/crm-for-small-businesses" element={<Navigate to="/news/choosing-the-best-crm-for-small-business-in-australia" replace />} />																						
            <Route path="/news/tags/efficiency-tools-for-smes" element={<Navigate to="/news/why-smes-should-make-workflow-automation-the-focal-point-in-2023" replace />} />																					
            <Route path="/news/tags/business-process-management" element={<Navigate to="/news/from-lead-to-results--navigating-business-processes-with-memate" replace />} />																						
            <Route path="/news/software-strategies-2024" element={<Navigate to="/news/mastering-efficiency-how-to-effectively-manage-business-software-solutions" replace />} />																						
            <Route path="/news/success-proof-business" element={<Navigate to="/news/all-in-one-business-process-management-software-solutions--should-you-invest-in-it" replace />} />																							
            <Route path="/news/enhance-customer-relationships" element={<Navigate to="/news/empower-your-small-business-with-the-10-best-crm-solutions-in-australia-for-2023" replace />} />																							
            <Route path="/news/2023-software-insights" element={<Navigate to="/news/24-best-business-management-software-2023-update" replace />} />																						
            <Route path="/news/process-optimization" element={<Navigate to="/news/all-in-one-business-process-management-software-solutions--should-you-invest-in-it" replace />} />																						
            <Route path="/news/automation-tools" element={<Navigate to="/news/how-can-memate-support-your-remote-productivity" replace />} />																						
            <Route path="/news/business-performance" element={<Navigate to="/news/streamline-your-operations-in-2024-with-the-best-business-management-software-solutions" replace />} />																				
            <Route path="/news/tags/process-optimization" element={<Navigate to="/news/how-can-memate-support-your-remote-productivity" replace />} />																							
            <Route path="/news/tags/enhance-customer-relationships" element={<Navigate to="/news/empower-your-small-business-with-the-10-best-crm-solutions-in-australia-for-2023" replace />} />																					
            <Route path="/news/progress-tracking-software" element={<Navigate to="/news/time-tracking--the-project-management-need-memate-is-ready-to-meet" replace />} />																						
            <Route path="/news/process-optimization-software" element={<Navigate to="/news/the-future-of-business-process-management-software-solutions" replace />} />																							
            <Route path="/news/business-productivity-tools" element={<Navigate to="/news/elevate-efficiency-finding-the-right-software-for-business-management" replace />} />																							
            <Route path="/news/startup-tips" element={<Navigate to="/news/from-chaos-to-clarity-5-steps-to-organise-your-new-business-like-a-pro" replace />} />																						
            <Route path="/news/business-efficiency" element={<Navigate to="/news/top-5-business-management-software-2022" replace />} />																							
            <Route path="/news/enhance-productivity" element={<Navigate to="/news/why-smes-should-make-workflow-automation-the-focal-point-in-2023" replace />} />																							
            <Route path="/news/best-project-management-software" element={<Navigate to="/news/5-best-project-management-tools-in-australia-2023-2" replace />} />																						
            <Route path="/news/effective-software-management" element={<Navigate to="/news/mastering-efficiency-how-to-effectively-manage-business-software-solutions" replace />} />																							
            <Route path="/news/manage-business-software" element={<Navigate to="/news/mastering-efficiency-how-to-effectively-manage-business-software-solutions" replace />} />																							
            <Route path="/news/customer-relationship-management-australia" element={<Navigate to="/news/empower-your-small-business-with-the-10-best-crm-solutions-in-australia-for-2023" replace />} />																						
            <Route path="/news/tags/business-software-trends" element={<Navigate to="/news/24-best-business-management-software-2023-update" replace />} />																						
            <Route path="/news/tags/shift-management-software" element={<Navigate to="/news/introducing-showcase--a-new-interactive-design-community" replace />} />																						
            <Route path="/news/scale-your-business" element={<Navigate to="/news/why-smes-should-make-workflow-automation-the-focal-point-in-2023" replace />} />																					
            <Route path="/news/why-smes-should-make-workflow-automation-the-focal-point-in-2023" element={<Navigate to="/news/why-smes-should-make-workflow-automation-the-focal-point-in-2023" replace />} />	
            <Route path="/news/time-tracking--the-project-management-need-memate-is-ready-to-meet" element={<Navigate to="/news/time-tracking--the-project-management-need-memate-is-ready-to-meet" replace />} />
            <Route path="/news/workflow-enhancement" element={<Navigate to="/news/how-can-memate-support-your-remote-productivity" replace />} />																						
            <Route path="/news/tags/enhance-efficiency" element={<Navigate to="/news/unlocking-efficiency--the-power-of-business-process-management-software" replace />} />																				
            <Route path="/news/tags/streamline-business-processes" element={<Navigate to="/news/what-makes-business-process-management-software-your-winning-wager" replace />} />
            <Route path="/get-better-returns-in-2023-by-switching-to-a-project-management-software/" element={<Navigate to="/news/get-better-returns-in-2023-by-switching-to-a-project-management-software" replace />} />	
            <Route path="/category/rel/feed/" element={<Navigate to="/news" replace />} />																							
            <Route path="/fusion_tb_category/header/" element={<Navigate to="/news" replace />} />																							
            <Route path="/business-process-management-software-2/feed/" element={<Navigate to="/news/from-lead-to-results--navigating-business-processes-with-memate" replace />} />																						
            <Route path="/time-tracking-the-project-management-need-memate-is-ready-to-meet/" element={<Navigate to="/news/time-tracking--the-project-management-need-memate-is-ready-to-meet" replace />} />																					
            <Route path="/streamline-your-operations-in-2024-with-the-best-business-management-software-solutions/feed/" element={<Navigate to="/news/streamline-your-operations-in-2024-with-the-best-business-management-software-solutions" replace />} />	
            {/* <Route path="/unlocking-efficiency-the-power-of-business-process-management-software/" element={<Navigate to="/news/unlocking-efficiency--the-power-of-business-process-management-software" replace />} />	 */}
            <Route path="/everything-you-need-to-know-about-the-impact-of-management-software-on-small-businesses/feed/" element={<Navigate to="/news/everything-you-need-to-know-about-the-impact-of-management-software-on-small-businesses" replace />} />	
            <Route path="/5-top-business-management-software-solutions-in-australia-2023/feed/" element={<Navigate to="/news/5-top-business-management-software-solutions-in-australia-2023" replace />} />		
            <Route path="/category/second/" element={<Navigate to="/news" replace />} />																						
            <Route path="/memate-labels-have-exponentially-increased-productivity-and-organization-here-at-camerafix/feed/" element={<Navigate to="/news/memate-labels-have-exponentially-increased-productivity-and-organization-here-at-camerafix" replace />} />	
            <Route path="/5-best-project-management-tools-in-australia-2023-2/feed/" element={<Navigate to="/news/5-best-project-management-tools-in-australia-2023-2" replace />} />					
            <Route path="/unlocking-business-potential-in-2024-the-power-of-business-management-software-in-australia/feed/" element={<Navigate to="/news/unlocking-business-potential-in-2024-the-power-of-business-management-software-in-australia" replace />} />	
            <Route path="/best-business-management-application-to-run-a-repair-business/feed/" element={<Navigate to="/news/best-business-management-application-to-run-a-repair-business" replace />} />		
            <Route path="/top-5-business-management-software-2022/feed/" element={<Navigate to="/news/top-5-business-management-software-2022" replace />} />																						
            <Route path="/news/page/5/" element={<Navigate to="/news" replace />} />
            <Route path="/testimonial/camera-fix/" element={<Navigate to="/customer-stories/camera-fix" replace />} />	
            <Route path="/how-a-digital-agency-benefitted-from-memate/" element={<Navigate to="/news/how-a-digital-agency-benefitted-from-memate" replace />} />	

             <Route path="brand-information" element={<Navigate to="/brand" replace />} />	
            <Route path="/how-memate-helped-improve-a-yacht-management-service/" element={<Navigate to="/news/how-memate-helped-improve-a-yacht-management-service" replace />} />	
            <Route path="/creative-agencies" element={<Navigate to="/industries/business-software-for-creative-agencies" replace />} />	
            <Route path="/get-better-returns-in-2023-by-switching-to-a-project-management-software?ref=aftership" element={<Navigate to="/news/get-better-returns-in-2023-by-switching-to-a-project-management-software" replace />} />	
            <Route path="/product-category/device/?add-to-cart=1574" element={<Navigate to="/pricing" replace />} />	
            <Route path="/product-category/device/?add-to-cart=1573" element={<Navigate to="/pricing" replace />} />	
            <Route path="/product-category/device/?product_orderby=date&product_count=36" element={<Navigate to="/pricing" replace />} />	
            <Route path="/job-approval" element={<Navigate to="/features/job-approval-software" replace />} />	
            <Route path="/time-tracker" element={<Navigate to="/features/time-tracking-tools" replace />} />	
            <Route path="/category/first/" element={<Navigate to="/news" replace />} />	
            <Route path="/product-category/device/?product_orderby=date&product_count=24" element={<Navigate to="/pricing" replace />} />	
            <Route path="/time-sheet" element={<Navigate to="/features/time-tracking-software" replace />} />	
            {/* <Route path="/contractor" element={<Navigate to="/features/contractor-management-software" replace />} />	 */}
            <Route path="/mastering-efficiency-how-to-effectively-manage-business-software-solutions/" element={<Navigate to="/news/mastering-efficiency-how-to-effectively-manage-business-software-solutions" replace />} />	
            {/* <Route path="/scheduling" element={<Navigate to="/features/job-management-software" replace />} />	 */}
            <Route path="/business-process-management-software-2/" element={<Navigate to="/news/unlocking-efficiency--the-power-of-business-process-management-software" replace />} />	
            <Route path="/streamline-your-operations-choosing-the-right-business-management-software-in-australia/" element={<Navigate to="/news/streamline-your-operations--choosing-the-right-business-management-software-in-australia" replace />} />	
            <Route path="/why-memate/" element={<Navigate to="/about" replace />} />	
            <Route path="/introducing-showcase-a-new-interactive-design-community/" element={<Navigate to="/news/introducing-showcase--a-new-interactive-design-community" replace />} />	
            <Route path="/signup/" element={<Navigate to="https://app.memate.com.au/onboarding" replace />} />	
            <Route path="/product-category/device/?product_count=24&product_view=grid" element={<Navigate to="/" replace />} />	
            <Route path="/all-in-one-business-process-management-software-solutions-should-you-invest-in-it/" element={<Navigate to="/news/all-in-one-business-process-management-software-solutions--should-you-invest-in-it" replace />} />	
            <Route path="/how-can-memate-support-your-remote-productivity/" element={<Navigate to="/news/how-can-memate-support-your-remote-productivity" replace />} />	
            <Route path="/tag/business-process-management-software-companies/" element={<Navigate to="/news/the-future-of-business-process-management-software-solutions" replace />} />		
            <Route path="/elevate-efficiency-finding-the-right-software-for-business-management/" element={<Navigate to="/news/elevate-efficiency-finding-the-right-software-for-business-management" replace />} />	
            <Route path="/memate-for-digital-agencies-streamlining-quote-project-management-and-invoicing-in-one-place/" element={<Navigate to="/news/memate-labels-have-exponentially-increased-productivity-and-organization-here-at-camerafix" replace />} />	
            <Route path="requestdemo/set-new-password" element={<Navigate to="https://app.memate.com.au/requestdemo" replace />} />	
            <Route path="/streamline-your-operations-in-2024-with-the-best-business-management-software-solutions/" element={<Navigate to="/news/streamline-your-operations-in-2024-with-the-best-business-management-software-solutions" replace />} />	
            <Route path="/requestdemoo" element={<Navigate to="https://app.memate.com.au/requestdemo" replace />} />	
            <Route path="/what-makes-business-process-management-software-your-winning-wager/" element={<Navigate to="/news/what-makes-business-process-management-software-your-winning-wager" replace />} />	
            <Route path="memate-faqs" element={<Navigate to="/faqs" replace />} />	
            <Route path="/memate-for-marketing-agencies-unlocking-efficient-project-management-and-delegation/" element={<Navigate to="/news/choosing-the-best-crm-for-small-business-in-australia" replace />} />	
            <Route path="/memate-for-designers-keeping-all-correspondence-in-one-place/" element={<Navigate to="/news" replace />} />	
            <Route path="/business-process-management-software-5-things-to-look-for/" element={<Navigate to="/news/business-process-management-software-5-things-to-look-for" replace />} />		
            <Route path="/onborading" element={<Navigate to="https://app.memate.com.au/onboarding" replace />} />	
            <Route path="/5-signs-your-small-business-in-australia-needs-management-software/" element={<Navigate to="/news/5-signs-your-small-business-in-australia-needs-management-software" replace />} />	
            <Route path="/tag/all-in-one-business-management-software/" element={<Navigate to="/news/all-in-one-business-process-management-software-solutions--should-you-invest-in-it" replace />} />
            <Route path="/tag/business-organisation-software/" element={<Navigate to="/news/revealed--top-4-project-management-systems-to-drive-profitability-in-2023" replace />} />	
            <Route path="/business-process-management-software/" element={<Navigate to="/features/project-management-software" replace />} />	
            <Route path="/product-category/device/?product_orderby=name&product_count=24" element={<Navigate to="/pricing" replace />} />	
            <Route path="/product/desktop-admin/" element={<Navigate to="/pricing" replace />} />	
            <Route path="/careers/" element={<Navigate to="https://www.linkedin.com/uas/login?session_redirect=%2Fcompany%2F78408530" replace />} />	
            <Route path="/calendar" element={<Navigate to="/features/calendar-timeline-management-software" replace />} />	
            <Route path="/shop/" element={<Navigate to="/pricing" replace />} />	
            <Route path="/electronic-repair-specialists/" element={<Navigate to="/industries/software-for-electronic-repair-businesses" replace />} />	
            <Route path="/wp-admin/admin-ajax.php" element={<Navigate to="/" replace />} />
            <Route path="/log-in/" element={<Navigate to="https://app.memate.com.au/login" replace />} />	
            <Route path="/calculators" element={<Navigate to="/features/business-quote-calculator" replace />} />	
            <Route path="/profitability-and-budgeting" element={<Navigate to="/features/profitability-and-budgeting-software" replace />} />	
            <Route path="/tag/small-business-management-software-australia/" element={<Navigate to="/news/why-smes-should-make-workflow-automation-the-focal-point-in-2023" replace />} />	
            <Route path="/choosing-the-right-business-management-software-a-comprehensive-review/" element={<Navigate to="/news/choosing-the-right-business-management-software--a-comprehensive-review" replace />} />	
            <Route path="/why-smes-should-make-workflow-automation-the-focal-point-in-2023/" element={<Navigate to="/news/why-smes-should-make-workflow-automation-the-focal-point-in-2023" replace />} />	
            <Route path="/revolutionize-your-digital-agency-with-memate/" element={<Navigate to="/news/revolutionize-your-digital-agency-with-memate" replace />} />	
            <Route path="/software-comparison-servicem8-vs-memate/" element={<Navigate to="/news/software-comparison-servicem8-vs-memate" replace />} />	
            <Route path="/memate-labels-have-exponentially-increased-productivity-and-organization-here-at-camerafix/" element={<Navigate to="/news/memate-labels-have-exponentially-increased-productivity-and-organization-here-at-camerafix" replace />} />	
            <Route path="/product-category/device/" element={<Navigate to="/pricing" replace />} />	
            <Route path="/about-us/" element={<Navigate to="/about" replace />} />	
            <Route path="/category/rel/" element={<Navigate to="/news" replace />} />	
            <Route path="/project-management-systems/" element={<Navigate to="/news/revealed--top-4-project-management-systems-to-drive-profitability-in-2023" replace />} />	
            <Route path="/5-best-project-management-tools-in-australia-2023/" element={<Navigate to="/news/5-best-project-management-tools-in-australia-2023-2" replace />} />	
            <Route path="/choosing-the-best-crm-for-small-business-in-australia/" element={<Navigate to="/news/choosing-the-best-crm-for-small-business-in-australia" replace />} />	
            <Route path="/direct-debit-service-request-agreement/" element={<Navigate to="/terms" replace />} />	
            <Route path="/add-company/" element={<Navigate to="/add-your-company" replace />} />	
            <Route path="/what-is-memate/" element={<Navigate to="/about" replace />} />	
            <Route path="/product-category/device/?product_orderby=popularity" element={<Navigate to="/pricing" replace />} />	
            <Route path="/news/page/6/" element={<Navigate to="/news" replace />} />	
            <Route path="/news/page/3/" element={<Navigate to="/news" replace />} />	
            <Route path="/product-category/device/?product_orderby=rating" element={<Navigate to="/pricing" replace />} />	
            <Route path="/news/page/2/" element={<Navigate to="/news" replace />} />	
            <Route path="/how-a-digital-agency-benefitted-from-memate/" element={<Navigate to="/news/how-a-digital-agency-benefitted-from-memate" replace />} />	
            <Route path="/product-category/device/?product_orderby=name" element={<Navigate to="/pricing" replace />} />	
            <Route path="/tag/top-business-management-app-for-repairs/" element={<Navigate to="/news/24-best-business-management-software-2023-update" replace />} />
            <Route path="/statistic" element={<Navigate to="/" replace />} />	
            <Route path="/testimonial/camera-fix/" element={<Navigate to="/customer-stories/camera-fix" replace />} />	
            <Route path="/4-project-management-systems-to-drive-profitability-in-2023/" element={<Navigate to="/news/revealed--top-4-project-management-systems-to-drive-profitability-in-2023" replace />} />	
            <Route path="/product-category/device/?product_count=36" element={<Navigate to="/pricing" replace />} />	
            <Route path="/5-best-project-management-tools-in-australia-2023/feed/" element={<Navigate to="/news/5-best-project-management-tools-in-australia-2023-2" replace />} />	
            <Route path="/my-account/" element={<Navigate to="https://app.memate.com.au/requestdemo" replace />} />	
            <Route path="/news/page/4/" element={<Navigate to="/news" replace />} />	
            <Route path="/author/devthead-com-au/page/3/" element={<Navigate to="/news" replace />} />	
            <Route path="/author/devthead-com-au/page/4/" element={<Navigate to="/news" replace />} />	
            <Route path="/my-account/lost-password/" element={<Navigate to="https://app.memate.com.au/requestdemo" replace />} />	
            <Route path="/fusion_tb_category/footer/" element={<Navigate to="/news" replace />} />	
            <Route path="/tag/business-organisation-software/feed/" element={<Navigate to="/news" replace />} />	
            <Route path="/my-account/add-ons/" element={<Navigate to="/" replace />} />	
            <Route path="/software-comparison-servicem8-vs-memate/feed/" element={<Navigate to="/memate-vs-servicem8" replace />} />	
            <Route path="/author/devthead-com-au/feed/" element={<Navigate to="/news" replace />} />	
            <Route path="/client-management" element={<Navigate to="/features/client-management-software" replace />} />	
            <Route path="/construction" element={<Navigate to="/industries/business-software-for-construction-industry" replace />} />	
            <Route path="/news/page/7/" element={<Navigate to="/news" replace />} />
            {/* Redirect 301 */}
          <Route
            path="/news"
            exact
            element={<BlogPage PostsCategories={PostsCategories} activeCategory={activeCategory} handleTabClick={handleTabClick} posts={posts} postsLatest={postsLatest} totalPosts={totalPosts} loading={loading} handleNext={handleNext} />} />
          <Route
            path="/news/:slug"
            element={<SinglePage postsSingle={posts} postsLatest={postsLatest} />} />
          <Route
            path="/news/tags/:slug"
            element={<BlogTagPage PostsCategories={PostsCategories}  postsSingle={posts} postsLatest={postsLatest} />} />
          <Route path="/news/category/:id" element={<CategoryPage PostsCategories={PostsCategories} postsSingle={posts} postsLatest={postsLatest} />} />
          <Route path="/memate-software-updates" exact element={<SoftwareUpdatePage />} />
          <Route path="/industries/business-software-for-creative-agencies" exact element={<IndustryPage postsLatest={postsLatest} />}  />
         
          <Route path="/contact-us" exact element={<ContactUsPage />} />
          <Route path="/supplier-database" exact element={<SupplierDatabasePage />} />
          <Route path="/knowledge-base" exact element={<KnowledgeBasePage />} />
          {/* <Route path="/terms-of-use" exact element={<TOSPage />} /> */}
          <Route path="/terms" exact element={<TermsAndConditionsPage />} />
          <Route path="/pricing" exact element={<PricingPage />} />
          <Route path="/privacy" exact element={<PrivacyPage />} />
          <Route path="/brand" exact element={<BrandPage />} />
          <Route path="/customer-stories" exact element={<CustomerStoriesPage />} />
          <Route path="/customer-stories/camera-fix" exact element={<CustomerStoriesPageSingle />} />
          <Route path="/customer-stories/pro-vinyl" exact element={<CustomerStoriesPageSingle />} />
          <Route path="/customer-stories/elite-life" exact element={<CustomerStoriesPageSingle />} />
          <Route path="/customer-stories/boat-wizard" exact element={<CustomerStoriesPageSingle />} />
          <Route path="/customer-stories/sorted-media" exact element={<CustomerStoriesPageSingle />} />
          <Route path="/supplier-database/:slug" exact element={<DatabasePageSingle />} />
          <Route path="/add-your-company" exact element={<AddYourCompanyPage />} />
          <Route path="/features/client-management-software" exact element={<ClientPage />} />
          <Route path="/memate-vs-servicem8" exact element={<Services8Page />} />
          <Route path="/features/supplier-management-software" exact element={<SupplierManagementPage />} />
          <Route path="/features/sales-management-tools" exact element={<FeaturePage />} />
          <Route path="/features/employee-management-tools" exact element={<EmployeeManagementPage />} />
          <Route path="/features/project-management-software" exact element={<ProjectManagementPage />} />
          <Route path="/features/business-reporting-tools" exact element={<ReportsPage />} />
          <Route path="/reports" element={<Navigate to="/features/business-reporting-tools" replace />} />
          <Route path="/features/profitability-and-budgeting-software" exact element={<ProfitabilityAndBudgetingPage />} />
          <Route path="/features/contractor-management-software" exact element={<ContractorPage />} />
          <Route path="/features/internal-communication-tools" exact element={<InternalChatPage />} />
          <Route path="/features/time-tracking-software" exact element={<TimeSheetPage />} />
          <Route path="/features/task-management-software" exact element={<TaskManagementPage />} />
          <Route path="/features/team-communication-tools" exact element={<CommunicationPage />} />
          <Route path="/features/job-scheduling-software" exact element={<SchedulingPage />} />
          <Route path="/features/invoicing-software" exact element={<InvoicingPage />} />
          <Route path="/features/business-statistics-tools" exact element={<StatisticPage />} />
          <Route path="/features/job-management-software" exact element={<ScheduleJobsPage />} />
          <Route path="/features/time-tracking-tools" exact element={<TimeTrackerPage />} />
          <Route path="/features/job-approval-software" exact element={<JobApprovalPage />} />
          <Route path="/features/multi-location-management" exact element={<MultiLocationPage />} />
          <Route path="/features/calendar-timeline-management-software" exact element={<CalendarPage />} />
          <Route path="/features/business-quote-calculator" exact element={<CalculatorsPage />} />
          <Route path="/industries/software-for-electronic-repair-businesses" exact element={<ElectronicPage postsLatest={postsLatest}/>} />
          <Route path="/industries/software-for-photo-video-agencies" exact element={<PhotoPage postsLatest={postsLatest} />} />
          <Route path="/industries/business-software-for-automotive-industry" exact element={<AutomotivePage postsLatest={postsLatest}/>} />
          <Route path="/industries/business-management-software-for-startups" exact element={<StartupsPage postsLatest={postsLatest} />} />
          <Route path="/industries/business-software-for-construction-industry" exact element={<ConstructionPage />} />
          {/* <Route path="/features/your-business-news-management" exact element={<FeaturesNewsPage />} /> */}
          <Route path="/about" exact element={<AboutMematePage />} />
          <Route path="/delete-request" exact element={<DeleteRequestPage />} />
          <Route path="/memate-brand" exact element={<MemteBrandPage />} />
          <Route path="/memate-wiki" exact element={<MemateWikiPage />} />
          <Route path="/memate-wiki/:subSlug/:titleSlug" exact element={<MemateWikiDetailsPage />} />
          <Route path="/memate-wiki/:categoryId" exact element={<MemateWikiSinglePage />} />
          <Route path="/security" exact element={<SecurityPage />} />
          <Route path="/legal" exact element={<LegalPage />} />
          <Route path="/contact-sales" exact element={<ContactSalesPage />} />
          <Route path="/watch-demo" exact element={<WatchDemoPage />} />
          <Route path="/features" exact element={<FeaturesPage />} />
          <Route path="/industries" exact element={<IndustriesPage />} />
          {/* <Route path="/news-stories" exact element={<NewsStoriesPage />} /> */}
          <Route path="/sitemap" exact element={<SitemapPage />} />
          <Route path="/resources" exact element={<ResourcesPage />} />
          <Route path="*" exact element={<ErrorPage num={1} />} />
          <Route path="/404" exact element={<ErrorPage num={2} />} />
          <Route path="/thank-you" exact element={<ThankYouPage />} />
          <Route path="/tron-btton" exact element={<TronButton />} />
          <Route path="/faqs" exact element={<MemateFaqsPage />} />
        </Routes>
      </QueryClientProvider>
      </HelmetProvider>
    </div>
  );
}

export default App;

