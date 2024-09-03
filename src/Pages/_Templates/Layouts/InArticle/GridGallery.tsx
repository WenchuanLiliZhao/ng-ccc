import React from "react";

interface Art {
  src: string;
  caption?: JSX.Element | string;
}

interface Arts {
  arts: Art[];
}

const GridGallery: React.FC<Arts> = ({ arts }) => {
  return (
    <div className="lili-grid-gallery">
      {arts.map((item: Art, i: number) => (
        <div className="art" key={`${item}${i}`}>
          <div className="img-container">
            <img src={item.src} alt="" />
          </div>
          <div className="caption">
            {item.caption}
          </div>
        </div>
      ))}
    </div>
  );
};

export default GridGallery;
