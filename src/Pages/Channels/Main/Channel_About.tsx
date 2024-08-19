import SiteInfo from "../../../SiteInfo"
import Template_Page from "../../_Templates/Template_Page"

const Channel_About: Template_Page = {
  info: {
    title: "關於",
    key: "contact",
    title_display: (<>關於「中華文化有意思」和我們</>),
    brief: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent augue metus, volutpat sed interdum quis, rutrum vel odio. Cras velit nisl, facilisis condimentum velit at, laoreet porttitor turpis. Integer luctus consequat sem vitae imperdiet.",
    label: `${SiteInfo.title}`,
    latest_update: SiteInfo.latest_update,
  },
  content: (<>
    
  </>)
}

export default Channel_About