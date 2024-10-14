import ContactCallout from "../../../Components/Callouts/ContactCallout";
import Redirect from "../../../Components/Links/Redirect";
import Template_Page from "../../_Templates/Template_Page";
import Author_Suep from "../../Authors/Author_Suep";

const Post_98: Template_Page = {
  info: {
    title: "正向教育",
    key: "post_98",
    cover:
      "https://i.pinimg.com/originals/1f/a9/5b/1fa95bf1afe2dd5968b43d94b7be095c.jpg",
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
      <Redirect link={"https://docs.google.com/spreadsheets/d/1zPRWMpWw35uR2ou1Ju7s8UaRwMBwu0rC79yjBUEuGas/edit?gid=1245394249#gid=1245394249"} />

      <ContactCallout />
    </>
  ),
};

export default Post_98;
