import React from "react";


function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <img className="circle-img" src="" alt="avatar_img" />
      </div>
      <div className="bottom">
        <p className="info">{props.description}</p>
        <a href={props.link} className="button">My Button</a>
      </div>
    </div>
  );
}

export default Card;