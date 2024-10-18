import ContactCallout from "../../../Components/Callouts/ContactCallout";
import Sec from "../../_Templates/Layouts/InArticle/_ArticleSection";
import Fig from "../../_Templates/Layouts/InArticle/Fig";
import Template_Page from "../../_Templates/Template_Page";
import Authors from "../../Authors/_Authors";

const Post_11: Template_Page = {
  info: {
    title: "行走的圖書館：元宇宙升級版",
    key: "post_11",
    brief:
      "聯合出版集團SUPer青年營「行走的圖書館」公益文化活動於5月6日至10日舉辦，由聯合電子出版有限公司提供的「流動圖書車——元宇宙升級版」為香港多間中小學帶來獨特閱讀體驗。體驗活動採用VR全景沉浸閱讀、電子視聽等數字化技術，配合VR眼鏡及AI機械人等，以「科技+傳統文化」的方式為學生帶來元宇宙視覺下的全新閱讀體驗。",
    latest_update: [2024, 9, 1],
    cover:
      "https://i.pinimg.com/1200x/4c/65/47/4c65472af74588141419c885ed5f0303.jpg",
    label: undefined,
    front: undefined,
    showHeader: undefined,
    title_display: undefined,
    authors: [
      {
        data: Authors.Author_Suep,
      },
    ],
    keywords: ["行走的圖書館", "元宇宙", "VR沉浸式閱讀", "流動圖書車", "全民閱讀日", "香港", "中華文化", "青少年閱讀", "科技+傳統文化", "聯合出版集團", "SUPer青年營", "公益文化活動", "電子出版", "圖書", "閱讀體驗", "中小學", "教育", "數字化技術", "AI機械人", "香港三聯書店", "中華書局", "商務印書館", "萬里機構", "新雅文化", "中和出版", "VR眼鏡", "電子視聽"],
  },
  content: (
    <>
      <Sec size="large">
        <Fig
          art={
            <>
              <img
                src="https://i.pinimg.com/1200x/4c/65/47/4c65472af74588141419c885ed5f0303.jpg"
                alt=""
              />
            </>
          }
          caption={
            <p>
              Photo by{" "}
              <a href="https://unsplash.com/@zekedrone">Martin Sanchez</a> on{" "}
              <a href="https://unsplash.com/">Unsplash</a>
            </p>
          }
        />
      </Sec>

      <Sec>
        <p>
          香港特區政府將今年4月23日設為香港首個全民閱讀日，為營造閱讀氛圍、共建書香城市，聯合出版集團SUPer青年營「行走的圖書館」公益文化活動於5月6日至10日載譽歸來，以流動圖書車為香港多間中小學帶來獨特閱讀體驗。
        </p>

        <Fig
          art={
            <>
              <img
                src="https://i.pinimg.com/1200x/9a/fc/00/9afc00f4da1008e19c06cadc5f722b4f.jpg"
                alt=""
              />
            </>
          }
          caption={"嶺南中學師生與流動圖書車合影"}
        />

        <p>
          2024年度「行走的圖書館」活動為期一周，升級為元宇宙版本。流動圖書車裝飾煥然一新，駛入新生命教育協會平安福音中學、嘉諾撒聖家學校
          、救世軍卜維廉中學 、香港道教聯合會圓玄學院第三中學
          、宣道會陳朱素華紀念中學 、香港神託會培敦中學
          、慈雲山聖文德天主教小學、嶺南中學、英華小學九所學校，介紹香港三聯書店、中華書局、商務印書館、萬里機構、新雅文化、中和出版等多間出版社的優質圖書及文創產品。
        </p>

        <Fig
          art={
            <>
              <img
                src="https://i.pinimg.com/1200x/c0/a4/ce/c0a4ce3b76e430aa1e9cf6c2233f3c97.jpg"
                alt=""
              />
            </>
          }
          caption={"宣道會陳朱素華紀念中學師生與流動圖書車合影"}
        />

        <p>
          這次，「行走的圖書館」元宇宙升級版更有聯合電子出版有限公司參與，採用VR全景沉浸閱讀、電子視聽等數字化技術，配合VR眼鏡及AI機械人等，以「科技+傳統文化」的方式為學生帶來元宇宙視覺下的全新閱讀體驗。
        </p>

        <Fig
          art={
            <>
              <img
                src="https://i.pinimg.com/1200x/9f/ed/e9/9fede9502d6d93b8874810822455ad36.jpg"
                alt=""
              />
            </>
          }
          caption={"宣道會陳朱素華紀念中學學生體驗VR眼鏡"}
        />

        <p>
          在嘉諾撒聖家學校，參與是次「行走的圖書館」活動的主要是六年級學生。此年齡段的學生，自主意識逐步發展，對世界和人生有著強烈的探究慾，也開始面對青春期生理、心理的一些變化。
        </p>
        <p>
          為了滿足她們的閱讀需要，活動提供了中華文化類圖書、故事書、青春期科普圖書等多領域書籍。不少學生表示，「行走的圖書館」推介的圖書價格親民，令她們更有動力購書、讀書。
        </p>
      </Sec>

      <ContactCallout />
    </>
  ),
};

export default Post_11;
