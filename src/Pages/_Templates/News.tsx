interface News {
  info: {
    title: string;
    key: string;
    cover: string;
    date: [number, number, number];
    brief: string;
    publication: string;
  };
}

export default News;
