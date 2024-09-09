import ContactCallout from "../../../Components/Callouts/ContactCallout";
import InArticleCard from "../../../Components/Cards/InArticleCard";
import InArticleNewsClip from "../../../Components/Cards/InArticleCard copy";
import Sec from "../../_Templates/Layouts/InArticle/_ArticleSection";
import Fig from "../../_Templates/Layouts/InArticle/Fig";
import Template_Page from "../../_Templates/Template_Page";
import Authors from "../../Authors/_Authors";
import Post_3 from "./Post_3";

const Post_56: Template_Page = {
  info: {
    title: "古蜀文化之源：三星堆文化",
    key: "post_56",
    brief:
      "出於種種原因的考量，三星堆成為了「中華文化有意思」的一個重要的項目分支。該分支中包含書展、VR、AR 以及名家講座。我們希望，通過關於這種重要的話題的種種活動，可以讓學生們認識到一個更為複雜而鮮活的、關於起源時期的中華文化的認識，而不再停留在固有的刻板印象中。",
    latest_update: [2024, 9, 9],
    cover:
      "https://i.pinimg.com/originals/91/5c/25/915c250dcf0600323f5b7aa145b72c80.jpg",
    label: "全年接受預訂",
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
        <Fig
          art={
            <img src="https://i.pinimg.com/originals/91/5c/25/915c250dcf0600323f5b7aa145b72c80.jpg" />
          }
          caption={
            <p>
              Photo by{" "}
              <a href="https://unsplash.com/@rrricharddd?utm_content=creditCopyText&amp;utm_medium=referral&amp;utm_source=unsplash">
                Richard Wang
              </a>{" "}
              on{" "}
              <a href="https://unsplash.com/photos/a-close-up-of-a-mask-on-a-pole-EOKwo-BAtE0?utm_content=creditCopyText&amp;utm_medium=referral&amp;utm_source=unsplash">
                Unsplash
              </a>
            </p>
          }
        />
      </Sec>

      <Sec>
        <p>
          在三星堆遺址重見天日之前，人們或多或少傾向於相信，在上古時期，是黃河流域的早期文明，將人口、農業以及宮廷文化帶到了長江流域；而此前，長江流域是荒蕪的。不過，隨著三星堆遺址的重見天日，以及對於出土遺跡和文物的研究的愈發深入，這種傳統觀點受到了很大的挑戰。
        </p>

        <p>
          過去，我們認為，公元前316年被秦吞併之前的古蜀國所具備的那種鮮明的文化特徵，是周朝分封之後逐漸發展出來的。但是，越來越多的證據顯示，這種特徵早在夏商時期就已經存在了。例如，在成都平原發掘的新石器時代遺址，寶墩文化（公元前2500年－公元前1750年），其年代甚至比大禹的年代還早了四百多年。而今天，我們所說的古蜀國（公元前2000年－公元前1400年），其年代與夏商存在與同一時期。
        </p>
      </Sec>

      <Sec>
        <Fig
          art={
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/The_First_Stove_of_Sichuan.png/2560px-The_First_Stove_of_Sichuan.png" />
          }
          caption={
            <p>
              「四川平原第一灶」，藏於寶墩遺址博物館（來源：
              <a href="https://zh.wikipedia.org/wiki/%E5%AE%9D%E5%A2%A9%E6%96%87%E5%8C%96">
                維基百科
              </a>
              ）
            </p>
          }
        />

        <Fig
          art={
            <img src="https://upload.wikimedia.org/wikipedia/commons/3/30/%E6%88%90%E9%83%BD%E9%9A%8B%E5%94%90%E7%AA%91%E5%9D%80%E5%8D%9A%E7%89%A9%E9%A6%86-%E6%96%B0%E7%9F%B3%E5%99%A8%E6%99%9A%E6%9C%9F-%E5%AE%9D%E5%A2%A9%E9%81%97%E5%9D%80%E5%87%BA%E5%9C%9F-%E9%99%B6%E5%B0%8A.jpg" />
          }
          caption={
            <p>
              陶尊，藏於成都隋唐窯址博物館（來源：
              <a href="https://zh.wikipedia.org/wiki/%E5%AE%9D%E5%A2%A9%E6%96%87%E5%8C%96">
                維基百科
              </a>
              ）
            </p>
          }
        />
      </Sec>

      <Sec>
        <p>越來越多的線索使得過去篤定的觀點變得不再牢靠。有學者（以鞠德源為例）認為，這種年代上的跨度暗示著華夏禮儀制度的起源來自於三星堆。誠然，從藝術品的形式上來看。不論這種觀點是否表達了某種真實，我們確實可以在近期博物館中展出文物中看見古蜀國與商周在藝術形式上的某些共同點。至於其中是否存在繼承關係，目前尚無定論。</p>

        <p>但是，無論如何，三星堆考古所帶來的諸多線索告訴我們：中華文化的起源遠比我們過去所認為的要複雜的多。而「博大精深」的中華文明，之所以表現出如此複雜的特性，也或許是由於這種尚在迷霧中的複雜起源。正如我們在《「中華文化有意思」從何而來？》中所表達的，中華文化是有意思的，而我們素來反對將中華文明看作是一個單一文化下的人口集合體。</p>

        <InArticleCard data={Post_3} />

        <p>三星堆遺址最早於1929年被當地農民偶然發現，然而，大規模的考古發掘工作始於1986年。當年，考古學家在遺址發現了兩個祭祀坑，出土了包括青銅器、玉器、金器在內的數千件珍貴文物。這些文物展示了古蜀人高度發達的冶金技術和藝術創造力，其中不乏造型獨特的青銅大面具和金杖，這在其他同時期的文化中極為罕見。</p>

        <InArticleNewsClip title={"四川廣漢三星堆考古的回顧、新發現與展望(一)"} link={"https://case.ntu.edu.tw/blog/?p=37422"} cover={"https://case.ntu.edu.tw/blog/wp-content/uploads/2021/10/00-683x1024.png"} brief={"三星堆文化是發現於中國四川成都平原的考古學文化，因1986年兩個大型器物坑的發現而受世人矚目，但也同時帶來許多研究問題。長期以來考古學家一直試圖在三星堆遺址群範圍內探尋類似的大型器物坑，意外在2019年底有所斬獲。六個大型器物坑的考古清理目前正進行中，新出土材料預期可提升對於三星堆文化的認識，並同時為諸多難題帶來解答。本文試圖就三星堆遺址群的田野考古歷程進行回顧，簡要說明三星堆K1、K2器物坑之於三星堆文化的幾個重要問題，並就目前對三星堆文化內涵的認識進行總結，釐清對三星堆文化的一些認知謬誤。"} date={[2021, 11, 5]} author={"Case 科學報"}/>

        <p>而最近，2020年以降，世界又引來了兩次三星堆考古的大發現。根據2021年3月20日「考古中國」發布的消息，考古队从新发现的六个祭祀坑中发掘出了500多件文物，其中一副仅存半边的黄金面具引起了社交媒体的热烈反响。根據2022年6月13日發布的消息，考古隊共計出土13000件來自商代晚期文物。此後，這些文物中的一小部分在各地博物館巡迴展出，其中包括我們所造訪過的上海博物館特展《星耀中国：三星堆·金沙古蜀文明展》。</p>

        <InArticleNewsClip title={"星耀中国：三星堆·金沙古蜀文明展"} link={"https://www.shanghaimuseum.net/mu/frontend/pg/m/article/id/E00004170"} cover={"https://www.shanghaimuseum.net/mu/upload/202401/e00fbce9-0aad-489c-9969-fd4ad5cad99f.jpg"} brief={"“君住长江头，我住长江尾”。长江造就了从巴山蜀水到江南水乡的千年文脉，是中华民族的代表性符号，也是中华文明起源、形成和发展的摇篮。长江上游的成都平原素有“天府之国”的美誉，河川绵亘，钟灵毓秀。长江下游的上海是具有世界影响力的社会主义现代化国际大都市，海纳百川，有容乃大。一衣带水的两地共同孕育了悠久、灿烂的古代文明，是中华文明“多元一体”格局的重要组成部分。"} date={[2021, 11, 5]} author={""} />

        <p>如果你曾造訪過2022年之後的那些三星堆特展，便會看到現場排起的長隊，甚至出現了黃牛倒賣門票的亂象。之所以考古發現有時如此牽動人們的心弦，一來勢必是處於好奇心，但更重要的是：現代考古發現不斷挑戰著我們對於古代世界的固有的那些「常識」。</p>

        <p>出於種種原因的考量，三星堆成為了「中華文化有意思」的一個重要的項目分支。該分支中包含書展、VR、AR 以及名家講座。我們希望，通過關於這種重要的話題的種種活動，可以讓學生們認識到一個更為複雜而鮮活的、關於起源時期的中華文化的認識，而不再停留在固有的刻板印象中。</p>
      </Sec>

      <Sec>
        <Fig
          art={
            <img src="https://i.pinimg.com/originals/00/e5/ca/00e5ca00a8ce4c966d2745bd51b7f0fa.jpg" />
          }
          caption={
            <p>
              「中華文化有意思」之《古蜀文化之源：三星堆文化》活動海報
            </p>
          }

          size="small"
        />
      </Sec>

      <ContactCallout />
    </>
  ),
};

export default Post_56;
