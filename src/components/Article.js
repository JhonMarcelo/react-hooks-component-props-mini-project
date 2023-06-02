import React from "react";
import { minutesToRead } from "../utility";

const Article = ({ date = "January 1, 1970", minutes, preview, title }) => {
  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      {minutesToRead(minutes)}
      <p>{preview}</p>
    </article>
  );
};

export default Article;
