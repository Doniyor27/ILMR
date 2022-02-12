import React from "react";
import "./style.scss";
import Play from "../../assets/images/icons/mediatekaOneTop.svg";
export default function MediatekaVideo({ item }) {
  return (
    <div className="mediatekaVideo">
      <div className="mediatekaVideo__img__inner">
        <img src={item.img} alt="" className="mediatekaVideo__img" />
        <div className="play__icon">
          <img src={Play} alt="" />
        </div>
      </div>
      <div className="mediatekaVideo__text">
        <span>{item.country}</span>
        <p>{item.desc}</p>
      </div>
    </div>
  );
}
