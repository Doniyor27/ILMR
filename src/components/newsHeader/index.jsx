import React from "react";
import RightArrow from "../../assets/images/icons/right-arrow.svg";
import "./style.scss";
export default function NewsHeader({ name }) {
  return (
    <div className="newsHeader">
      <div className="newsHeader__title">
        <span className="newsHeader__title-border"></span>
        <h1 className="bold">{name}</h1>
        <a href="#" className="btn">
          <span>Barchasi</span>
          <img src={RightArrow} alt="" />
        </a>
      </div>
    </div>
  );
}
