import SiteInfo from "../../SiteInfo"
import Divider_LatestUpdate from "../Divider/LatestUpdate"
import "./Footer.scss"

export default function Footer() {
  return (<>
    <footer className="site-footer">
      <Divider_LatestUpdate date={SiteInfo.latest_update} language={"en"} />

      <div className="foot-body">
        <div className="site-info">
          info
        </div>
        <div className="links">
          links
        </div>
      </div>
    </footer>
  </>)
}