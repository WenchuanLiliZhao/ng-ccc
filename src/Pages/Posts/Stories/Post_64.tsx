import Redirect from "../../../Components/Links/Redirect";
import Template_Page from "../../_Templates/Template_Page";
import Authors from "../../Authors/_Authors";

const Post_64: Template_Page = {
  info: {
    title: "公民科/公經社科/常識",
    key: "post_64",
    brief:
      "知書閱聽圖書館歷年「總編輯薦書」暨2024學年「學科好書」推薦書單",
    latest_update: [2024, 8, 22],
    cover:
      "https://i.pinimg.com/originals/29/a8/52/29a852bfea38318a5c75ff1fa948f026.jpg",
    label: undefined,
    front: undefined,
    showHeader: undefined,
    title_display: undefined,
    authors: [
      {
        data: Authors.Author_Suep,
      },
    ],
    keywords: undefined,
  },
  content: (
    <>
      <Redirect
        link={
          "https://docs.google.com/spreadsheets/d/1zPRWMpWw35uR2ou1Ju7s8UaRwMBwu0rC79yjBUEuGas/edit?gid=43769874#gid=43769874"
        }
      />
    </>
  ),
};

export default Post_64;
