import ContactCallout from "../../../Components/Callouts/ContactCallout";
import Redirect from "../../../Components/Links/Redirect";
import Template_Page from "../../_Templates/Template_Page";
import Author_Suep from "../../Authors/Author_Suep";

const Post_96: Template_Page = {
  info: {
    title: "英文科",
    key: "post_96",
    cover:
      "https://i.pinimg.com/originals/7c/e5/a0/7ce5a08fbcc87a880688825cbe066570.jpg",
    latest_update: [2024, 10, 14],
    brief:
      "英文科作為一種提升英語能力的關鍵途徑，具有多重價值和意義。首先，它不僅能拓寬讀者的詞彙量，還能幫助理解語法結構和句子組織方式，從而提高整體語言水平。通過接觸各種題材的文章，如小說、新聞報導、科技文獻等，讀者可以更好地掌握地道的表達方式和文化背景。",
    authors: [
      {
        data: Author_Suep,
      },
    ],
  },
  content: (
    <>
      <Redirect link={"https://docs.google.com/spreadsheets/d/1zPRWMpWw35uR2ou1Ju7s8UaRwMBwu0rC79yjBUEuGas/edit?gid=2062729737#gid=2062729737"} />

      <ContactCallout />
    </>
  ),
};

export default Post_96;
