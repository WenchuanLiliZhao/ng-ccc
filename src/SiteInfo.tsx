import Today from "./Components/Functions/Today"
import Site from "./InfoTemplates/SiteInfoTemplate"
import SocialMedia from "./InfoTemplates/SocialMedia"
import LogoImage from "./assets/LogoImage.png"
import Logo from "./assets/Logo.png"
import Author_Suep from "./Pages/Authors/Author_Suep"

const social_medias: { [key: string]: SocialMedia } = {
  facebook: {
    title: "Facebook",
    link: "https://www.facebook.com/profile.php?id=61559566926404"
  },
  youtube: {
    title: "YouTube",
    link: "https://www.youtube.com/@CharmingChineseCulture"
  },
  instagramm: {
    title: "Instagramm",
    link: "https://www.instagram.com/nowbook_hk/"
  },

  wechat: {
    title: "知書 HK",
    link: "http://mp.weixin.qq.com/mp/homepage?__biz=MzUxNDY3MDA0NQ==&hid=7&sn=78400cd50d43032db956f463d52cf880&scene=18#wechat_redirect"
  }
};

const SiteInfo: Site = {
  title: "中華文化有意思",

  url: "https://charmingchineseculture.com/",

  author: Author_Suep,

  logo: {
    image: LogoImage,
    text: (<img src={Logo}/>),
  },

  brief: "「中華文化有意思」是聯合出版集團旗下聯合電子出版有限公司創立的新品牌，提供一站式服務，從「中華非遺手工課」到「中華文化沉浸式體驗」，利用元宇宙（AR/VR/MR)和AI等高端科技，以全新的角度去體驗中國傳統文化和當代科技發展！ 現誠邀各位老師蒞臨，親身感受是次中華文化體驗日，攜手開創新的文化傳播道路。",

  latest_update: [2024, 9, 1],

  social_medias: social_medias,

  copyright: `©SINO UNITED ELECTRONIC PUBLISHING LTD ${String(Today[0])}`,

  contact: {
    address: {
      title: "公司地址",
      info: "香港九龍長沙灣永康街77號環薈中心1011室"
    },

    phone: {
      title: "業務拓展部",
      info: "（852）9824 9587",
    },

    mail: {
      title: "電郵",
      info: "marketing@suep.com",
    },

    whatsApp: {
      title: "中華文化研習社WhatsApp群組",
      info: "https://chat.whatsapp.com/BNS5UfWFlak7z2v22Lh3Zn",
    },
  }
}

export default SiteInfo