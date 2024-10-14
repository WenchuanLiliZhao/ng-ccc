import ContactCallout from "../../../Components/Callouts/ContactCallout";
import Redirect from "../../../Components/Links/Redirect";
import Template_Page from "../../_Templates/Template_Page";
import Author_Suep from "../../Authors/Author_Suep";

const Post_99: Template_Page = {
  info: {
    title: "香港文化",
    key: "post_99",
    cover:
      "https://i.pinimg.com/originals/04/89/1b/04891b6059cc005c042c2eed80063073.jpg",
    latest_update: [2024, 10, 14],
    brief:
      "探索香港文化的閱讀材料時，建議從多角度來了解這個融合了東西方特色的都市。首先，可以閱讀介紹香港歷史的書籍，從港口開埠到回歸中國，多樣的歷史事件形成了今日的香港。此外，關於香港人生活方式和社會風俗的著作，也是不錯的選擇，透過這些作品可以洞察到當地人的日常習慣及其獨特的生活態度。",
    authors: [
      {
        data: Author_Suep,
      },
    ],
  },
  content: (
    <>
      <Redirect link={"https://docs.google.com/spreadsheets/d/1zPRWMpWw35uR2ou1Ju7s8UaRwMBwu0rC79yjBUEuGas/edit?gid=576910127#gid=576910127"} />

      <ContactCallout />
    </>
  ),
};

export default Post_99;
