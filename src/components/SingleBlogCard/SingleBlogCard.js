import React from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/SingleBlogCard.css";

const SingleBlogCard = ({ Singleblog }) => {
  const navigate = useNavigate();

  const { title, blog, _id, imageURL } = Singleblog;

  return (
    <div className="main-container">
      <div className="img">
        <img src={imageURL} alt="" />
      </div>
      <div className="blog-container">
        <h2>{title}</h2>
        <p>{blog.slice(0, 400)}</p>
        <span onClick={() => navigate(`/blog/${_id}`)} className="read-more">
          Read More
        </span>
      </div>
    </div>
  );
};

export default SingleBlogCard;
