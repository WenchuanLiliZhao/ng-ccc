import Channel from "../../Pages/_Templates/Channel";
import "./ChannelPageHeader.scss";

interface Props {
  page: Channel;
}

const ChannelPageHeader: React.FC<Props> = ({ page }) => {
  if (page.info.showHeader != false) {
    return (
      <>
        <div className="channel-page-header">
          <div className="container">
            {page.info.label != null ? (
              <>
                <div className="label">{page.info.label}</div>
              </>
            ) : (
              <></>
            )}
            <h1 className="title">{page.info.title_display}</h1>
            <div className="brief">{page.info.brief}</div>
          </div>
        </div>
      </>
    );
  } else {
    return <></>;
  }
};

export default ChannelPageHeader;
