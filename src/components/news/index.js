import { useEffect, useState } from 'react';
import Link from 'next/link';
import "./style.css";
import Images from "../../../public/assest/blog-images"; // Make sure this exists or replace with a valid image path
import { useDispatch, useSelector } from 'react-redux';
import { fetchNews } from '../../store/slices/newsSlice';

function Blog() {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.news);

  const [activeCategory, setActiveCategory] = useState(0);
  const [page, setPage] = useState(1);
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [postsLatest, setPostsLatest] = useState([]);
  const [totalPosts, setTotalPosts] = useState(0);

  const PostsCategories = [
    { id: 0, title: "All" },
    { id: 1, title: "Tech" },
    { id: 2, title: "Business" },
    { id: 3, title: "Regulation" },
  ];

  useEffect(() => {
    dispatch(fetchNews({ page: 1, limit: 10, activeCategory: 0 }));
  }, [dispatch]);

  useEffect(() => {
    if (data?.data) {
      const allPosts = data.data;
      setPosts(allPosts);
      setTotalPosts(data.total || allPosts.length);

      const filtered = activeCategory === 0
        ? allPosts
        : allPosts.filter(post => post.category?.id === activeCategory);

      setFilteredPosts(filtered);
      setPostsLatest(allPosts.slice(0, 3));
    }
  }, [data, activeCategory]);

  const handleTabClick = (categoryId) => {
    setActiveCategory(categoryId);
    setPage(1);
  };

  const handleNext = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    dispatch(fetchNews({ page: nextPage, limit: 10, activeCategory }));
  };

  const formatDateWithOrdinal = (dateString) => {
    try {
      const date = new Date(dateString?.replace(/(\d+)(st|nd|rd|th)/, '$1'));
      const day = date.getDate();
      const month = date.toLocaleString('en-US', { month: 'long' });
      const year = date.getFullYear();

      const ordinalSuffix = (n) => {
        if (n > 3 && n < 21) return 'th';
        switch (n % 10) {
          case 1: return 'st';
          case 2: return 'nd';
          case 3: return 'rd';
          default: return 'th';
        }
      };

      return `${day}${ordinalSuffix(day)} ${month}, ${year}`;
    } catch (error) {
      console.error("Error formatting date:", error);
      return dateString;
    }
  };

  const fallbackImage = "/images/fallback-blog.jpg"; // Set your actual fallback image path

  return (
    <div id="blogGrid">
      <div className="parent-blog-page">
        <div className="parent-blog">
          <div className="blogmainheadcontainer">
            <div className="heading-blog">Articles</div>
            <h1>News, Features & Regulation <br />Updates from MeMate</h1>
            <div className="dog-img-container1 dog-img-container">
              <img
                className="dog-img"
                srcSet={`https://memate-website.s3.ap-southeast-2.amazonaws.com/media/DogImage3x.png 600w, 
                         https://memate-website.s3.ap-southeast-2.amazonaws.com/media/DogImage2x.png 1200w, 
                         https://memate-website.s3.ap-southeast-2.amazonaws.com/media/DogImage1x.png 1800w`}
                sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 25vw"
                src="https://memate-website.s3.ap-southeast-2.amazonaws.com/media/DogImage3x.png"
                alt="Dog"
              />
            </div>
            <div className="blog-description-smallb">
              <p>Latest Small Business Technology News and Software Updates</p>
            </div>
          </div>

          {/* Categories Filter */}
          <div className="categoriesMainWrap">
            <div className="listTabs">
              {PostsCategories.map((cat) => (
                <button
                  key={cat.id}
                  className={`filterBlogTabBtn ${activeCategory === cat.id ? "active" : ""}`}
                  onClick={() => handleTabClick(cat.id)}
                >
                  {cat.title}
                </button>
              ))}
            </div>

            {/* Posts Grid */}
            <div className="categories">
              {loading && <p>Loading...</p>}
              {error && <p>Error: {error}</p>}
              {!loading && filteredPosts.length === 0 && (
                <p style={{ textAlign: 'center', padding: '2rem' }}>No Posts Found</p>
              )}
              {filteredPosts.map((post) => (
                <div key={post.id} className="img-container-3-div">
                  <div className="img-container-3-img1-div">
                    <Link href={`/news/${post.slug}`}>
                      <img
                        className="img-container-3-img-1"
                        src={post.featured_img_url || fallbackImage}
                        alt={post.title}
                      />
                    </Link>
                    <div className="img-heading-container">
                      <div className="date-A">{formatDateWithOrdinal(post.publish_date)} | {post.author}</div>
                      <div className="date-heading-mainb">
                        <Link href={`/news/${post.slug}`}>{post.title}</Link>
                      </div>
                      <div className="postCategory">
                        <Link href={`/news/category/${post.category?.id}`}>{post.category?.title}</Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              {totalPosts > posts.length && (
                <div className="nextbtn-container-A">
                  <button onClick={handleNext} className="next-page-btn-A">
                    {loading ? "Loading..." : "Load More"}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
