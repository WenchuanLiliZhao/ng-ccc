import Gallery_BigCards from "../../../Components/Sections/Galleries/BigCards";
import Gallery_MediumCards from "../../../Components/Sections/Galleries/MediumCards";
import PageSection from "../../../Components/Sections/PageSection";
import Section_SlidingCards from "../../../Components/Sections/SlidingCards";
import SiteInfo from "../../../SiteInfo";
import Template_Page from "../../_Templates/Template_Page";
import Posts from "../../Posts/_Posts";

const Channel_Resource: Template_Page = {
  info: {
    title: "學科資源",
    key: "resource",
    brief:
      "為您帶來更多豐富有趣的內容。敬請期待更多的驚喜！我們正在為您精心準備，確保每一個細節都完美無瑕。請隨時關注我們的最新消息，並不要忘記訂閱我們的通知，第一時間了解頻道的上線信息",
    // label: `${SiteInfo.title}`,
    label: "Coming Soon",
    front: undefined,
    showHeader: undefined,
    latest_update: SiteInfo.latest_update,
  },
  content: (
    <>
      <Section_SlidingCards
        cards={[Posts.Post_96, Posts.Post_97, Posts.Post_99]}
      />

      <PageSection
        title={""}
        brief={"即將舉行的精彩活動，帶你體驗不一樣的文化魅力"}
      >
        <Gallery_BigCards
          posts={[
            // Posts.Post_14,
            // Posts.Post_15,
            Posts.Post_54,
            Posts.Post_66,
            Posts.Post_63,
            Posts.Post_101,
          ]}
        />
      </PageSection>

      <PageSection
        title=""
        brief="探索中華文化的奇趣魅力，開啟一段全新旅程"
      >
        <Gallery_MediumCards
          columnCount={4}
          posts={[Posts.Post_100, Posts.Post_98, Posts.Post_65, Posts.Post_64]}
        />
      </PageSection>
    </>
  ),
};

export default Channel_Resource;
