import InArticleCard from "../../../Components/Cards/InArticleCard";
import Sec from "../../_Templates/Layouts/InArticle/_ArticleSection";
import YouTubeVideo from "../../_Templates/Layouts/InArticle/YouTubeVideo";
import Template_Page from "../../_Templates/Template_Page";
import Author_Suep from "../../Authors/Author_Suep";
import Post_17 from "./Post_17";

const Post_8: Template_Page = {
  info: {
    title: "為什麼選擇「中華文化有意思」",
    key: "post_8",
    cover:
      "https://i.pinimg.com/originals/72/b8/69/72b8697bc9df7f2ab06de3ed6373e153.jpg",
    latest_update: [2024, 9, 1],
    brief:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent augue metus, volutpat sed interdum quis, rutrum vel odio.",
    authors: [
      {
        data: Author_Suep,
      },
    ],
  },
  content: (
    <>
      <Sec size="full">
        <YouTubeVideo v={"ISAoCbV_rFo"} />
      </Sec>

      <Sec>
        <h2>「中華文化有意思」——以數字科技之力助推中華文化學習</h2>
        <p>「中華文化有意思」是一個以數字科技之力向全球傳播中華文化的文化品牌。順應Web3.0時代傳播新特征，通過電子書、有聲書、視頻、AR、VR、MR、文創等多種形態展現中華文化的美好和趣味，激發青少年帶著驚歎與樂趣學習了解中華文化的豐富內涵。從經典詩詞，到唐宋漢服；從書畫藝術，到非遺手工；從器物雅玩，到草木魚蟲，我們用技術展現中華文化有意思的一面，由有意思而有內涵，由有內涵而致久遠。</p>
      </Sec>

      <Sec>
        <h2>中華文化日｜推廣中華文化體驗活動</h2>
        <p>中華文化源遠流長，蘊含著中華民族幾千年的智慧和精神追求。它既是我們發展的優勢，也是維繫國家、民族團結的重要根基。讓學生認識、了解和傳承中華文化，是學校教育和社會培育的重要責任。如何打造寓教於樂又兼具創新元素的「中華文化體驗活動」？</p>

        <InArticleCard data={Post_17} />
      </Sec>
    </>
  ),
};

export default Post_8;
