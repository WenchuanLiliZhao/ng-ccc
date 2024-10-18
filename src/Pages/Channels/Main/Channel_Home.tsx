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
    title_display: <>{SiteInfo.title}</>,
    label: `聯合電子出版`,
    latest_update: SiteInfo.latest_update,
    front: (
      <Section_NewsClipping className="only-show-above-screen-size-1000" />
    ),

    keywords: ["中華文化有意思", "聯合出版集團", "聯合電子出版", "中華文化", "非遺", "元宇宙", "AR", "VR", "MR", "AI", "科技", "文化傳播", "傳統文化", "沉浸式體驗", "絲綢之路", "紅樓夢", "樂舞敦煌", "中國紋樣", "大熊貓", "NFT", "中秋節", "三星堆", "長城", "香港閱讀+", "香港書展", "可銘學校", "雲遊長城", "閱讀", "教育", "文化體驗", "數字藏品", "AIGC", "生成式人工智能", "生態環境", "書展", "電子書", "角色扮演", "手工課", "文化符號"]
  },

  content: (
    <>
      <Section_SlidingCards
        cards={[Posts.Post_59, Posts.Post_3, Posts.Post_29, Posts.Post_41]}
      />

      <PageSection
        title="最新動態"
        brief="探索中華文化的奇趣魅力，開啟一段全新旅程"
      >
        <Gallery_MediumCards
          columnCount={3}
          posts={[
            Posts.Post_76,
            Posts.Post_5,
            Posts.Post_71,
          ]}
        />
      </PageSection>

      <PageSection
        title={"活動預告"}
        brief={"即將舉行的精彩活動，帶你體驗不一樣的文化魅力"}>
        <Gallery_BigCards
          posts={[
            // Posts.Post_14,
            // Posts.Post_15,
            Posts.Post_6,
            Posts.Post_56,
            Posts.Post_59,
            Posts.Post_58,
          ]}
        />
      </PageSection>

      <PageSection
        title={"精華案例"}
        brief={"帶你深入了解中華文化的經典故事"}
      >
        <Gallery_MediumCards
          columnCount={4}
          posts={[Posts.Post_10, Posts.Post_11, Posts.Post_12, Posts.Post_13]}
        />
      </PageSection>

      <PageSection
        title={"精選評論"}
        brief={"洞悉大家對「中華文化有意思」的獨特見解"}
        children={
          <Gallery_Quotes
            quotes={[
              {
                sentence:
                  "學校應運用好豐富的教育資源，開展多樣化的活動，讓學生認識、體驗和傳承中華文化，這是學校教育的重要一環。「中華文化有意思」用科技手段推廣中華文化，方法適時而多樣。",
                from: "香港教育局中小學中國語文課程專責委員會主席 招祥麒博士",
              },

              {
                sentence:
                  "學校要善用科技發展成果，鼓勵學生在跨學科協作的情境下循序漸進地獲得中華文化的浸潤。",
                from: "香港學校圖書館主任協會會長 黃毅娟女士",
              },

              {
                sentence:
                  "「中華文化有意思」為可銘學校策劃的「雲遊長城——元宇宙體驗展」閱讀周活動效果很好，是一次科技與傳統文化深度融合的有效嘗試。",
                from: "香港創意閱讀教育協會會長 董雅詩女士",
              },
            ]}
          />
        }
      />

      {/* <PageSection
        title={"政策津貼"}
        brief={"Lorem ipsum dolor sit amet, consectetur adipiscing elit"}
        children={
          <>
            <Gallery_MediumCards
              columnCount={3}
              posts={[Posts.Post_49, Posts.Post_50, Posts.Post_51]}
            />
          </>
        }
      /> */}

      

      <Section_NewsClipping className="only-show-below-screen-size-1000" />
    </>
  ),
};

export default Channel_Home;
