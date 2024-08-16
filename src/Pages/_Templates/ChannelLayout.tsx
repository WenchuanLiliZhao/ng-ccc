import React from "react";
import Page from "./Page";
import PageBody from "./_PageBody";
import ChannelPageHeader from "../../Components/Sections/ChannelPageHeader";

interface Props {
  data: Page;
}

const ChannelLayout: React.FC<Props> = ({ data }) => {
  return (
    <>
      <PageBody>
        <>
          {data.info.front != null ? data.info.front : (<></>)}
          <ChannelPageHeader page={data} />
          {data.content}
        </>
      </PageBody>
    </>
  );
};

export default ChannelLayout;
