import "./TitledSection.scss";

interface Props {
  title: string;
  brief: string;

  body: JSX.Element;
}

const TitledSection: React.FC<Props> = ({ title, brief, body }) => {

  const header = (
    <header>
      <div className="container">
        <h2 className="title">{title}</h2>
        <div className="brief">{brief}</div>
      </div>
    </header>
  );

  // const showHeader = title == "" || brief == ""

  return (
    <section className="titled-section">
      {header}

      {body}
    </section>
  );
};

export default TitledSection;
