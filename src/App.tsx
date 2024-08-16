import "./AppStyle/_app.scss"

import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Channels from "./Pages/Channels/Channels";
import ChannelLayout from "./Pages/_Templates/ChannelLayout";
import Page from "./Pages/_Templates/Page";
import Posts from "./Pages/Posts/Posts";

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

          {Object.values(Channels).map((item: Page, i: number) => (
            <Route
              key = {`${item}${i}`}

              path = {`/${item.info.key}`}

              element = {<>
                <ChannelLayout data={item} />
              </>}
            />
          ))}

          {Object.values(Posts).map((item: Page, i: number) => (
            <Route
              key = {`${item}${i}`}

              path = {`/${item.info.key}`}

              element = {item.content}
            />
          ))}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
