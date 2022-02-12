import React from "react";
import "./style.scss";
import StructureImg from "../../assets/images/tablitsa.jpg";
import Hero2 from "../../components/hero2";
import { heroData15 } from "../../components/heroData";

import BookCard from "../Books/components/bookCard";
export default function Structure() {
  const data = [
    {
      id: 1,
      text: "Tuzilma.pdf",
      type: "pdf",
    },
    {
      id: 2,
      text: "Ekskavatorlar va gusenitsali texnikani ta’mirlash zavodini qurish to‘g‘risida.docx",
      type: "doc",
    },
  ];
  return (
    <div className="structure">
      <Hero2 data={heroData15} index={3} />
      <div className="structure__inner container">
        <img src={StructureImg} alt="" />
        <div className="structure__file">
          {data.map((item, id) => (
            <BookCard text={item.text} type={item.type} key={id} />
          ))}
        </div>
      </div>
    </div>
  );
}
