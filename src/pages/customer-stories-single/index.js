import CameraFix from "../../components/customer-stories-single/camera-fix";
import ProVinyl from "../../components/customer-stories-single/pro-vinyl";
import EliteLife from "../../components/customer-stories-single/elite-life";

import Layout from "../../layout";
import React from "react";
import { useLocation } from "react-router-dom";
import BoatWizard from "../../components/customer-stories-single/boat-wizard";
import SortedMedia from "../../components/customer-stories-single/sorted-media";

const CustomerStoriesPageSingle = () => {
  const location = useLocation();
  return (
    <Layout>
      <div className="bgshadowwrapper">
        {location.pathname === "/customer-stories/camera-fix" && <CameraFix />}
        {location.pathname === "/customer-stories/pro-vinyl" && <ProVinyl />}
        {location.pathname === "/customer-stories/elite-life" && <EliteLife />}
        {location.pathname === "/customer-stories/boat-wizard" && (
          <BoatWizard />
        )}
        {location.pathname === "/customer-stories/sorted-media" && (
          <SortedMedia />
        )}
      </div>
    </Layout>
  );
};
export default CustomerStoriesPageSingle;
