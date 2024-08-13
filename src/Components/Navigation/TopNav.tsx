import Channel from "../../Pages/_Templates/Channel";
import NavLink2Top from "../Links/NavLink2Top";
import SiteInfo from "../../SiteInfo";
import Channels from "../../Pages/Channels/Channels";

const channels = [
  Channels.Channel_Home,
  Channels.Channel_Service,
  Channels.Channel_Nblib,
  Channels.Channel_Hardware,
  Channels.Channel_Contact,
];

export default function TopNav() {
  return (
    <>
      <div className="top-nav">
        <div className="top-nav-left">
          <a href="/" className="top-nav-logo">
            <div className="top-nav-logo-image">{SiteInfo.logo.image}</div>
            <div className="top-nav-logo-text">{SiteInfo.logo.text}</div>
          </a>
        </div>

        <div className="top-nav-right">
          <div className="top-nav-channels">
            {channels.map((item: Channel, i: number) => (
              <NavLink2Top
                to={`/${item.info.key}`}
                className="top-nav-channel channel"
                key={`${item}${i}`}
              >
                {item.info.title}
              </NavLink2Top>
            ))}

            <NavLink2Top className="top-nav-channel" to={`/${Channels.Channel_Search.info.key}`}>
              <span className="material-symbols-outlined">search</span>
            </NavLink2Top>

            <div className="top-nav-menu"></div>
          </div>
        </div>
      </div>
    </>
  );
}
