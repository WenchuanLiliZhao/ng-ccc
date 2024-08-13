import SiteInfo from "../../../SiteInfo";
import Channel from "../../_Templates/Channel";

const Channel_Home: Channel = {
  info: {
    title: "首頁",
    key: "",
    brief: `${SiteInfo.brief}`,
    title_display: (<>{SiteInfo.title}</>)
  },
  
  content: (<>
    啊哈哈哈哈哈哈哈
  </>)
}

export default Channel_Home