import React from "react";
import "./style.scss";
import NewsImg from "../../../../assets/images/news_img1.png";
import NewsImgRight1 from "../../../../assets/images/news_img_right1.png";
import NewsImgRight2 from "../../../../assets/images/news_img_right2.png";
import NewsImgRight3 from "../../../../assets/images/news_img_right3.png";
import NewsHeader from "../../../../components/newsHeader";
import { Link } from "react-router-dom";

export default function News() {
  const newsImgData = [
    {
      id: 1,
      img: NewsImg,
      description:
        "“Ishga marhamat” monomarkazlarida turkiyalik mutaxassislar faoliyat olib bormoqda",
      time: "Mart 01.2021",
      path: "#",
    },

    {
      id: 2,
      country: "O'zbekiston yangiliklari",
      description:
        "Bir nafar o‘zbekistonlikka o‘rtacha necha dona naqd pul to‘g‘ri keladi? So‘m banknotlarini ishlab chiqarish qanchaga tushyapti?",
      time: "Mart 01.2021",
      img: NewsImgRight1,
      path: "#",
    },
    {
      id: 3,
      country: "O'zbekiston yangiliklari",
      description:
        "Reforms.uz platformasi orqali mamlakatimizning har bir fuqarosi o‘zini qiziqtiruvchi ",
      time: "Mart 01.2021",
      img: NewsImgRight2,
      path: "#",
    },
    {
      id: 4,
      country: "O'zbekiston yangiliklari",
      description: "Tomsk fojiasiga 2 yil: dahshatli tunning so‘nmagan olovi",
      time: "Mart 01.2021",
      img: NewsImgRight3,
      path: "#",
    },
  ];

  return (
    <div className="news container">
      <NewsHeader name="Yangiliklar" />
      <div className="news__inner">
        <div className="news__box">
          {newsImgData.slice(0, 1).map((item, id) => (
            <Link to={item.path} key={id}>
              <div className="news__box__left">
                <img src={item.img} alt="" />
                <div className="news__box__left-background"></div>
                <div className="news__box__left__p">
                  <p>{item.description}</p>
                  <p>{item.time}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="news__box">
          {newsImgData.slice(1, 4).map((item, id) => (
            <Link to={item.path} className="news__right" key={id}>
              <div className="news__card__box">
                <h4>{item.country}</h4>
                <div className="news__card__inner">
                  <div className="news__card__inner-text">
                    <h4>{item.country}</h4>
                    <p>{item.description}</p>
                  </div>
                  <img src={item.img} alt="" />
                </div>
                <p>{item.time}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
