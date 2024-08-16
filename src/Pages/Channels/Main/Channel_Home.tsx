import Gallery_BigCards from "../../../Components/Sections/Galleries/BigCards";
import Gallery_MediumCards from "../../../Components/Sections/Galleries/MediumCards";
import Section_NewsClipping from "../../../Components/Sections/NewsClipping";
import Section_SlidingCards from "../../../Components/Sections/SlidingCards";
import TitledSection from "../../../Components/Sections/TitledSection";
import SiteInfo from "../../../SiteInfo";
import Template_Page from "../../_Templates/Page";
import Posts from "../../Posts/_Posts";

const Channel_Home: Template_Page = {
  info: {
    title: "首頁",
    key: "",
    brief: `${SiteInfo.brief}`,
    title_display: <>{SiteInfo.logo.text}</>,
    label: `聯合電子出版`,
    latest_update: SiteInfo.latest_update,
    front: (
      <Section_NewsClipping className="only-show-above-screen-size-1000" />
    ),
  },

  content: (
    <>
      <Section_SlidingCards
        cards={[
          Posts.Post_WhereDidItComeFrom,
          Posts.Post_MoonFestival,
          Posts.Post_WhereDidItComeFrom,
          Posts.Post_WhereDidItComeFrom,
        ]}
      />

      <TitledSection
        title={"最新動態"}
        brief={"Lorem ipsum dolor sit amet, consectetur adipiscing elit"}
        body={
          <>
            <Gallery_MediumCards
              columnCount={3}
              posts={[
                Posts.Post_WhereDidItComeFrom,
                Posts.Post_MoonFestival,
                Posts.Post_WhereDidItComeFrom,
                // Posts.Post_WhereDidItComeFrom,
              ]}
            />
          </>
        }
      />

      <TitledSection
        title={"Latest Updates"}
        brief={"Lorem ipsum dolor sit amet, consectetur adipiscing elit"}
        body={
          <Gallery_BigCards posts={[
            Posts.Post_WhereDidItComeFrom,
              Posts.Post_MoonFestival,
              Posts.Post_WhereDidItComeFrom,
          ]} />
        }
      />

      <Section_NewsClipping className="only-show-below-screen-size-1000" />
    </>
  ),
};

export default Channel_Home;
