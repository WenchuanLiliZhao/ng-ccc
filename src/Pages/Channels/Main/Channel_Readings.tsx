
import SiteInfo from "../../../SiteInfo"
import Template_Page from "../../_Templates/Template_Page"

const Channel_Readings: Template_Page = {
  info: {
    title: "閱讀",
    key: "nblib",
    title_display: (<>閱讀</>),
    brief: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent augue metus, volutpat sed interdum quis, rutrum vel odio. Cras velit nisl, facilisis condimentum velit at, laoreet porttitor turpis. Integer luctus consequat sem vitae imperdiet.",
    label: `${SiteInfo.title}`,
    latest_update: SiteInfo.latest_update,
  },
  content: (<></>)
}

export default Channel_Readings