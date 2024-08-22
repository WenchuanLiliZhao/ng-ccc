import Gallery_BigCards from "../../../Components/Sections/Galleries/BigCards";
import Gallery_MediumCards from "../../../Components/Sections/Galleries/MediumCards";
import PageSection from "../../../Components/Sections/PageSection";
import Section_SlidingCards from "../../../Components/Sections/SlidingCards";
import SiteInfo from "../../../SiteInfo";
import Template_Page from "../../_Templates/Template_Page";
import Posts from "../../Posts/_Posts";

const Channel_Activity: Template_Page = {
  info: {
    title: "活動",
    key: "service",
    title_display: <>活動</>,
    brief:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent augue metus, volutpat sed interdum quis, rutrum vel odio. Cras velit nisl, facilisis condimentum velit at, laoreet porttitor turpis. Integer luctus consequat sem vitae imperdiet.",
    label: `${SiteInfo.title}`,
    latest_update: SiteInfo.latest_update,
  },

  content: (
    <>
      <Section_SlidingCards
        cards={[Posts.Post_17, Posts.Post_25, Posts.Post_24, Posts.Post_6]}
      />

      <PageSection
        title={"元宇宙"}
        brief={"Lorem ipsum dolor sit amet, consectetur adipiscing elit"}
      >
        <Gallery_MediumCards
          columnCount={4}
          posts={[Posts.Post_11, Posts.Post_34, Posts.Post_35, Posts.Post_41]}
        />
      </PageSection>

      <PageSection
        title={"中華非遺手功課"}
        brief={"Lorem ipsum dolor sit amet, consectetur adipiscing elit"}
      >
        <Gallery_BigCards posts={[Posts.Post_60, Posts.Post_61]} />
      </PageSection>
    </>
  ),
};

export default Channel_Activity;
