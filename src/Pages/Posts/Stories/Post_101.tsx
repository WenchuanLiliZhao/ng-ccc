import ContactCallout from "../../../Components/Callouts/ContactCallout";
import Redirect from "../../../Components/Links/Redirect";
import Template_Page from "../../_Templates/Template_Page";
import Author_Suep from "../../Authors/Author_Suep";

const Post_101: Template_Page = {
  info: {
    title: "趣味閱讀",
    key: "post_101",
    cover:
      "https://i.pinimg.com/originals/fb/29/47/fb29471fc136b49a198b9c990cbbc624.jpg",
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
      <Redirect link={"https://docs.google.com/spreadsheets/d/1zPRWMpWw35uR2ou1Ju7s8UaRwMBwu0rC79yjBUEuGas/edit?gid=1770265243#gid=1770265243"} />

      <ContactCallout />
    </>
  ),
};

export default Post_101;
