import ContactCallout from "../../../Components/Callouts/ContactCallout";
import Sec from "../../_Templates/Layouts/InArticle/_ArticleSection";
import Fig from "../../_Templates/Layouts/InArticle/Fig";
import Template_Page from "../../_Templates/Template_Page";
import Author_Suep from "../../Authors/Author_Suep";

const Post_71: Template_Page = {
  info: {
    title: "中華文化有意思主題展廳開放週",
    key: "post_71",
    cover:
      "https://i.pinimg.com/1200x/2d/d4/d2/2dd4d2b9eec233860132a5ec082e22ce.jpg",
    latest_update: [2024, 9, 3],
    brief:
      "我們通過多元的學習方式，如電子書、角色扮演及非遺手工等，鼓勵年輕人感受中華文化的魅力。總之，真正欣賞中華文化需要深入探索與反思，並在其中尋找自我表達的方式。",
    authors: [
      {
        data: Author_Suep,
      },
    ],
  },
  content: (
    <>
      <Sec size="large">
        <Fig
          art={
            <>
              <img
                src="https://i.pinimg.com/1200x/2d/d4/d2/2dd4d2b9eec233860132a5ec082e22ce.jpg"
                alt=""
              />
            </>
          }
          caption={
            <p>
              Photo by{" "}
              <a href="https://unsplash.com/@gpenguin?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
                Gio Almonte
              </a>{" "}
              on{" "}
              <a href="https://unsplash.com/photos/white-and-brown-temple-under-white-sky-during-daytime-d1VHhofdTbk?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
                Unsplash
              </a>
            </p>
          }
        />
      </Sec>

      <Sec>
        <h2>四大主題內容</h2>

        <h3>傅统節日· 中秋</h3>

        <p>由傳統節慶學習中華文化 </p>

        <Fig
          art={
            <>
              <img
                src="https://i.pinimg.com/1200x/21/be/42/21be424afd22d3836218af91982da767.jpg"
                alt=""
              />
            </>
          }
          caption={
            <p>
              Photo by <a href="https://unsplash.com/@yylam">Yy Lam</a> on{" "}
              <a href="https://unsplash.com/">Unsplash</a>
            </p>
          }
        />
      </Sec>

      <Sec>
        <h3>國實大熊貓</h3>

        <p>動物科普、生態保護</p>

        <Fig
          art={
            <>
              <img
                src="https://i.pinimg.com/1200x/f1/ee/9f/f1ee9f22677285f35676a76bbe8fef81.jpg"
                alt=""
              />
            </>
          }
          caption={
            <p>
              Photo by{" "}
              <a href="https://unsplash.com/@millerthachiller">Pascal Müller</a>{" "}
              on <a href="https://unsplash.com/">Unsplash</a>
            </p>
          }
        />
      </Sec>

      <Sec>
        <h3>體育繪本</h3>

        <p>培養「閃光少年，般的正向品格」</p>

        <Fig
          art={
            <>
              <img
                src="https://i.pinimg.com/1200x/b2/3b/a8/b23ba855dcd3c51e57679c6850ac85d9.jpg"
                alt=""
              />
            </>
          }
        />
      </Sec>

      <Sec>
        <h3>國家高科技成就</h3>

        <p>知創新科技，識國家安全</p>

        <Fig
          art={
            <>
              <img
                src="https://i.pinimg.com/1200x/19/00/00/190000f92543de7e46831e7876bb0bbe.jpg"
                alt=""
              />
            </>
          }
        />

        <Fig
          art={
            <>
              <img
                src="https://i.pinimg.com/1200x/46/98/5a/46985a76c6412e1243308d477cbdd113.jpg"
                alt=""
              />
            </>
          }
        />
      </Sec>

      <Sec>
      <Fig
          art={
            <>
              <img
                src="https://i.pinimg.com/1200x/db/33/42/db33427dceb6b4ef365b48a6e24c09fd.jpg"
                alt=""
              />
            </>
          }
        />
      </Sec>


      <ContactCallout
        title="中華文化有意思主題展廳開放週"
        caption={
          <>
            <p>活動時間：9月2日至9月6日10:00-17:00</p>
            <p>地址：香港九龍長沙灣永康街77號環薈中心10樓1008 & 1016室</p>

            <p>
              誠邀您到現場參觀體驗，該展廳展出內容緊貼熱門主題，涵盖各個學科，用多元方法激發學生閱讀與學習興趣，助力老師輕鬆開展跨課程閱讀與跨學科學習。現場預定還有折扣優惠！
            </p>
          </>
        }
      />
    </>
  ),
};

export default Post_71;
