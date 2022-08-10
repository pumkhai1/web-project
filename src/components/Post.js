import React from 'react';
import "../styles/Blog.css";



const Post = ({ post: { title, body, imgUrl, author }, index }) => {


  return (  

    <div>
      <div className="post-container">
        <h2 className="heading">{title}</h2>
        <img className="image" src={imgUrl} alt="post" />
        <h4>{body}</h4>
        <div className="info">      
          <h4>Written by: {author}</h4>
        </div>
      </div>
    </div>
  );
};
  
export default Post;