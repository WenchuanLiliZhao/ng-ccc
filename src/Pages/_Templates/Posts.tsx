import Author from "./Author"

interface Post {
  info: {
    title: string,
    key: string,
    cover: string,
    latest_update: [number, number, number],
    brief: string,
    authors: {author: Author, role?: string}[],
  },

  content: JSX.Element,
}

export default Post