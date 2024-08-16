import React from "react"
import "./Fig.scss"

interface Props {
  art: JSX.Element
  caption?: JSX.Element | string
}

const Fig: React.FC<Props> = ({ art, caption }) => {
  return (
    <figure className="fig">
      <div className="art">
        {art}
      </div>
      
      {caption != undefined ?
        <figcaption>
          {caption}
        </figcaption>
        :
        ""
      }
    </figure>
  )
}

export default Fig