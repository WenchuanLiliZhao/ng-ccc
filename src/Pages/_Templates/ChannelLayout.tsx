import React from 'react';
import Channel from "./Channel";
import PageBody from './_PageBody';

interface Props {
  data: Channel,
}


const ChannelLayout: React.FC<Props> = ({ data }) => {
  return (<>
    <PageBody>
      {data.content}
    </PageBody>
  </>)
}

export default ChannelLayout