import "./Tag.scss"
// import Template_Page from "../../Pages/_Templates/Template_Page";

interface Props {
  tagName: string;
  size: 12 | 14 | 16;
}

const Tag: React.FC<Props> = ({ tagName: data, size }) => {
  return (
    <span
      className="inline-tag"
      style={{
        fontSize: `${size}px`,
      }}
    >
      {data}
    </span>
  )
}

export default Tag