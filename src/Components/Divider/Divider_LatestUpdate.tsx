import React from "react"
import DateFormatter from "../Functions/DateFormatter"

interface Props {
  date: number[],
  language: "zh" | "en",
}

const Divider_LatestUpdate: React.FC<Props> = ({date, language}) => {
  return (<>
    <div className="divider-latest-update">
      <div className="left"></div>
      <div className="mid">
        <DateFormatter date={date} language={language} />
      </div>
      <div className="right"></div>
    </div>
  </>)
}

export default Divider_LatestUpdate