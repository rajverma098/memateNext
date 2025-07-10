import React, { useEffect, useRef } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import "./style.css";
import NextStep from "../components/next-step";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLocation } from "react-router-dom"; 

gsap.registerPlugin(ScrollTrigger);

const Layout = ({ children }) => {
  const stickySectionRef = useRef(null);
  const buttonRef = useRef(null);
  const location = useLocation(); 
  const intervalRef = useRef(null);
  const isSitemapPage = location.pathname === '/sitemap';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    let animationInstances = [];
    const initTimeout = setTimeout(() => {
      if (stickySectionRef.current) {
        gsap.set(stickySectionRef.current, { opacity: 0 });
        const stickyAnimation = gsap.to(stickySectionRef.current, {
          opacity: 1,
          scrollTrigger: {
            trigger: ".apply-container",
            start: "bottom 62%",
            end: "bottom 20%",
            scrub: 0.5,
            markers: false,
            invalidateOnRefresh: true
          }
        });
        animationInstances.push(stickyAnimation);
      }

      // Only create button animation if the button exists
      if (buttonRef.current) {
        const tl = gsap.timeline({
          repeat: 0,
          scrollTrigger: {
            trigger: buttonRef.current,
            start: "top center",
            toggleActions: "play none none none",
            once: true
          }
        });

        tl.to(buttonRef.current, {
          scale: 1.1,
          duration: 0.5,
          ease: "power2.out"
        });

        
        animationInstances.push(tl);
      }
    }, 100);

   
    let refreshCount = 0;
    const MAX_REFRESHES = 1;

    intervalRef.current = setInterval(() => {
      if(document.readyState === 'complete' && ScrollTrigger) {
        try {
          ScrollTrigger.refresh();
          refreshCount++;
          
          if (refreshCount >= MAX_REFRESHES) {
            clearInterval(intervalRef.current);
          }
        } catch (e) {
          console.warn("ScrollTrigger refresh error:", e);
          clearInterval(intervalRef.current);
        }
      }
    }, 5000);

    return () => {
      clearTimeout(initTimeout);
      clearInterval(intervalRef.current);
      
      // Safely kill ScrollTrigger instances
      try {
        ScrollTrigger.getAll().forEach(instance => instance.kill());
        // Also kill any animations we created
        animationInstances.forEach(animation => {
          if (animation && animation.kill) animation.kill();
        });
      } catch (e) {
        console.warn("Error cleaning up GSAP animations:", e);
      }
      
      window.scrollTo(0, 0);
    };
  }, []);

  return (
    <>
      <Header />
      <div className="apply-container">
        <div className="children-wrapper children-wrapper-main">
          <div className="children">{children}</div>
        </div>
      </div>
      {!isSitemapPage && (
        <div
          ref={stickySectionRef}
          className="sticky-section-switch"
          style={{ opacity: 0 }}>
          <div className="apply-content">
            <div className="get-started-wrapper">
              <div className="intro-sticky">
                <NextStep text="Book a Demo" ref={buttonRef} />
              </div>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};

export default Layout;