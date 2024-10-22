// Template_Page.tsx

import Template_Author from "./Template_AuthorsInPost"

interface Template_Page {
  info: {
    title: string,
    key: string,
    brief: string,
    latest_update: [number, number, number],

    cover?: string,

    label?: string,
    front?: JSX.Element,

    showHeader?: boolean,
    title_display?: JSX.Element,
    authors?: Template_Author[],
    
    keywords?: string[],
  },

  content: JSX.Element | JSX.Element[],
}

export default Template_Page