import Gallery_MediumCards from "../../../Components/Sections/Galleries/MediumCards";
import PageSection from "../../../Components/Sections/PageSection";
import SiteInfo from "../../../SiteInfo";
import Template_Page from "../../_Templates/Template_Page";
import Posts from "../../Posts/_Posts";

const Channel_Resource: Template_Page = {
  info: {
    title: "學科資源",
    key: "resource",
    brief: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque semper pulvinar sagittis. Sed eleifend malesuada tempor. Donec eu erat purus. Duis imperdiet augue nec commodo porta. Maecenas volutpat nulla non est laoreet tempus. Suspendisse ac vestibulum tortor. Sed bibendum leo quam, sit amet consectetur orci elementum sit amet. Nulla non ex rutrum, congue ligula et, maximus odio. Duis scelerisque est vitae quam tempor, non dignissim libero maximus.",
    label: SiteInfo.title,
    front: undefined,
    showHeader: undefined,
    latest_update: SiteInfo.latest_update,
  },
  content: (<>
    <PageSection title={""} brief={""}>
      <Gallery_MediumCards columnCount={3} posts={[
        Posts.Post_54,
        Posts.Post_63,
        Posts.Post_64,
        Posts.Post_65,
        Posts.Post_66,
      ]} />
    </PageSection>
  </>)
}

export default Channel_Resource