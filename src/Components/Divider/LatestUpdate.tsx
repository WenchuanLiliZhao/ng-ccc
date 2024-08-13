import "./LatestUpDate.scss";

import React from "react";
import DateFormatter from "../Functions/DateFormatter";

interface Props {
  date: number[];
  language: "zh" | "en";
}

const Divider_LatestUpdate: React.FC<Props> = ({ date, language }) => {
  return (
    <>
      <div className="divider-latest-update">
        <div className="divider-latest-update-left">
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <div className="divider-latest-update-mid">
          <div className="divider-latest-update-text">
            <DateFormatter date={date} language={language} />
          </div>
        </div>
        <div className="divider-latest-update-right">
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>
    </>
  );
};

export default Divider_LatestUpdate;
