import ContactCallout from "../../../Components/Callouts/ContactCallout";
import Sec from "../../_Templates/Layouts/InArticle/_ArticleSection";
import Fig from "../../_Templates/Layouts/InArticle/Fig";
import GridGallery from "../../_Templates/Layouts/InArticle/GridGallery";
import Template_Page from "../../_Templates/Template_Page";
import Author_Suep from "../../Authors/Author_Suep";

import LongFig1 from "../../../assets/Post82_1.webp"
import LongFig2 from "../../../assets/Post82_2.webp"
import LongFig3 from "../../../assets/Post82_3.webp"

const Post_82: Template_Page = {
  info: {
    title: "中秋燈彩映華夏 共度佳節好時光",
    label: "中華非遺手工課",
    key: "post_82",
    cover:
      "https://i.pinimg.com/originals/fc/1f/d8/fc1fd871ec2d6701e48a372794e1cc57.webp",
    latest_update: [2024, 9, 11],
    brief:
      "以「文化+科技」的理念推動中華文化的學習和傳播，是「中華文化有意思」的品牌初衷。結合學科教學重點和閱讀學習熱點，用師生喜愛的方式推廣中華文化體驗活動，把中秋節過成「文化節+科技節」，是一個創新嘗試！",
    authors: [
      {
        data: Author_Suep,
      },
    ],
  },
  content: (
    <>
      <Sec>
        <p>中秋佳節是我國傳統節日之一，是一年中家庭團聚的重要時刻，承載著深厚的文化內涵和情感寄託。每年農曆八月十五，身處世界各地的華人都會以各種方式慶祝這一象徵著團圓的節日。</p>

        <p>中秋節的傳統習俗有很多，除了吃月餅和提燈賞月，一家人共享團圓飯外，在校園裡同樣也可以藉著中秋佳節開展豐富而有意思的節日文化體驗活動。9月9日，由聯合出版集團旗下文化教育品牌「中華文化有意思」及「知書閱聽圖書館」策劃的「中秋燈彩映華夏」親子手工坊走進了南屯門官立中學，為150位師生和家長帶來了精彩的中華文化活動體驗。</p>

        <Fig art={<img src="https://i.pinimg.com/originals/6f/e1/de/6fe1de94d5fda7608f9bdcd30107a49d.png" />} />

        <p><strong>燈彩紮作</strong>是我國非物質文化遺產之一，課程導師先為同學們講解了燈彩的發展歷史及其審美特點。燈彩以燈籠為主要表現形式，融合了繪畫、剪紙、刺繡等多種藝術手法，展現出繽紛的視覺效果和豐富的民俗內涵。隨後，導師通過講解、現場演示及視頻教學相互結合的方式，和同學們一起體驗燈籠的製作過程。</p>

        <Fig art={<img src="https://i.pinimg.com/originals/fc/1f/d8/fc1fd871ec2d6701e48a372794e1cc57.webp" />} />

        <Fig art={<img src="https://i.pinimg.com/originals/17/c1/7d/17c17debcee29b2b22bac5d156696cbf.webp" />} />

        <Fig art={<img src="https://i.pinimg.com/originals/7a/25/2b/7a252b39a82ddaf31fd77b32a05b4288.webp" />} />

        <p>燈籠不僅是裝飾品，更是表達祝福和團圓的象徵。每一盞燈籠都承載著製作者的心意，這樣的親子活動不僅能夠增強親子關係，更能讓學生充分感受中國人的造物智慧，是文化傳承的重要載體。</p>

        <Fig art={<img src="https://i.pinimg.com/originals/b8/8d/b0/b88db09dc637713fda9d757095c231fe.jpg" />} />

        <p><strong>南屯門官立中學校長陳耀明先生</strong>提到：「策劃這麼有意思的活動，不僅可以推廣中華文化、促進親子互動，還能讓學生親手製作。活動現場氣氛熱烈，我看到很多同學都很踴躍地去嘗試。我想這對於他們來說，或許會是非一般的中秋節。」</p>

        <Fig art={<img src="https://i.pinimg.com/originals/6f/78/09/6f7809621198886b14414f16aa571a94.webp" />} />

        <p>工作坊結束後，全場師生共同拍照留念，互贈節日祝福。</p>

        <p>校園裡充滿了濃濃的中秋節日氛圍，不僅有精彩的中國非遺手工課，還設有中秋海報展、中華文化雙語圖書展等活動區，供參與者沉浸在中秋的氛圍當中。</p>

        <Fig art={<img src="https://i.pinimg.com/originals/09/d3/8b/09d38bad4d20ad4098b130ea4b244bf8.jpg" />} />
        
        <p>「中華文化有意思」倡導通過「文化+科技」的方式推動中華文化的學習和傳播。此次活動中展出中秋海報，充分運用領先的AI技術生成，畫風清新、色彩鮮明，不僅提升了海報整體的視覺效果，更讓學生直觀地了解前沿科技如何促進學習和創作。</p>
      </Sec>
      
      <Sec size="full">
        <GridGallery
          ratio={[500, 1250]}
          columns={3}
          arts={[
            {
              src: LongFig1,
            },
            {
              src: LongFig2,
            },
            {
              src: LongFig3,
            },
          ]}
        />
      </Sec>

      <Sec>
        <p>「中華文化有意思」的負責人表示：「我們希望借助數字技術，以中秋節、國慶、大熊貓來港、奧運健兒訪港等節慶和熱門活動為契機，製造閱讀學習熱點。中華非遺燈彩進校園的活動，能讓學生在多元、立體的閱讀學習中體會傳統文化的美，從而激發了他們對學習中華文化的興趣與熱愛。」</p>

        <Fig art={<img src="https://i.pinimg.com/originals/37/a7/4b/37a74b2aaa43e9f2914e0509cc55fc66.webp" />} />
      </Sec>

      <ContactCallout />
    </>
  ),
};

export default Post_82;
