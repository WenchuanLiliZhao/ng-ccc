import ContactCallout from "../../../Components/Callouts/ContactCallout";
import Redirect from "../../../Components/Links/Redirect";
import Template_Page from "../../_Templates/Template_Page";
import Author_Suep from "../../Authors/Author_Suep";

const Post_100: Template_Page = {
  info: {
    title: "國情教育",
    key: "post_100",
    cover:
      "https://i.pinimg.com/originals/66/82/f2/6682f2c20b820cfbed9dbc3c7d6a5977.jpg",
    latest_update: [2024, 10, 14],
    brief:
      "知書閱聽圖書館歷年「總編輯薦書」暨2024學年「學科好書」推薦書單",
    authors: [
      {
        data: Author_Suep,
      },
    ],
  },
  content: (
    <>
      <Redirect link={"https://docs.google.com/spreadsheets/d/1zPRWMpWw35uR2ou1Ju7s8UaRwMBwu0rC79yjBUEuGas/edit?gid=454212849#gid=454212849"} />

      <ContactCallout />
    </>
  ),
};

export default Post_100;
