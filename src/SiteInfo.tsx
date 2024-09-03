import Today from "./Components/Functions/Today"
import Site from "./InfoTemplates/SiteInfoTemplate"
import SocialMedia from "./InfoTemplates/SocialMedia"

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
  }
};

const SiteInfo: Site = {
  title: "中華文化有意思",

  logo: {
    image: "https://i.pinimg.com/564x/2c/e1/e4/2ce1e48ee3409c69fb55ef47e21b73a9.jpg",
    text: (<strong className="ff-serif">中華文化有意思</strong>),
  },

  brief: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent augue metus, volutpat sed interdum quis, rutrum vel odio. Cras velit nisl, facilisis condimentum velit at, laoreet porttitor turpis. Integer luctus consequat sem vitae imperdiet.",

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
    }
  }
}

export default SiteInfo