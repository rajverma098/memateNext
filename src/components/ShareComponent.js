// components/ShareComponent.js
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  WhatsappIcon,
} from 'react-share';

const ShareComponent = ({ url, title, image, description }) => {
  return (
    <div className="share-buttons">
       <ul>
          <li>
      <FacebookShareButton url={url} quote={title} description={description} image={image}> 
        <FacebookIcon size={32} round />
      </FacebookShareButton></li>
     <li> <TwitterShareButton url={url} title={title} description={description} image={image}>
        <TwitterIcon size={32} round />
      </TwitterShareButton></li>
      <li> <LinkedinShareButton url={url} title={title} description={description} source={url} image={image}>
        <LinkedinIcon size={32} round />
      </LinkedinShareButton></li>
     <li>  <WhatsappShareButton url={url} title={title} description={description} image={image}>
        <WhatsappIcon size={32} round />
      </WhatsappShareButton></li>
       </ul>
    </div>
  );
};

export default ShareComponent;
