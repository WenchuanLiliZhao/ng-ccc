import Gallery_BigCards from "../../../Components/Sections/Galleries/BigCards";
import Gallery_MediumCards from "../../../Components/Sections/Galleries/MediumCards";
import Section_NewsClipping from "../../../Components/Sections/NewsClipping";
import Section_SlidingCards from "../../../Components/Sections/SlidingCards";
import PageSection from "../../../Components/Sections/PageSection";
import SiteInfo from "../../../SiteInfo";
import Template_Page from "../../_Templates/Template_Page";
import Posts from "../../Posts/_Posts";
import Gallery_Quotes from "../../../Components/Sections/Galleries/Quotes";

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

      <PageSection
        title="最新動態"
        brief="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      >
        <Gallery_MediumCards
          columnCount={3}
          posts={[
            Posts.Post_WhereDidItComeFrom,
            Posts.Post_MoonFestival,
            Posts.Post_WhereDidItComeFrom,
            // Posts.Post_WhereDidItComeFrom,
          ]}
        />
      </PageSection>

      <PageSection title={""} brief={""}>
        <Gallery_BigCards
          posts={[
            Posts.Post_WhereDidItComeFrom,
            Posts.Post_MoonFestival,
            Posts.Post_WhereDidItComeFrom,
          ]}
        />
      </PageSection>

      <PageSection
        title={""}
        brief={""}
        children={
          <Gallery_Quotes quotes={[
            {
              sentence: "學校應運用好豐富的教育資源，開展多樣化的活動，讓學生認識、體驗和傳承中華文化，這是學校教育的重要一環。「中華文化有意思」用科技手段推廣中華文化，方法適時而多樣。",
              from: "香港教育局中小學中國語文課程專責委員會主席 招祥麒博士"
            },

            {
              sentence: "學校要善用科技發展成果，鼓勵學生在跨學科協作的情境下循序漸進地獲得中華文化的浸潤。",
              from: "香港學校圖書館主任協會會長 黃毅娟女士"
            },

            {
              sentence: "「中華文化有意思」為可銘學校策劃的「雲遊長城——元宇宙體驗展」閱讀周活動效果很好，是一次科技與傳統文化深度融合的有效嘗試。",
              from: "香港創意閱讀教育協會會長 董雅詩女士"
            },
          ]} />
        }
        />

      <PageSection
        title={"最新動態"}
        brief={"Lorem ipsum dolor sit amet, consectetur adipiscing elit"}
        children={
          <>
            <Gallery_MediumCards
              columnCount={4}
              posts={[
                Posts.Post_WhereDidItComeFrom,
                Posts.Post_MoonFestival,
                Posts.Post_WhereDidItComeFrom,
                Posts.Post_WhereDidItComeFrom,
              ]}
            />
          </>
        }
      />

      

      <Section_NewsClipping className="only-show-below-screen-size-1000" />
    </>
  ),
};

export default Channel_Home;
