import ContactCallout from "../../../Components/Callouts/ContactCallout";
import Para from "../../../Components/Markdown/MD";
import Sec from "../../_Templates/Layouts/InArticle/_ArticleSection";
import Fig from "../../_Templates/Layouts/InArticle/Fig";
import Template_Page from "../../_Templates/Template_Page";
import Author_Suep from "../../Authors/Author_Suep";

import Poster from "../../../assets/84Panda2.png";

const Post_91: Template_Page = {
  info: {
    title: "「文化+科技」閱讀新方式",
    label: "",
    key: "post_91",
    cover:
      "https://i.pinimg.com/originals/e2/e4/6f/e2e46fcd3b04607f2f4969941225248e.jpg",
    latest_update: [2024, 8, 29],
    brief:
      "開放週現場分設「元宇宙&中華非遺手工課」和「中華文化雙語圖書展」兩個展廳，參觀者可在現場體驗AR、VR、MR閱讀，與智能伴讀機械人互動，免費試用最新電子書平台，索取訂製書單，親手嘗試燈彩、皮影、織造術等中華非遺手工製作等豐富項目。相信通過這些體驗，幫助老師輕鬆推動跨課程閱讀和跨學科學習，誠邀您的參與！",
    authors: [
      {
        data: Author_Suep,
      },
    ],
  },
  content: (
    <>
      <Sec>
        <Fig
          art={
            <img src="https://i.pinimg.com/originals/e2/e4/6f/e2e46fcd3b04607f2f4969941225248e.jpg" />
          }
          caption={
            <p>
              Photo by{" "}
              <a href="https://unsplash.com/@scottwebb?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
                Scott Webb
              </a>{" "}
              on{" "}
              <a href="https://unsplash.com/photos/white-and-black-vr-box-headset-on-green-grass-field-4lyOcRmx29g?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
                Unsplash
              </a>
            </p>
          }
        />
      </Sec>
      <Sec>
        <h2>新技術、新體驗</h2>

        <p>
          新學年即將開始，老師們是否還在思考如何豐富校園閱讀形式，發展學生的各項能力？在過往的閱讀推廣活動中，「知書閱聽圖書館」始終執著於不斷探索更加適合學生的閱讀內容和呈現方式，為學校提供一站式服務。
        </p>

        <p>
          培養學生的閱讀興趣，可以借助VR、AR等前沿科技來拓展閱讀方式，讓閱讀變得更立體、更生動。
        </p>

        <p>
          推動跨課程閱讀，可以緊貼生活熱點設計主題閱讀單元，建立學科間的聯繫。
        </p>

        <p>
          推廣中華文化體驗活動，可以從跨學科學習入手，幫助學生全面了解中華文化的多樣性和深度，培養他們的文化素養和批判性思維能力。
        </p>
      </Sec>

      <Sec>
        <h2>
          捉緊新學年熱門主題，透過多元方法激發學生閱讀和學習興趣，老師可以點樣做？
        </h2>

        <Para>
          **知書閱聽圖書館** $\times$ **中華文化有意思**
          將於9月2日至9月6日聯袂推出「中華文化主題展覽開放週」活動，為各位同工展示如何借助傳統佳節中秋節、國寶大熊貓、國家高科技成就及奧運精神等熱門話題，開展高效又有趣的中華文化教育活動。
        </Para>

        <Para>
          開放週現場分設「元宇宙&中華非遺手工課」和「中華文化雙語圖書展」兩個展廳，參觀者可在現場體驗AR、VR、MR閱讀，與智能伴讀機械人互動，免費試用最新電子書平台，索取訂製書單，親手嘗試燈彩、皮影、織造術等中華非遺手工製作等豐富項目。相信通過這些體驗，幫助老師輕鬆推動跨課程閱讀和跨學科學習，誠邀您的參與！
        </Para>

        <Fig art={<img src={Poster} />} />
      </Sec>

      <ContactCallout />
    </>
  ),
};

export default Post_91;
