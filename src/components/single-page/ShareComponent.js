import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
} from "react-share";

const ShareComponent = ({ url, title, image, description }) => {
  return (
    <>
      <Helmet>
        {/* <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" /> */}
      </Helmet>
      <div className="share-buttons">
        <ul>
          <li>
            <FacebookShareButton
              url={url}
              quote={title}
              image={image}
              hashtag={title}
            >
              <Link className="link socialIcon" aria-label="Share Link">
                <img
                  src="https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/facebook.svg"
                  alt="facebook"
                />
              </Link>
            </FacebookShareButton>
          </li>
          <li>
            <TwitterShareButton
              url={url}
              title={title}
              image={image}
              hashtags={[title]}
            >
              <Link className="link socialIcon" aria-label="Share Link">
                <img
                  src="https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/twitter.svg"
                  alt="twitter"
                />
              </Link>
            </TwitterShareButton>
          </li>
          <li>
            <LinkedinShareButton url={url} title={title} >
              <Link className="link socialIcon" aria-label="Share Link">
                <img
                  src="https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/linkedin.svg"
                  alt="linkedin"
                />
              </Link>
            </LinkedinShareButton>
          </li>
          <li>
            <Link className="link socialIcon" to={`mailto:?subject=${title}&body=I%20thought%20you%20might%20like%20this:${url}`} aria-label="Share Link">
              <img
                src="https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/link.svg"
                alt="link"
              />
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default ShareComponent;
