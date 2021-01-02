import React from "react";

function Card(props)
{
    return <div className="term">
    <dt>
      <span className="emoji" role="img" aria-label= {props.title}>
        {props.icon}
      </span>
      <span>{props.title}</span>
    </dt>
    <dd>
      {props.description}
    </dd>
  </div>
}




export default Card;

