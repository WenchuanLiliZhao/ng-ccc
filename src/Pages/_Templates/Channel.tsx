interface Channel {
  info: {
    title: string,
    key: string,
    title_display: JSX.Element,
    brief: string,

    label?: string,
    front?: JSX.Element,

    showHeader?: boolean,
  },

  content: JSX.Element,
}

export default Channel