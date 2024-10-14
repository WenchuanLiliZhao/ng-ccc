import ContactCallout from "../../../Components/Callouts/ContactCallout";
import Redirect from "../../../Components/Links/Redirect";
import Template_Page from "../../_Templates/Template_Page";
import Authors from "../../Authors/_Authors";

const Post_54: Template_Page = {
  info: {
    title: "中文科",
    key: "post_54",
    brief: "知書閱聽圖書館歷年「總編輯薦書」暨2024學年「學科好書」推薦書單",
    latest_update: [2024, 10, 12],
    cover: "https://images.unsplash.com/photo-1513781050488-6dd358209a1b?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", //https://unsplash.com/photos/red-tassel-rdVLN3UFmpU
    label: undefined,
    front: undefined,
    showHeader: undefined,
    title_display: undefined,
    authors: [
      {
        data: Authors.Author_Suep
      }
    ],
    tags: undefined
  },
  content: (<>
    <>
      <Redirect link={"https://docs.google.com/spreadsheets/d/1zPRWMpWw35uR2ou1Ju7s8UaRwMBwu0rC79yjBUEuGas/edit?gid=559635051#gid=559635051"} />

      <ContactCallout />
    </>
  </>)
}

export default Post_54