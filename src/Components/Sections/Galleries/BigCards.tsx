import "./BigCards.scss"

import React from "react";
import Post from "../../../Pages/_Templates/Posts";
import DateFormatter from "../../Functions/DateFormatter";
import Divider_Wave from "../../Divider/Wave";

interface Props {
  posts: Post[];
}

const Gallery_BigCards: React.FC<Props> = ({ posts }) => {
  return (
    <div className="gallery-big-cards">
      <div className="container">
        {posts.map((item: Post, i: number) => (
          <a key={`${item}${i}`} href={`/${item.info.key}`} className={`card`}>
            <div className="cover">
              <div className="container">
                <img src={item.info.cover} alt={`cover of ${item.info.title}`} />
              </div>
            </div>
            <div className="info">
              <div className="container">
                <div className="label">{item.info.authors[0].author.info.title}</div>
                <div className="title">{item.info.title}</div>
                <div className="brief">{item.info.brief}</div>
                <div className="caption">
                  <span>
                    <DateFormatter date={item.info.latest_update} language={"zh"} />
                  </span>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
      <Divider_Wave />
    </div>
  );
};

export default Gallery_BigCards;
