import Site from "./InfoTemplates/SiteInfoTemplate"

const SiteInfo: Site = {
  title: "中華文化有意思",

  logo: {
    image: "https://i.pinimg.com/564x/2c/e1/e4/2ce1e48ee3409c69fb55ef47e21b73a9.jpg",
    text: (<strong className="ff-serif">中華文化有意思</strong>),
  },

  brief: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent augue metus, volutpat sed interdum quis, rutrum vel odio. Cras velit nisl, facilisis condimentum velit at, laoreet porttitor turpis. Integer luctus consequat sem vitae imperdiet.",

  latest_update: [2024, 9, 1],

  social_medias: {
    facebook: {
      title: "Facebook",
      link: "https://www.youtube.com/"
    },

    youtube: {
      title: "Youtube",
      link: "https://www.youtube.com/"
    },

    instagramm: {
      title: "Instagramm",
      link: "https://www.youtube.com/"
    }
  }
}

export default SiteInfo