import SiteInfo from "../../../SiteInfo";
import Page from "../../_Templates/Page";

const NotFound: Page = {
  info: {
    title: "404 Not Found",
    key: "*",
    title_display: (<>404 Not Found</>),
    brief: "",
    latest_update: SiteInfo.latest_update,
  },
  content: (<>404 hahhahahh</>)
}

export default NotFound