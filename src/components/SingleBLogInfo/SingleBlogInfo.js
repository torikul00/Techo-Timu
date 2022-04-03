import React, { useEffect, useState } from "react";
import "../Styles/SingleBlogInfo.css";
import { useNavigate, useParams } from "react-router-dom";
const SingleBlogInfo = () => {
  const navigate = useNavigate();
  const { blogID } = useParams();
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const items = localStorage.getItem("blogs");
    const parseItems = JSON.parse(items);
    setBlogs(parseItems);
  }, []);
  const blog = blogs.find((blog) => blog._id === blogID);

  return (
    <div>
      <div className="cover-container"></div>
      <div className="profile">
        <img src={blog?.imageURL} alt="" />
      </div>
      <div className="blog-info">
        <div className="info">
          <h2 className="title">{blog?.title}</h2>
          <p className="blog">{blog?.blog}</p>
          <button onClick={() => navigate(-1)}>Back to home</button>
        </div>
      </div>
    </div>
  );
};

export default SingleBlogInfo;
