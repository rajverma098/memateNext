export const blogList = async (page, limit, activeCategory) => {
  const myHeaders = new Headers();
  myHeaders.append("X-Api-Key", "3fa85f64d51b6c8e74313f7c69aef82d");

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow"
  };

  try {
    const response = await fetch(
      `https://admin.memate.com.au/api/news?page=${page}&limit=${limit}&category_id=${activeCategory || 0}`,
      requestOptions
    );

    if (!response.ok) {
      if (response.status === 404) {
        throw new Error('Resource not found (404)');
      }
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const result = await response.json();
    console.log("API response blogList:", result);
    return result;

  } catch (error) {
    console.error("Error fetching blog posts:", error);
    throw error;
  }
};




export const blogSingle = async (slug) => {
  const myHeaders = new Headers();
  myHeaders.append("X-Api-Key", "3fa85f64d51b6c8e74313f7c69aef82d");

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow"
  };

  try {
    const response = await fetch(`https://admin.memate.com.au/api/news/${slug}`, requestOptions);
    const result = await response.json();
    console.log("API response blogSingle:", result);

    return result;

  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return [];
  }
};