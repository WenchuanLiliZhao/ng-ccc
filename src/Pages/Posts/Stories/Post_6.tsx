import Sec from "../../_Templates/Layouts/InArticle/_ArticleSection";
import Fig from "../../_Templates/Layouts/InArticle/Fig";
import Template_Page from "../../_Templates/Template_Page";
import Authors from "../../Authors/_Authors";

const Post_6: Template_Page = {
  info: {
    title: "國寶大熊貓的故事",
    key: "post_6",
    brief: "大熊貓是中國的國寶，也是國家對外交流的重要媒介。通過沉浸式體驗增進學生對國寶及瀕危動物的認知和了解，激發他們對生態保護和文化認同的興趣，感受熊貓作為中華文化象徵的獨特意義。",
    latest_update: [2024,9,1],
    cover: "https://i.pinimg.com/originals/56/e9/9b/56e99bd7e04c20a280cd1c926f0d8161.jpg",
    label: undefined,
    front: undefined,
    showHeader: undefined,
    title_display: undefined,
    authors: [
      {
        data: Authors.Author_Suep
      }
    ],
    tags: undefined
  },
  content: (<>
    <Sec>
      <p>「認識我們的國家」主題展：9月2日至12月31日（即日起接受預訂）</p>
      <p>大熊貓是中國的國寶，也是國家對外交流的重要媒介。通過沉浸式體驗增進學生對國寶及瀕危動物的認知和了解，激發他們對生態保護和文化認同的興趣，感受熊貓作為中華文化象徵的獨特意義。</p>
    </Sec>

    <Sec>
      <Fig art={<>
          <img src="https://file.notion.so/f/f/af83eaeb-cb25-4274-875a-4a0e39b7bf16/95df1993-dd32-41c3-854d-b9729fa34553/image.png?table=block&id=15c56ad4-7b5a-4c52-aa29-3db1248ec8b1&spaceId=af83eaeb-cb25-4274-875a-4a0e39b7bf16&expirationTimestamp=1724140800000&signature=dMD90f6vnLcQkInNw5H1GZo1aK6nVzygGG3rsNPnEn0&downloadName=image.png" alt="" />
        </>} />
    </Sec>
  </>)
}

export default Post_6