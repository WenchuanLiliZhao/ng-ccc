import Sec from "../../_Templates/Layouts/InArticle/_ArticleSection";
import Fig from "../../_Templates/Layouts/InArticle/Fig";
import Template_Page from "../../_Templates/Template_Page";
import Authors from "../../Authors/_Authors";

const Post_7: Template_Page = {
  info: {
    title: "科技創新向未來",
    key: "post_7",
    brief:
      "通過一系列展示和互動體驗，親身感受國家在高科技領域取得的驕人成就，建立對國家實力的客觀認知。了解科技創新對未來發展的重要意義，培養他們的家國情懷和民族自豪感。",
    latest_update: [2024, 9, 1],
    cover:
      "https://i.pinimg.com/originals/7c/d9/bd/7cd9bd17c46c8c87b726ed7a578180ee.jpg",
    label: undefined,
    front: undefined,
    showHeader: undefined,
    title_display: undefined,
    authors: [
      {
        data: Authors.Author_Suep,
      },
    ],
    tags: undefined,
  },
  content: (
    <>
      <Sec>
        <p>「國家高科技發展成就」主題展：9月2日至12月31日（即日起接受預訂）</p>

        <p>
          通過一系列展示和互動體驗，親身感受國家在高科技領域取得的驕人成就，建立對國家實力的客觀認知。了解科技創新對未來發展的重要意義，培養他們的家國情懷和民族自豪感。
        </p>
      </Sec>

      <Sec>
        <Fig
          art={
            <>
              <img
                src="https://file.notion.so/f/f/af83eaeb-cb25-4274-875a-4a0e39b7bf16/1aaba4f0-d567-439e-aee0-06788fdf93de/image.png?table=block&id=3cf75738-6071-4fe6-9fe2-5edc75371ffc&spaceId=af83eaeb-cb25-4274-875a-4a0e39b7bf16&expirationTimestamp=1724140800000&signature=aY4rPAeCMx9jUDADp3hzZXkpahozt7DODoZ6_XtcXVM&downloadName=image.png"
                alt=""
              />
            </>
          }
        />
      </Sec>
    </>
  ),
};

export default Post_7;
