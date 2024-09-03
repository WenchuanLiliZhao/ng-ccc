import Para from "../../../Components/Markdown/MD";
import SiteInfo from "../../../SiteInfo";
import Sec from "../../_Templates/Layouts/InArticle/_ArticleSection";
import Template_Page from "../../_Templates/Template_Page";


const content = `
1. $u$ sss

$$
\\displaystyle
\\begin{aligned}
s &= s \\\\
&= s \\\\
x \\in A
\\end{aligned}
$$
`


const Channel_About: Template_Page = {
  info: {
    title: "關於",
    key: "contact",
    title_display: <>關於「中華文化有意思」和我們</>,
    brief:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent augue metus, volutpat sed interdum quis, rutrum vel odio. Cras velit nisl, facilisis condimentum velit at, laoreet porttitor turpis. Integer luctus consequat sem vitae imperdiet.",
    label: `${SiteInfo.title}`,
    latest_update: SiteInfo.latest_update,
  },
  content: (
    <>
      <Sec>
        <Para align="center">
          sss $x^2$ *A* $A$ **A**
        </Para>

        <Para>
          {content}
        </Para>
      </Sec>
    </>
  ),
};

export default Channel_About;
