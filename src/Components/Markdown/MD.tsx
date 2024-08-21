/* eslint-disable @typescript-eslint/no-explicit-any */
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';

interface Props {
  children: any
  align?: "center"
}

const MD: React.FC<Props> = ({ children, align }) => {

  return (
    <ReactMarkdown
      remarkPlugins={[remarkMath]}
      rehypePlugins={[rehypeKatex]}
      className={`${align}`}
    >
      {children}
    </ReactMarkdown>
  );
};

export default MD
