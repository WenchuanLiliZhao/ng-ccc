import ContactCallout from "../../../Components/Callouts/ContactCallout";
import Sec from "../../_Templates/Layouts/InArticle/_ArticleSection";
import Fig from "../../_Templates/Layouts/InArticle/Fig";
import Template_Page from "../../_Templates/Template_Page";
import Author_Suep from "../../Authors/Author_Suep";

import _84China from "../../../assets/84China.png";
import _84Panda from "../../../assets/84Panda.png";
import _84Panda2 from "../../../assets/84Panda2.png";
import _84Sport from "../../../assets/84Sport.png";

const Post_84: Template_Page = {
  info: {
    title: "讀一本好書很重要",
    label: "學習中華文化",
    key: "post_84",
    cover:
      "https://i.pinimg.com/originals/4b/72/97/4b72970ce64a063074614c495071f6d0.jpg",
    latest_update: [2024, 9, 23],
    brief:
      "這項令人驕傲的大國重器，展現了我國科技工作者一步步向深海邁進的艱苦努力。科技的進步拓寬了人類對自然界的理解，科學家們的奉獻精神也激勵著我們每一個人不斷追求真理和創新。",
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
            <img src="https://i.pinimg.com/originals/4b/72/97/4b72970ce64a063074614c495071f6d0.jpg" />
          }
          caption={
            <p>
              Photo by{" "}
              <a href="https://unsplash.com/@julianmokzth?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
                Tianhao Zhang
              </a>{" "}
              on{" "}
              <a href="https://unsplash.com/photos/an-open-book-with-chinese-writing-on-it-YdRIRl7Ic4o?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
                Unsplash
              </a>
            </p>
          }
        />
      </Sec>

      <Sec>
        <p>
          由「知書閱聽圖書館」與「中華文化有意思」聯袂推出的「中華文化主題展覽開放週」於9月2日正式開展，本期展覽以元宇宙沉浸式體驗和中華文化雙語圖書展為主，共為期五天。
        </p>

        <p>
          青少年學習中華文化，選擇一本好書非常重要。跟隨小編一起去看看現場有哪些好看、好玩又好讀的內容吧！
        </p>
      </Sec>

      <Sec>
        <h2>熊貓書展：科普閱讀可以很有趣</h2>

        <p>
          香港海洋公園的熊貓BB姐弟逐漸長大啦！不僅體重增加了一倍多，身體也都漸漸「上色」，預計等它們滿月的時候，就會變成真正的「黑白熊」啦！
        </p>

        <Fig
          art={
            <img src="https://i.pinimg.com/originals/87/fb/fa/87fbfa1f3bfc2eada848f69ab8e3df97.webp" />
          }
        />

        <p>
          如果不想錯過熊貓姐弟的每一天，可以透過這些中英雙語讀物，看到他們的成長過程。「熊貓主題書展」展出了數十本中、英雙語讀物，從熊貓日記到動物百科、從物種保育到外交故事，滿足你對大熊貓的一切好奇心。
        </p>

        <Fig
          art={
            <img src="https://i.pinimg.com/originals/f9/50/07/f950073e81712eb641e2247c4da62c27.webp" />
          }
        />

        <Fig
          art={
            <img src="https://i.pinimg.com/originals/a5/68/c4/a568c447fdbefc3d32d44ffc2a6939b3.webp" />
          }
        />

        <Fig
          art={
            <img src="https://i.pinimg.com/originals/69/ae/86/69ae86db87ca81adb2d21dcf96a30f2c.jpg" />
          }
        />

        <Fig art={<img src={_84Panda} />} />
      </Sec>

      <Sec>
        <h2>奧運精神：培養勇敢和堅韌品格</h2>

        <p>
          國家隊和香港隊在本屆奧運會創下的歷史佳績，向全世界展示了拼搏奮鬥、不屈不撓的國人精神，也彰顯了國家實力的強大。在剛剛結束的內地奧運健兒訪港活動中，運動員紛紛寄語香港青少年要堅持熱愛、敢於追夢。
        </p>

        <Fig
          art={
            <img src="https://i.pinimg.com/originals/30/b5/27/30b527c138f8a397f850feeda1ed8fe2.webp" />
          }
        />

        <Fig
          art={
            <img src="https://i.pinimg.com/originals/e9/f7/1d/e9f71d75daa2fb50463e1ecfd4ccce27.jpg" />
          }
        />

        <Fig
          art={
            <img src="https://i.pinimg.com/originals/f5/0b/53/f50b53ec416f3444b14324abfbc1242d.webp" />
          }
        />

        <p>
          「知書閱聽圖書館」特別出版了奧運精神體育繪本系列，一套五本，透過這些體育少年的故事，引導青少年勇敢面對挑戰、增強團隊合作精神，培養勇敢和堅韌的品格，為未來的挑戰做好準備。
        </p>

        <Fig art={<img src={_84Sport} />} />
      </Sec>

      <Sec>
        <h2>花好月圓：中秋節與傳統文化</h2>

        <p>
          中秋節不僅是中國的傳統節日，更是中華文化的重要組成部分。青少年可以透過其獨特的傳統習俗，了解和感受中華文化。
        </p>

        <Fig
          art={
            <img src="https://i.pinimg.com/originals/0d/32/7a/0d327ad085c61a95a9f138be809738e2.webp" />
          }
        />

        <Fig
          art={
            <img src="https://i.pinimg.com/originals/e0/f7/c0/e0f7c0ebd1d8177b1a1951553b834b20.jpg" />
          }
        />

        <p>
          現場展出具有濃郁中秋節日氛圍的雙語讀物，包括立體書、繪本、譯本、典籍等，滿足不同年齡段學生的閱讀需要。
        </p>

        <Fig
          art={
            <img src="https://i.pinimg.com/originals/93/e1/7b/93e17bff645374aecbbb55f6d6339441.webp" />
          }
        />

        <Fig
          art={
            <img src="https://i.pinimg.com/originals/d9/1d/49/d91d49a90eb126d1408ff90ea24b84cc.webp" />
          }
        />

        <Fig
          art={
            <img src="https://i.pinimg.com/originals/ee/ab/01/eeab010b565d4f2abca29f31aff59eea.webp" />
          }
        />

        <p>
          為支援學校推動跨學科學習，「知書閱聽圖書館」還特別為學校設計了中秋主題展板，包括「中秋節的故事」、「中秋節習俗與文化」、「中秋節與中國詩詞」、「中秋文化與當代科技」四個單元、共12個內容，涵蓋中文、歷史、科技科普、國情教育、中華文化、常識科等多學科，幫助學生建立起知識間的聯繫。
        </p>

        <Fig
          art={
            <img src="https://i.pinimg.com/originals/aa/fc/f0/aafcf03cf8faa28e245c9142fd262bb2.webp" />
          }
        />

        <p>
          值得一提的是，這套展板充分運用領先的AIGC技術生成圖畫，畫風清新、色彩鮮明，不僅提升了視覺效果，還能讓學生更直觀地理解科技如何賦能學習和創作。
        </p>

        <p>
          新學年，「知書閱聽圖書館」還將會推出「AI+中華文化：科技體驗課程」，鼓勵學生開展對新興技術的探索，培養媒介素養和創新能力。
        </p>
      </Sec>

      <Sec>
        <h2>國慶佳節：了解科技成就 點贊國家發展</h2>

        <p>
          十月即將迎來祖國母親的生日，如何培養青少年對國家的認同感與歸屬感？學習國家高科技成就，可以更好地認識國家在各個領域的發展，共同為未來的進步而努力。
        </p>

        <Fig
          art={
            <img src="https://i.pinimg.com/originals/70/f2/5f/70f25fd05cc47300b8a4ff22d2b3413e.webp" />
          }
        />

        <p>
          長征五號運載火箭、中國太空站、國產大飛機C919、深海潛水器「奮鬥者號」⋯⋯從太空、陸地再到深海，這套繪本把專業的科普知識用青少年喜歡的方式展示出來，激發青少年的科學探究興趣。
        </p>
      </Sec>

      <Sec>
        <h2>新學年特別推廣計劃</h2>

        <p>
          適逢中華人民共和國成立七十五週年，「知書閱聽圖書館」緊貼新學年熱門主題，重磅推出《閃光少年·體育繪本》、《國家科技發展成就》兩套優質讀物，實體書、電子書已同步上線。
        </p>

        <p>
          即日起至10月底，學校用戶訂購上述兩套電子書，享 <strong>七五折</strong>{" "}
          特別推廣價。希望更多青少年通過這套讀物來增進對祖國的了解，感受閱讀的力量！
        </p>

        <Fig art={<img src={_84China} />} />

        <Fig art={<img src={_84Panda2} />} />
      </Sec>

      <ContactCallout />
    </>
  ),
};

export default Post_84;
