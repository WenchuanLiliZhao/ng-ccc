/* eslint-disable @typescript-eslint/no-explicit-any */
import "./AppStyle/_app.scss"

import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import AllPages from "./Pages/AllPages";


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

          <Route index element={AllPages.RootPage_Home.content} />

          {Object.values(AllPages).map((item: any, i: any) => (
            <Route
              key = {`${item}${i}`}

              path = {
                item.info.key != "*" ?
                `/${item.info.key}`: "*"
              }

              element = {item.content}
            />
          ))}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
