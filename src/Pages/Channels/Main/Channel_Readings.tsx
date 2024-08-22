
import Gallery_BigCards from "../../../Components/Sections/Galleries/BigCards"
import PageSection from "../../../Components/Sections/PageSection"
import Section_SlidingCards from "../../../Components/Sections/SlidingCards"
import SiteInfo from "../../../SiteInfo"
import Template_Page from "../../_Templates/Template_Page"
import Posts from "../../Posts/_Posts"

const Channel_Readings: Template_Page = {
  info: {
    title: "閱讀",
    key: "nblib",
    title_display: (<>閱讀</>),
    brief: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent augue metus, volutpat sed interdum quis, rutrum vel odio. Cras velit nisl, facilisis condimentum velit at, laoreet porttitor turpis. Integer luctus consequat sem vitae imperdiet.",
    label: `${SiteInfo.title}`,
    latest_update: SiteInfo.latest_update,
  },
  content: (<>

    <Section_SlidingCards cards={[
      Posts.Post_29,
      Posts.Post_28,
      Posts.Post_30,
      Posts.Post_33,
    ]} />

    <PageSection
      title={"藏書故事"}
      brief={"Lorem ipsum dolor sit amet, consectetur adipiscing elit"}
    >
      <Gallery_BigCards posts={[
        Posts.Post_68,
        Posts.Post_69,
        Posts.Post_70,
      ]} />
    </PageSection>

  </>)
}

export default Channel_Readings