import "./Channel_News.scss";

/* eslint-disable @typescript-eslint/no-explicit-any */
import DateFormatter from "../../../Components/Functions/DateFormatter";
import SiteInfo from "../../../SiteInfo";
import Sec from "../../_Templates/Layouts/InArticle/_ArticleSection";
import Template_Page from "../../_Templates/Template_Page";
import AllNews from "../../News/AllNews";
import ContactCallout from "../../../Components/Callouts/ContactCallout";

const Channel_News: Template_Page = {
  info: {
    title: "媒體報導",
    key: "news",
    brief: "",
    latest_update: SiteInfo.latest_update,
    cover: undefined,
    label: SiteInfo.title,
    front: undefined,
    showHeader: undefined,
    title_display: <>媒體報導</>,
    authors: undefined,
    tags: undefined,
  },
  content: (
    <>
      <Sec>
        <div className="all-news-list">
          {Object.values(AllNews).map((item: any, i: any) => (
            <a href={item.info.key} key={`${item}${i}`} className="news">
              <div className="cover">
                <img src={item.info.cover} alt="" />
              </div>
              <div className="info">
                <div className="title">{item.info.title}</div>

                <div className="brief">{item.info.brief}</div>

                <div className="author">
                  <span className="publication">{item.info.publication}</span>
                  <span className="date">
                    {" "}
                    · <DateFormatter date={item.info.date} language={"zh"} />
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        <ContactCallout />
      </Sec>
    </>
  ),
};

export default Channel_News;
