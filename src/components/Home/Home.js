import React, { useContext, useEffect } from "react";
import SingleBlogCard from "../SingleBlogCard/SingleBlogCard";
import { LoadBlog } from "../../App";

const Home = () => {
  const [blogs, setBlogs] = useContext(LoadBlog);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, [setBlogs]);
  localStorage.setItem("blogs", JSON.stringify(blogs));
  return (
    <div>
      {blogs.map((blog) => (
        <SingleBlogCard Singleblog={blog} key={blog._id} />
      ))}
    </div>
  );
};

export default Home;
