import Divider_LatestUpdate from "../../Components/Divider/Divider_LatestUpdate";
import TopNav from "../../Components/Navigation/TopNav";
import SiteInfo from "../../SiteInfo";
import "./_PageBody.scss";
import React from "react";

interface Props {
  children: JSX.Element,
}

const PageBody: React.FC<Props> = ({ children }) => {
  return (<>
    <div className="page-body">
      <main>
        <Divider_LatestUpdate date={SiteInfo.latest_update} language="en"/>
        <TopNav />
        {children}
      </main>
    </div>
  </>)
}

export default PageBody