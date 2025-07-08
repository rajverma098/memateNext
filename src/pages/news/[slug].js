import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBlogSingle, clearBlogSingle } from '@/store/slices/blogSingleSlice';
import Head from 'next/head';
import ShareComponent from '@/components/ShareComponent';

const BlogSingle = () => {
  const router = useRouter();
  const { slug } = router.query;

  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.blogSingle);

  useEffect(() => {
    if (slug) {
      dispatch(fetchBlogSingle(slug));
    }

    return () => {
      dispatch(clearBlogSingle()); // optional cleanup
    };
  }, [slug, dispatch]);

  const fallbackImage = '/images/fallback-blog.jpg';

  // ✅ Move meta logic here (after data check)
  const meta = {
   
    title: data?.title || 'MeMate News',
    description: data?.description?.replace(/<[^>]+>/g, '').slice(0, 150) || 'Latest blog from MeMate.',
    url: `https://memate.au/news/${data?.slug}`,
    image: data?.featured_img_url || `https://memate.au${fallbackImage}`,
   
  };

  return (
    <div className="single-blog-page">
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}

      {data && (
        <>
          <Head>
           <title>{meta.title}</title>
        <meta property="og:type" content="article" />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:url" content={meta.url} />
        <meta property="og:image" content={meta.image} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
      </Head>

          <div className="stickySocial">
            <p>Share</p>
            <ShareComponent
              url={meta.url}
              title={meta.title}
              image={meta.image}
              description={meta.description}
            />
          </div>

          <h1>{data.title}</h1>
          <p>{data.author} | {new Date(data.publish_date).toLocaleDateString()}</p>
          <img
            src={data.featured_img_url || fallbackImage}
            alt={data.title}
            style={{ width: '100%', maxHeight: 500 }}   bjmn
          />
          <div dangerouslySetInnerHTML={{ __html: data.description }} />
        </>
      )}
    </div>
  );
};

export default BlogSingle;
