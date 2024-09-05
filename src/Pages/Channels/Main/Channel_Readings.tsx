import SiteInfo from "../../../SiteInfo";
import Sec from "../../_Templates/Layouts/InArticle/_ArticleSection";
import Fig from "../../_Templates/Layouts/InArticle/Fig";
import Template_Page from "../../_Templates/Template_Page";

const Channel_Readings: Template_Page = {
  info: {
    title: "閱讀",
    key: "nblib",
    title_display: <>閱讀</>,
    brief:
      "我們即將推出一個全新的精彩頻道，為您帶來更多豐富有趣的內容。敬請期待更多的驚喜！我們正在為您精心準備，確保每一個細節都完美無瑕。請隨時關注我們的最新消息，並不要忘記訂閱我們的通知，第一時間了解頻道的上線信息。謝謝您的耐心等待！",
    // label: `${SiteInfo.title}`,
    label: "Coming Soon",
    latest_update: SiteInfo.latest_update,
  },
  content: (
    <>
      <Sec>
        <Fig
          art={
            <img
              src="https://i.pinimg.com/1200x/5f/29/6b/5f296bef392eda6e18415ae7c82d3216.jpg"
              alt=""
            />
          }
          caption={
            <>
              Photo by{" "}
              <a href="https://unsplash.com/@anniespratt?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
                Annie Spratt
              </a>{" "}
              on{" "}
              <a href="https://unsplash.com/photos/a-little-girl-laying-on-a-bed-with-lots-of-books-oOEz7c7V3gk?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
                Unsplash
              </a>
            </>
          }
        />
      </Sec>
    </>
  ),
};

export default Channel_Readings;
