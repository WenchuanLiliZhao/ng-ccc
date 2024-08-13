interface Channel {
  info: {
    title: string,
    key: string,
    title_display: JSX.Element,
    brief: string,
  },

  content: JSX.Element,
}

export default Channel