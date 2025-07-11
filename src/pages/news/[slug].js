import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBlogSingle, clearBlogSingle } from '@/store/slices/blogSingleSlice';
import Seo from '@/components/seo';
import ShareComponent from '@/components/ShareComponent';
import './blogsingle.css';

const BlogSingle = ({ postData }) => {
  const router = useRouter();
  const { slug } = router.query;
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.blogSingle);

  const [isScrolled, setIsScrolled] = useState(false);
  const [isNearBottom, setIsNearBottom] = useState(false);

  const fallbackImage = '/images/fallback-blog.jpg';

useEffect(() => {
  if (postData) {
    dispatch(fetchBlogSingle.fulfilled(postData));
  }
  return () => dispatch(clearBlogSingle());
}, [dispatch, postData]);

  // Scroll events for sticky share
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 100;
      const nearBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 200;
      setIsScrolled(scrolled);
      setIsNearBottom(nearBottom);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const formatDateWithOrdinal = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const ordinal = ['th', 'st', 'nd', 'rd'][(day % 10 > 3 || ~~(day % 100 / 10) === 1) ? 0 : day % 10];
    return `${day}${ordinal} ${date.toLocaleString('default', { month: 'long' })} ${date.getFullYear()}`;
  };

  const post = data || postData; 
  const postsSingle = post?.related_posts || [];

  if (!post) return <p>Loading blog...</p>;

  const seoData = {
    title: `${post?.seo_title || post?.title || 'Blog'} | My Blog`,
    description: post?.meta_description || '',
    url: `https://memate.com.au/news/${post?.slug}`,
    image: post?.featured_img_url || fallbackImage,
  };

  return (
    <>
      <Seo {...seoData} />

      <div className="bgshadowwrapper">
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}

        {post && (
          <div className="parent parentSingle">
            <div className="pageBreadcrumbs">
              <ul className="postlist">
                <li><a href="/">Home</a></li><li>/</li>
                <li><a href="/news">Latest Articles</a></li><li>/</li>
                <li>{post.title}</li>
              </ul>
              <a href="/news" className="backButStories">← Back</a>
            </div>

            <div className="accounting-text-A categoryLinkTitle">
              <a href={`/news/category/${post.category?.id}`}>{post.category?.title}</a>
            </div>

            <h1 className="singlePageheading">{post.title}</h1>
            <div className="singlePageDate">
              {formatDateWithOrdinal(post.publish_date)} | {post.author}
            </div>

            <div className={`stickySocialWrap ${isScrolled ? 'scrolled' : ''} ${isNearBottom ? 'hide' : ''}`}>
              <div className="stickySocial">
                <p>Share</p>
                <ShareComponent
                  url={`https://memate.com.au/news/${post.slug}`}
                  title={post.seo_title}
                  image={post.featured_img_url}
                  description={post.meta_description}
                />
              </div>
            </div>

            <div className="img-1-container-A img-1-container-singlenews">
              {post.video_url ? (
                <video className="img-1" autoPlay loop muted playsInline>
                  <source src={post.video_url} type="video/mp4" />
                </video>
              ) : post.featured_img_url ? (
                <img className="img-1" src={post.featured_img_url} alt={post.title} />
              ) : post.thumbnail_img ? (
                <img className="img-1" src={post.thumbnail_img} alt={post.title} />
              ) : (
                <img className="img-1" src={fallbackImage} alt={post.title} />
              )}
            </div>

            <div className="heading-2-text-A single-page-heading-text parentSingleBlogMemate">
              <div dangerouslySetInnerHTML={{ __html: post.description }} />
            </div>

            {/* Tags */}
            <div className="blogMetstags">
              <strong>Tags</strong>
              <div className="blogloopdata">
                {(post.meta_keyword || '').split(',').map((tag, index) => {
                  const tagSlug = (post.meta_keyword_slug || '').split(',')[index]?.trim();
                  return (
                    <span key={index} className="tag">
                      <a href={`/news/tags/${tagSlug || tag.trim().toLowerCase().replace(/\s+/g, '-')}`}>
                        {tag.trim()}
                      </a>
                    </span>
                  );
                })}
              </div>
            </div>

            {/* Related Posts */}
            {postsSingle.length > 0 && (
              <div className="blogSinglePageMightLike parent-blog-page">
                <h2>You Also Might Like</h2>
                <div className="img-container-3 parent-blog-pageWrap">
                  {postsSingle.slice(0, 3).map((related) => (
                    <div key={related.id} className="img-container-3-div">
                      <div className="img-container-3-img1-div">
                        <a href={`/news/${related.slug}`}>
                          <img
                            className="img-container-3-img-1"
                            src={related.featured_img_url || fallbackImage}
                            alt={related.title}
                          />
                        </a>
                        <div className="img-heading-container">
                          <div className="date-A date-Ab">
                            {formatDateWithOrdinal(related.publish_date)} | {related.author}
                          </div>
                          <div className="date-heading-mainb">
                            <a href={`/news/${related.slug}`}>{related.title}</a>
                          </div>
                          <div className="postCategory postCategoryb">
                            <a href={`/news/category/${related.category?.id}`}>
                              {related.category?.title}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export async function getServerSideProps({ params }) {
  const { slug } = params;
console.log('SSR slug Main:', slug);
  try {
    const res = await fetch(`https://admin.memate.com.au/api/news/${slug}`, {
      headers: {
        'x-api-key': '3fa85f64d51b6c8e74313f7c69aef82d'
      }
    });

    if (!res.ok) return { notFound: true };

    const postData = await res.json();
    if (!postData || !postData.slug) return { notFound: true };

    return {
      props: { postData }
    };
  } catch (err) {
    console.error('SSR Blog Fetch Error:', err);
    return { notFound: true };
  }
}

export default BlogSingle;
