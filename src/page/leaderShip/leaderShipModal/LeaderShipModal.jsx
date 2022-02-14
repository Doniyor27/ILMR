import React from "react";
import "./style.scss";
export default function LeaderShipModal({ active, setActive, data }) {
  return (
    <div
      className={active ? "contactModal modal-show" : "contactModal"}
      onClick={() => setActive(false)}
    >
      {data.accardion.map((item, id) => (
        <div
          key={id}
          className="contactModal__inner"
          onClick={e => e.stopPropagation(e)}
        >
          <button onClick={() => setActive(false)}>x</button>
          <p>{item.desc}</p>
        </div>
      ))}
    </div>
  );
}
