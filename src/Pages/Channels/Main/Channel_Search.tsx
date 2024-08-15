import SiteInfo from "../../../SiteInfo";
import Channel from "../../_Templates/Channel";

const Channel_Search: Channel = {
  info: {
    title: "搜索",
    key: "search",
    title_display: (<>站內搜索</>),
    brief: "",
    label: `${SiteInfo.title}`
  },
  content: (<></>)
}

export default Channel_Search