interface Author {
  info: {
    title: string;
    key: string;
    latest_update: [number, number, number];
    
    brief?: string;
  };
  content: JSX.Element;
}

export default Author;
