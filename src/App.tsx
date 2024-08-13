import "./AppStyle/_app.scss"

import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Channels from "./Pages/Channels/Channels";
import ChannelLayout from "./Pages/_Templates/ChannelLayout";
import Channel from "./Pages/_Templates/Channel";

function App() {
  useState(() => {
    // console.log()
    const greetings = "Hello, World"
    console.log(greetings)
  });

  useEffect(() => {
    // console.log()
  }, []);



  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path="*" element={<NotFound />}/> */}

          <Route index element={<>
              <ChannelLayout data={Channels.Channel_Home} />
            </>} />

          {Object.values(Channels).map((item: Channel, i: number) => (
            <Route
              key = {`${item}${i}`}

              path = {`/${item.info.key}`}

              element = {<>
                <ChannelLayout data={item} />
              </>}
            />
          ))}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
