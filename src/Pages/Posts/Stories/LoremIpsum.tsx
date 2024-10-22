import Sec from "../../_Templates/Layouts/InArticle/_ArticleSection";
import Template_Page from "../../_Templates/Template_Page";
import Author_Suep from "../../Authors/Author_Suep";

const LoremIpsum: Template_Page = {
  info: {
    title: "Lorem Ipsum",
    key: "Lorem Ipsum",
    cover:
      "https://i.pinimg.com/1200x/32/f5/ad/32f5ad100f4298e08fd54aa09c6e049a.jpg",
    latest_update: [2024, 9, 3],
    brief:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut cursus lectus porttitor, semper mauris sed, finibus ante. Nulla facilisi. Vivamus nisl eros, commodo fermentum scelerisque nec, condimentum ac ex. Mauris facilisis nunc vel odio tristique, et ornare dui pharetra. Proin non odio libero. Fusce ipsum neque, imperdiet id orci vel, accumsan mattis justo. Aliquam et vestibulum neque, id vestibulum ipsum.",
    authors: [
      {
        data: Author_Suep,
        role: "author",
      },
    ],

    keywords: ["Lorem", "Proin", "Fusce"]
  },
  content: (
    <>
      <Sec>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut cursus lectus porttitor, semper mauris sed, finibus ante. Nulla facilisi. Vivamus nisl eros, commodo fermentum scelerisque nec, condimentum ac ex. Mauris facilisis nunc vel odio tristique, et ornare dui pharetra. Proin non odio libero. Fusce ipsum neque, imperdiet id orci vel, accumsan mattis justo. Aliquam et vestibulum neque, id vestibulum ipsum.</p>

        <p>Integer vitae tortor vel metus lacinia dignissim in eu velit. Proin nibh ipsum, finibus nec vehicula ac, pellentesque in ipsum. Etiam lorem leo, sodales in turpis vitae, pretium gravida neque. Phasellus eget tortor sit amet dolor efficitur convallis. Aliquam commodo suscipit ultrices. Nunc a odio in augue maximus fermentum vel non purus. Etiam feugiat est vel ullamcorper tincidunt. Nulla ante mauris, semper id ultrices ac, cursus vitae lectus. Aliquam sit amet malesuada est. Fusce vitae laoreet urna, nec mattis velit. Suspendisse eu leo diam. Nam porttitor ut turpis vel ultricies. Ut sed diam porta orci dapibus facilisis ut vel ipsum. Suspendisse id urna quis neque bibendum volutpat.</p>

        <p>Ut rutrum ac risus non sollicitudin. Morbi efficitur, mauris a pharetra vestibulum, ligula massa accumsan elit, id sagittis quam lectus eget magna. Donec pretium sodales fringilla. Aliquam imperdiet semper eros, in imperdiet felis blandit vitae. Fusce a lacinia risus. Mauris ut consequat velit, a dapibus ipsum. Curabitur et ullamcorper nulla. Praesent sed metus libero. Nulla ex massa, fermentum vitae hendrerit at, imperdiet sed arcu. Integer sem neque, porta nec volutpat ac, tincidunt eu urna. Suspendisse luctus ac mi sit amet imperdiet. Donec fermentum pulvinar odio non placerat.</p>
      </Sec>
    </>
  ),
};

export default LoremIpsum;
