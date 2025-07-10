import Layout from "../../layout";
import React from "react";
import Single from "../../components/single-page";
const SinglePage = ({postsSingle,postsLatest}) => {

  return (
    <Layout>
      <Single postsSingle={postsSingle} postsLatest={postsLatest}/>
    </Layout>
  );
};
export default SinglePage;