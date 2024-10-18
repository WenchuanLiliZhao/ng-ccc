import Redirect from "../../../Components/Links/Redirect";
import Template_Page from "../../_Templates/Template_Page";
import Authors from "../../Authors/_Authors";

const Post_65: Template_Page = {
  info: {
    title: "STEM",
    key: "post_65",
    brief: "知書閱聽圖書館歷年「總編輯薦書」暨2024學年「學科好書」推薦書單",
    latest_update: [2024, 8, 22],
    cover: "https://i.pinimg.com/originals/1d/2c/e4/1d2ce48d0d0005ac96784f0c91385226.jpg",
    label: undefined,
    front: undefined,
    showHeader: undefined,
    title_display: undefined,
    authors: [
      {
        data: Authors.Author_Suep
      }
    ],
    keywords: undefined
  },
  content: (<>
  <Redirect link={"https://docs.google.com/spreadsheets/d/1zPRWMpWw35uR2ou1Ju7s8UaRwMBwu0rC79yjBUEuGas/edit?gid=492263166#gid=492263166"} /></>)
}

export default Post_65