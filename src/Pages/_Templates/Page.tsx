import Author from "./Author";
interface Page {
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
    authors?: {author: Author, role?: string}[],
  },

  content: JSX.Element,
}

export default Page