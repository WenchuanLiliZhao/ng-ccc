import Template_Page from "../_Templates/Template_Page";
import Post_FAQ from "./Others/Post_FAQ";
import Post_Privacy from "./Others/Post_Privacy";
import Post_TermsOfUse from "./Others/Post_TermsOfUse";
import Stories from "./Stories/_Stories";

const Posts: { [key: string]: Template_Page } = {
  ...Stories,

  // others
  Post_FAQ,
  Post_Privacy,
  Post_TermsOfUse,
};

export default Posts;
