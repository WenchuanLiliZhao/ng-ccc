import Gallery_MediumCards from "../../../Components/Sections/Galleries/MediumCards";
import PageSection from "../../../Components/Sections/PageSection";
import Section_SlidingCards from "../../../Components/Sections/SlidingCards";
import SiteInfo from "../../../SiteInfo";
import Template_Page from "../../_Templates/Template_Page";
import Posts from "../../Posts/_Posts";

const Channel_Activity: Template_Page = {
  info: {
    title: "活動",
    key: "activity",
    title_display: <>活動</>,
    brief:
      "我們將為您帶來更多豐富有趣的內容。請隨時關注我們的最新消息，第一時間了解頻道的上線信息",
    label: `${SiteInfo.title}`,
    latest_update: SiteInfo.latest_update,
  },

  content: (
    <>
      <Section_SlidingCards
        cards={[Posts.Post_6, Posts.Post_76, Posts.Post_78]}
      />

      <PageSection
        title="近期活動"
        brief="探索中華文化的奇趣魅力，開啟一段全新旅程"
      >
        <Gallery_MediumCards
          columnCount={3}
          posts={[Posts.Post_80]}
        />
      </PageSection>
    </>
  ),
};

export default Channel_Activity;
