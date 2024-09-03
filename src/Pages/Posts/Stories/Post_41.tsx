import ContactCallout from "../../../Components/Callouts/ContactCallout";
import InArticleCard from "../../../Components/Cards/InArticleCard";
import Sec from "../../_Templates/Layouts/InArticle/_ArticleSection";
import Fig from "../../_Templates/Layouts/InArticle/Fig";
import GridGallery from "../../_Templates/Layouts/InArticle/GridGallery";
import Template_Page from "../../_Templates/Template_Page";
import Author_Suep from "../../Authors/Author_Suep";
import Post_6 from "./Post_6";

const Post_41: Template_Page = {
  info: {
    title: "「沉浸式元宇宙體驗展」百間學校巡展計劃招募中",
    key: "post_41",
    cover:
      "https://i.pinimg.com/1200x/88/41/65/884165d996cd133a8e4766edeb22beab.jpg",
    latest_update: [2024, 9, 1],
    brief: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
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
            <img
              src="https://i.pinimg.com/1200x/88/41/65/884165d996cd133a8e4766edeb22beab.jpg"
              alt=""
            />
          }
          caption={
            <p>
              Photo by <a href="https://unsplash.com/@omilaev">Igor Omilaev</a>{" "}
              on <a href="https://unsplash.com/">Unsplash</a>
            </p>
          }
        />
      </Sec>

      <Sec>
        <p>
          「100間港澳中小學元宇宙巡展計劃」旨在將「文化」與「科技」深度融合，為學生提供更加多元的體驗式學習氛圍，特別適合跨學科學習、跨課程閱讀、創意閱讀等教育專題，可全面覆蓋中小學各學科課程展示、主題活動、開放日、嘉年華等活動，深受學校和師生歡迎。揭秘核心區域的「超能裝備」，如何通過科技賦能，讓閱讀變得更立體、豐富、有樂趣。
        </p>

        <h2>1 悅聽「電子視聽區」</h2>

        <p>
          輕便易攜帶的電子閱讀器打破了紙質書籍在時間和空間上的限制。用戶可以根據喜好收藏內容、定製使用習慣，通過AI算法獲取符合個人喜好的推薦內容，實現個性化閱讀。
        </p>

        <Fig
          art={
            <img
              src="https://i.pinimg.com/1200x/c4/67/46/c467466d8712089da32d7a9aaee672c1.jpg"
              alt=""
            />
          }
        />
      </Sec>

      <Sec>
        <h2>2 KIOSK機——智能圖書館推廣員</h2>

        <p>
          KIOSK閱讀屏可以輕鬆瀏覽電子書、聆聽有聲書，還可以玩「漢字連連看」、「古詩華容道」等中華文化學習專題的益智遊戲，兼具娛樂性和文化內涵，吸引學生動腦思考、動手操作，在輕鬆愉快的氛圍中學習。
        </p>

        <Fig
          art={
            <img
              src="https://i.pinimg.com/1200x/eb/1a/e7/eb1ae7f0a26d310ac47fb20d73d06337.jpg"
              alt=""
            />
          }
        />
      </Sec>

      <Sec>
        <h2>3 AI智能伴讀機械人</h2>

        <p>
          古有書僮陪讀，今有AI智能伴讀機械人。外形可愛、智慧聰穎的機械人搭載了編程、電子閱讀、互動遊戲等多種功能。識得兩文三語的它可以和同學們一起玩遊戲，實時回答問題，還可以定製開發課程資源，配合老師開展課堂教學。
        </p>

        <Fig
          art={
            <img
              src="https://i.pinimg.com/1200x/c3/4a/86/c34a86c9cc10d9344c70792b6bfe890b.jpg"
              alt=""
            />
          }
        />
      </Sec>

      <Sec>
        <h2>4 智能詩書畫文創台</h2>
        <p>
          全面革新傳統的書寫方式，深入融合了書法文化和數碼藝術，開創性定義數碼書法。以水代墨、以屏代紙，最大程度保留傳統書寫的體驗。
        </p>

        <Fig
          art={
            <img
              src="https://i.pinimg.com/1200x/f8/86/bc/f886bce9655fb2d2fe19655b4f9c412b.jpg"
              alt=""
            />
          }
        />
      </Sec>

      <Sec>
        <h2>5 VR體驗區</h2>

        <p>
          通過虛擬現實的VR技術，讀者可以身臨其境地進入書籍所描繪的世界。PICO眼鏡和5G閱讀樹設備運用VR全景、5G高清還原、聲音骨傳導、雲點播等技術，將書籍內容以虛擬現實的形式立體再現，放佛親身遨遊在雲端、遊走在文化古城中，打造720度沉浸式觀看體驗。
        </p>

        <Fig
          art={
            <img
              src="https://i.pinimg.com/1200x/7d/3d/35/7d3d35bffb67190185710673e02edfc4.jpg"
              alt=""
            />
          }
          caption="5G閱讀樹"
        />

        <p>
          輝煌的敦煌、雄偉的長城、莊嚴的故宮等文化瑰寶，通過動畫演繹和實景拍攝的方式製作成了立體逼真的VR影片。目前已收錄歷史古跡、科幻作品、傳統文化、經典古籍、中國國情等豐富的專題影片資源。
        </p>

        <Fig
          art={
            <img
              src="https://i.pinimg.com/1200x/b9/90/a1/b990a1be150edf574c145de8f2a34719.jpg"
              alt=""
            />
          }
          caption="PICO眼鏡"
        />
      </Sec>

      <Sec>
        <h2>6 AR互動大屏遊戲</h2>
        <p>
          借助AR互動遊戲，學生們能夠穿越時空，體驗各式各樣的傳統服飾變裝，親身參與故事情節的發展，與故事角色互動。不僅可以化身成皇帝指點江山，還能深入探索漢字數千年的演變歷程，更可以學習傳統節日習俗的由來。學生們能夠深刻感受到中華綿延千年的文明底蘊，寓教於樂的學習方式更容易被學生所接納。
        </p>

        <Fig
          art={
            <img
              src="https://i.pinimg.com/1200x/78/f3/86/78f3861d6f46b0b7abff47c392d9933d.jpg"
              alt=""
            />
          }
        />
      </Sec>

      <Sec>
        <h2>7 廿四節氣MR互動體驗</h2>
        <p>
          以廿四節氣知識體系為主線，利用元宇宙MR虛實結合技術全景視角呈現生動形象，增加閱讀沉浸感與互動性。透過中英雙語，將廿四節氣中蘊含的古代智慧與充滿生機的中國氣韻融為一體，讓傳統文化以全新的形式被海內外讀者接受和欣賞。
        </p>

        <Fig
          art={
            <img
              src="https://i.pinimg.com/1200x/b3/fa/fc/b3fafc978549e3bf0ccd735b59430155.jpg"
              alt=""
            />
          }
        />

        <p>
          百間學校巡展計劃正在開放報名，名額有限、先到先得。中華傳統節日文化體驗、國寶大熊貓的故事、國家高科技發展成就展、國情·國安·我的家在中國、中華非遺文化之廿四節氣、邂逅敦煌、雲遊長城等豐富主題可供選擇，亦可配合學校訂製所需主題。
        </p>
      </Sec>

      <Sec>
        <InArticleCard data={Post_6} />
      </Sec>

      <Sec size="full">
          <GridGallery
            ratio={[2000, 2830]}
            columns={4}
            arts={[
              {
                src: "https://i.pinimg.com/1200x/8d/58/e4/8d58e4e267f504b917534b1077705a32.jpg",
              },

              {
                src: "https://i.pinimg.com/1200x/77/37/59/773759185358f6b725cc324c69382206.jpg",
              },

              {
                src: "https://i.pinimg.com/1200x/03/f6/28/03f628a8fa96844be7984572b4b5f6ba.jpg",
              },

              {
                src: "https://i.pinimg.com/1200x/1e/62/41/1e6241508cf383c165f5d8c9ea5f775f.jpg",
              },
            ]}
          />
      </Sec>

      <Sec><></></Sec>

      <ContactCallout
        title={"活動期：9月2日至12月31日（即日起開放報名）"}
        caption="該活動旨在將「文化」與「科技」深度融合，為學生提供更加多元的體驗式學習氛圍，特別適合跨學科學習、跨課程閱讀、創意閱讀等教育專題，可全面覆蓋中小學各學科課程展示、主題活動、開放日、嘉年華等活動，深受學校和師生歡迎。揭秘核心區域的「超能裝備」，如何通過科技賦能，讓閱讀變得更立體、豐富、有樂趣。"
      />
    </>
  ),
};

export default Post_41;
