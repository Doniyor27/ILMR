import React from "react";
import { Link } from "react-router-dom";
import LaboratoryImg1 from "../../../../assets/images/laboratory_left_img1.png";
import LaboratoryImgRight1 from "../../../../assets/images/laboratory_right_img1.png";
import LaboratoryImgRight2 from "../../../../assets/images/laboratory_right_img2.png";
import "./style.scss";
export default function Laboratory() {
  const laboratoryData = [
    {
      id: 1,
      text: "Mehnatni muhofaza qilish boʼyicha markaziy laboratoriya",
      img: LaboratoryImgRight1,
      path: "#",
    },
    {
      id: 2,
      text: "Shaxsiy himoya vositalarini sertifikatlashtirish",
      img: LaboratoryImg1,
      path: "#",
    },
    {
      id: 3,
      text: "Mehnat gigienasi laboratoriyasi",
      img: LaboratoryImgRight2,
      path: "#",
    },
  ];

  return (
    <div className="laboratory container">
      <div className="laboratory__inner">
        <div className="laboratory__content">
          <div className="laboratory__header">
            <h1>Laboratory</h1>
            <span></span>
          </div>
          <div className="laboratory__card__box-p">
            <p>
              Mehnat instituti qoshidagi laboratoriyada mehnatni muhofaza
              qilish, shaxsiy himoya vositalarini sertifikatlashtirish, mehnat
              gigienasi tashkillashtirish kabilar tadqiq etilib, joriy qilinadi.
            </p>
            <p>
              Mehnat instituti qoshidagi laboratoriyada mehnatni muhofaza
              qilish, shaxsiy himoya vositalarini sertifikatlashtirish, mehnat
              gigienasi tashkillashtirish kabilar tadqiq etilib, joriy qilinadi.
            </p>
          </div>
        </div>
        {laboratoryData.map(({ path, id, img, text }) => (
          <Link to={path} key={id}>
            <div className="laboratory__box">
              <div className="laboratory__image">
                <img src={img} alt="" className={`laboratory__img${id}`} />

                <div className={`laboratory__background${id}`}></div>
                <p>{text?.length < 80 ? text : text.slice(0, 80) + "..."}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
