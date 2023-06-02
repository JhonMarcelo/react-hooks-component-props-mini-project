import React from "react";
import Article from "./Article";

function ArticleList({ posts }) {
  const postsList = posts.map((postInfo) => (
    <Article
      key={postInfo.id}
      title={postInfo.title}
      date={postInfo.date}
      preview={postInfo.preview}
      minutes={postInfo.minutes}
    />
  ));
  return <main>{postsList}</main>;
}

export default ArticleList;
