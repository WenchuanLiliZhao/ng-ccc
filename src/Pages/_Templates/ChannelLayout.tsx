import React from "react";
import Channel from "./Channel";
import PageBody from "./_PageBody";
import ChannelPageHeader from "../../Components/Sections/ChannelPageHeader";

interface Props {
  data: Channel;
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
