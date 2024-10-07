import Gallery_BigCards from "../../../Components/Sections/Galleries/BigCards";
import PageSection from "../../../Components/Sections/PageSection";
import SiteInfo from "../../../SiteInfo";
// import Sec from "../../_Templates/Layouts/InArticle/_ArticleSection";
// import Fig from "../../_Templates/Layouts/InArticle/Fig";
import Template_Page from "../../_Templates/Template_Page";
import Posts from "../../Posts/_Posts";

const Channel_Readings: Template_Page = {
  info: {
    title: "閱讀",
    key: "nblib",
    title_display: <>閱讀</>,
    brief:
      "「閱讀使人充實，會談使人敏捷，寫作與筆記使人精確。」",
    // label: `${SiteInfo.title}`,
    label: "Coming Soon",
    latest_update: SiteInfo.latest_update,
  },
  content: (
    <>
      <PageSection
        title={" "}
        brief={" "}
      >
        <Gallery_BigCards posts={[Posts.Post_84, Posts.Post_86]} />
      </PageSection>
      
    </>
  ),
};

export default Channel_Readings;
