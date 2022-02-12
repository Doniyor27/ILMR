import React, { useState } from "react";
import "./style.scss";
import { questionsData } from "../data";
export default function QuestionModal({ active, setActive }) {
  const [idItems, setIdItems] = useState([...questionsData[0].accardion]);
  const [show, setShow] = useState(1);
  const toggle = id => {
    if (show === id) {
      return setShow(null);
    }
    setShow(id);
  };

  return (
    <div
      className={active ? "modal active" : "modal"}
      onClick={() => setActive(false)}
    >
      <div className="modal__content" onClick={e => e.stopPropagation()}>
        <p className="modal_close" onClick={() => setActive(false)}>
          x
        </p>
        {idItems.map(item => (
          <div className="questions__box__card__accardion" key={item.id}>
            <div
              className="questions__box__card__accardion__info"
              onClick={() => toggle(item.id)}
            >
              <p>{item.title}</p>
              <span>{show === item.id ? "-" : "+"}</span>
            </div>
            <div
              className={`questions__box__card__accardion__text ${
                show === item.id ? "show" : ""
              }`}
            >
              <div className="questions__box__card__accardion__text__info">
                <p>{item.desc}</p>
                <div className="questions__box__card__accardion__text__info__opacity">
                  <a
                    href="#"
                    className="questions__box__card__accardion__text__a"
                  >
                    Batafsil o'qish
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
