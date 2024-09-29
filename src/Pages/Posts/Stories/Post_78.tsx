import ContactCallout from "../../../Components/Callouts/ContactCallout";
import Sec from "../../_Templates/Layouts/InArticle/_ArticleSection";
import Fig from "../../_Templates/Layouts/InArticle/Fig";
import Template_Page from "../../_Templates/Template_Page";
import Author_Suep from "../../Authors/Author_Suep";

import GridGallery from "../../_Templates/Layouts/InArticle/GridGallery";

import PandaPoster_1_1 from "../../../assets/pandapost1-1.webp"
import PandaPoster_1_2 from "../../../assets/pandapost1-2.webp"
import PandaPoster_1_3 from "../../../assets/pandapost1-3.webp"

import PandaPoster_2_1 from "../../../assets/PandaPost2-1.webp";
import PandaPoster_2_2 from "../../../assets/PandaPost2-2.webp";
import PandaPoster_2_3 from "../../../assets/PandaPost2-3.webp";

import PandaPoster_3_1 from "../../../assets/PandaPost3-1.png";
import PandaPoster_3_2 from "../../../assets/PandaPost3-2.png";
import PandaPoster_3_3 from "../../../assets/PandaPost3-3.png";

import PandaPoster_4_1 from "../../../assets/PandaPost4-1.webp";
import PandaPoster_4_2 from "../../../assets/PandaPost4-2.webp";
import PandaPoster_4_3 from "../../../assets/PandaPost4-3.webp";


const Post_78: Template_Page = {
  info: {
    title: "「安安」、「可可」如期到港，熊貓主題海報已上線！",
    label: "熱門閱讀",
    key: "post_78",
    cover:
      "https://i.pinimg.com/originals/a9/6e/ae/a96eaefb68253eed3aca0231b546fb88.webp",
    latest_update: [2024, 9, 27],
    brief:
      "來了！他們來了！讓全港沸騰的「安安」和「可可」，帶著全國人民的深情祝福，於9月26日抵達香港。",
    authors: [
      {
        data: Author_Suep,
      },
    ],
  },
  content: (
    <>
      <Sec>
        <h2>談到大熊貓，我們可以學到什麼？</h2>

        <Fig art={<img src="https://i.pinimg.com/originals/bd/57/ed/bd57edbd149bd1349321ff587942c6e2.webp" />}
        
        caption="「安安」（左）及「可可」（右）｜圖片源自橙新聞"

        />

        <p>一路旅途奔波，出發前，飼養員為兩隻大熊貓準備了竹子、竹筍、蘋果、胡蘿蔔等沿途所需的全部飲食。你可能會好奇，大熊貓為什麼偏愛吃竹子？大熊貓究竟是熊還是貓？大熊貓十分稀有，牠們的自然繁殖能力如何？這些科普知識，都可以在《大熊貓百科——走進動物科學世界》找到答案。</p>
      </Sec>

      <Sec size="full">
        <GridGallery
          ratio={[500, 1250]}
          columns={3}
          arts={[
            {
              src: PandaPoster_1_1,
            },
            {
              src: PandaPoster_1_2,
            },
            {
              src: PandaPoster_1_3,
            },
          ]}
        />
      </Sec>

      <Sec>
        <p>「安安」出生於2019年，是一隻雄性大熊貓。牠頭圓體長、動作敏捷，性格外向活潑。剛下飛機的安安，已經迫不及待地同大家見面啦！圓圓的腦袋、黑色的耳朵，「黑白色」不知俘獲了多少熊貓迷的芳心。</p>

        <Fig art={<img src="https://i.pinimg.com/originals/1f/cc/94/1fcc94ffca48838ac9fb9a409cb04d93.gif" />}
        
        caption={"安安下飛機啦！｜圖片源自大公文匯全媒體"}
        
        />

        <p>
        大熊貓最早出現於800萬年前，堪稱地球上的「活化石」。為了適應大自然的生存法則，大熊貓逐漸進化為黑白配色毛皮。不過，剛出生的熊貓BB是粉嘟嘟的，你見過牠的樣子嗎？
        </p>

        <Fig art={<img src="https://i.pinimg.com/originals/a9/6e/ae/a96eaefb68253eed3aca0231b546fb88.webp" />}
          caption={"在四川飼養基地生活的安安｜圖片源自大公文匯全媒體"}
        />
      </Sec>

      <Sec size="full">
        <GridGallery
          ratio={[500, 1250]}
          columns={3}
          arts={[
            {
              src: PandaPoster_2_1,
            },
            {
              src: PandaPoster_2_2,
            },
            {
              src: PandaPoster_2_3,
            },
          ]}
        />
      </Sec>

      <Sec>
        <p>大熊貓是連繫四川和香港的重要紐帶。回望2008年，四川省汶川縣遭遇特大地震，香港人民積極捐款、支援重建，展現了無私的愛心與同胞情誼。為感謝香港特區政府的支持，自2016年起，重建後的四川臥龍神樹坪基地特別為香港市民提供永久免票待遇。從蜀山到香江，川港同心護國寶。</p>

        <p>作為「文化大使」的大熊貓，也在世界外交中發揮了重要的作用，促進了世界對中國的理解與認識。</p>
      </Sec>

      <Sec size="full">
        <GridGallery
          ratio={[500, 1250]}
          columns={3}
          arts={[
            {
              src: PandaPoster_3_1,
            },
            {
              src: PandaPoster_3_2,
            },
            {
              src: PandaPoster_3_3,
            },
          ]}
        />
      </Sec>

      <Sec>
        <Fig art={<img src="https://i.pinimg.com/originals/f6/cb/1c/f6cb1c02a69ede87dbb34e707ab22d5a.png" />} caption="香港市民熱烈歡迎大熊貓入住海洋公園｜圖片源自香港文匯報" />

        <p>香港海洋公園為「安安」和「可可」打造了一個充滿愛的家園，讓市民和遊客與大熊貓親密互動的同時，也認識到保護珍惜物種和自然資源的重要性。共建地球生命共同體，需要每個人的積極參與。</p>
      </Sec>

      <Sec size="full">
        <GridGallery
          ratio={[500, 1250]}
          columns={3}
          arts={[
            {
              src: PandaPoster_4_1,
            },
            {
              src: PandaPoster_4_2,
            },
            {
              src: PandaPoster_4_3,
            },
          ]}
        />
      </Sec>

      <Sec>
        <h2>推出全新大熊貓百科海報展</h2>

        <p>為了讓同學們更好地學習有關大熊貓的科普知識、培養閱讀興趣，「知書閱聽圖書館」推出了緊貼多學科教學主題的大熊貓主題海報，易拉架的展出方式更加方便在校園、社區等場景展出。</p>

        <Fig art={<img src="https://i.pinimg.com/originals/88/99/e7/8899e79f67e51b2d0e7bc1e1560d7e6f.jpg" />}
          size="small"
        />

        <p>四大專題易拉架貼合中華文化、國情教育、科學科普、環境保護、常識科、公民科等學科和閱讀熱點，為學校開展跨學科學習和跨課程閱讀提供了良好的平台。有了AI技術的輔助，海報設計形式更加新穎、有創意。</p>
      </Sec>

      <ContactCallout
        title="聯絡我們"
        caption= "更多熊貓主題產品陸續上線，「知書閱聽圖書館」竭誠為學校提供訂製、策劃、產品推介、策展等服務，歡迎學校、機構和企業用戶垂詢"
      />
    </>
  ),
};

export default Post_78;
