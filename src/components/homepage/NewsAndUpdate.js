

import Images from "../../assests/blog-images";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLatestUpdates } from "../../store/slices/updateSlice";
import { fetchLatestBlogs } from "../../store/slices/blogSlice";
import "./NewsAndUpdate.css";

const NewsAndUpdate = () => {
 const dispatch = useDispatch();
  const { data: updateData, loading: updateLoading, error: updateError } = useSelector((state) => state.updates);
  const { data: blogData, loading: blogLoading, error: blogError } = useSelector((state) => state.blogs);

  useEffect(() => {
    dispatch(fetchLatestUpdates());
    dispatch(fetchLatestBlogs());
  }, [dispatch]);

  if (updateLoading || blogLoading) return <p>Loading...</p>;
  if (updateError || blogError) return <p>Error loading content.</p>;
  return (
    <>
      <div className="slider-section1 sliderSectionShadowl" data-aos="fade-up"
      data-aos-offset="50"
      data-aos-delay="50"
      data-aos-duration="4000"
      data-aos-mirror="true"
      data-aos-once="false"
      data-aos-anchor-placement="top-bottom">
        <div className="success-stories1">
          <div className="bottom-management bottom-managementw">
            <div className='SStoriesHead sequel_sans'>News and Updates</div>
            <p>Discover how meMate is transforming businesses across Australia.</p>
          </div>
          <div className="newsandUpdateNew">
            <div className="NewsflexWrap">
              <div className="Newsitem">
                <div className="itemHead">
                  <span className='sequel_sans'>News</span> <a className='sequel_sans_roman_head' href='/news'>All News</a>
                </div>
                <ul>
                   {blogData.map((post) => (
              
                    <li key={post.id}>
                      <div className="imgBox">
                        <a href={`/news/${post.slug}`}>
                        <LazyLoadImage 
                                          alt="Blog featured image"
                                          src={post?.featured_img_url || Images.blogImgempty}
                                          effect="blur" 
                                        /> 
                        </a>
                      </div>
                      <div className="textBox"> 
                        <span className='sequel_sans_roman_head'>{new Date(post?.publish_date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                        <a href={`/news/${post?.slug}`}>
                        <div className='postH2Title sequel_sans_roman_head'>{post?.title}</div>
                        </a>
                        <a className='sequel_sans' href={`/news/${post?.slug}`}>Read More</a>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="softwareWrp">
                <div className="itemHead">
                  <span className='sequel_sans'>Updates</span> <a className='allUpdates sequel_sans_roman_head' href='/memate-software-updates'>All Updates</a>
                </div>
                <ul>
                  {updateData.map((update) => (
                    <li key={update?.id}>
                      <h3 className='sequel_sans_roman_head'>{update?.title}</h3>
                      <span className='sequel_sans_roman_head'>{new Date(update?.publish_date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsAndUpdate;
