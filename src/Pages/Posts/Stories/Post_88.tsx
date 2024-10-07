import ContactCallout from "../../../Components/Callouts/ContactCallout";
import Sec from "../../_Templates/Layouts/InArticle/_ArticleSection";
import Fig from "../../_Templates/Layouts/InArticle/Fig";
import Template_Page from "../../_Templates/Template_Page";
import Author_Suep from "../../Authors/Author_Suep";

const Post_88: Template_Page = {
  info: {
    title: "大國重器「蛟龍」凱旋——深海的秘密我知道",
    label: "國情教育",
    key: "post_88",
    cover:
      "https://i.pinimg.com/originals/58/bc/47/58bc47397ea6c56f5a67a5ca7af31183.webp",
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
            <img src="https://i.pinimg.com/originals/58/bc/47/58bc47397ea6c56f5a67a5ca7af31183.webp" />
          }
          caption={"圖片引用自《深海的秘密我知道》"}
        />
      </Sec>

      <Sec>
        <p>
          2013年正式投入使用的深海載人潛水器「蛟龍號」，在運行十二年後成功凱旋！即將於9月23-25日停靠香港，24日在尖沙咀海運碼頭舉行「深海一號」攜「蛟龍號」載人潛水器進港歡迎儀式！
        </p>

        <Fig
          art={
            <img src="https://i.pinimg.com/originals/c0/ed/57/c0ed57c9fa5de708dd8a3b4e3314787e.jpg" />
          }
          caption={"圖片引用自大公文匯微信公眾號"}
        />

        <Fig art={<img src="https://i.pinimg.com/originals/0e/a5/e4/0ea5e4d00a5efc53b0b0050958068c87.webp" />} caption={"小飛象章魚｜圖片引用自大公文匯微信公眾號"} />

        <Fig art={<img src="https://i.pinimg.com/originals/22/13/3f/22133fdfe64789929cf934f8a0395a26.png" />} caption={"大西洋「失落之城」的「白煙囪」｜圖片引用自大公文匯微信公眾號"} />

        <p>從2012年「蛟龍號」試海成功，到2020年「奮鬥者號」的萬米深潛之路，一次次下潛探索深海秘密，一次次見證國家高科技成就發展。</p>

        <Fig art={<img src="https://i.pinimg.com/originals/c3/cb/56/c3cb566c5a23e4fc78bbd2ac948c1f03.webp" />} caption={"圖片引用自《深海的秘密我知道》"} />

        <p>地球大約71%的表面被海洋所覆蓋，而深度超過2000米的深海又達到了60%。海洋對於地球演化的作用、人類生存的重要性，遠遠超出我們目前的認知。</p>

        <Fig art={<img src="https://i.pinimg.com/originals/58/bc/47/58bc47397ea6c56f5a67a5ca7af31183.webp" />} caption={"圖片引用自《深海的秘密我知道》"} />

        <p>這項令人驕傲的大國重器，展現了我國科技工作者一步步向深海邁進的艱苦努力。科技的進步拓寬了人類對自然界的理解，科學家們的奉獻精神也激勵著我們每一個人不斷追求真理和創新。</p>

        <Fig art={<img src="https://i.pinimg.com/originals/6b/15/47/6b154728dd7e6f6f6c67ae9ed0596ccc.webp" />} caption={"圖片引用自《深海的秘密我知道》"} />

        <p>深海載人潛水器不僅是科學探索的重要工具，也是資源開發和環境保護的關鍵設備，為可持續發展提供支持。一起透過一部短片來了解一下載人深海探測器吧！</p>

        <p>本書將揭秘深海載人潛水器的外型及各部分功能，讀者可以跟隨書中的圖文「下潛」到海底萬米的世界，了解深海探測的意義與價值。</p>

        <Fig art={<img src="https://i.pinimg.com/originals/c1/91/7e/c1917ec568e5fc1848aac666544f5922.jpg" />} caption={""} />

        <p>從深海載人潛水器到長征五號運載火箭、中國太空站、國產大飛機C919、北斗導航系統，再到「復興號」高鐵、智慧港口洋山深水港、港珠澳大橋等極具代表性的交通運輸系統，這套《國家高科技發展成就》繪本以深入淺出的圖文設計，全方位展現國家高科技實力，激發青少年對前沿科技的好奇心和探索欲。</p>

        <Fig art={<img src="https://i.pinimg.com/originals/e0/8e/f0/e08ef0a3fc54eecff71369021a7e5c07.jpg" />} caption={""} />

        <p>適逢中華人民共和國成立七十五週年，《國家高科技發展成就》紙本書、電子書已同步上線「知書閱聽圖書館」。即日起至10月底，學校用戶訂購享七五折特別推廣價。希望更多青少年藉這套讀物來增進對祖國的了解，感受國家發展的時代力量！</p>

        <Fig art={<img src="https://i.pinimg.com/originals/91/46/0c/91460ccf8b4d7fdbe8c42faa06aab8bd.jpg" />} caption={""} />
      </Sec>

      <ContactCallout />
    </>
  ),
};

export default Post_88;
