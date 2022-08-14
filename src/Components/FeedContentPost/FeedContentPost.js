import React from "react";
import "./FeedContentPost.css";

export default function FeedContentPost() {
  return (
    <article className="blog-Post">
      <div className="header-feed">
        <div>
          <span className="span-tags">post-tags |</span>
          <h2 className="post-title">Post-Title</h2>
        </div>
        <span className="header-feed-menu">...</span>
      </div>
      <div className="feed-content">
        <div className="author-picture">
          <img src="assets/imgs/imagem-destaque.jpg" alt="author-picture" />
        </div>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat cum
          doloribus, quisquam saepe sint minus officia delectus voluptatibus
          amet ut maiores. Consequuntur maxime voluptas ratione nisi minima quos
          impedit sint.
        </p>
      </div>
    </article>
  );
}
