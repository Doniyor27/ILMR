import React from "react";
import "./style.scss";
import NewsHeader from "../../../../components/newsHeader";
import NewsImg from "../../../../assets/images/news_img1.png";
import NewsImgRight1 from "../../../../assets/images/news_img_right1.png";
import NewsImgRight2 from "../../../../assets/images/news_img_right2.png";
import NewsImgRight3 from "../../../../assets/images/news_img_right3.png";

export default function News() {
  const newsImgData = [
    {
      id: 1,
      img: NewsImg,
      description:
        "“Ishga marhamat” monomarkazlarida turkiyalik mutaxassislar faoliyat olib bormoqda",
      time: "Mart 01.2021",
    },

    {
      id: 2,
      country: "O'zbekiston yangiliklari",
      description:
        "Bir nafar o‘zbekistonlikka o‘rtacha necha dona naqd pul to‘g‘ri keladi? So‘m banknotlarini ishlab chiqarish qanchaga tushyapti?",
      time: "Mart 01.2021",
      img: NewsImgRight1,
    },
    {
      id: 3,
      country: "O'zbekiston yangiliklari",
      description:
        "Reforms.uz platformasi orqali mamlakatimizning har bir fuqarosi o‘zini qiziqtiruvchi ",
      time: "Mart 01.2021",
      img: NewsImgRight2,
    },
    {
      id: 4,
      country: "O'zbekiston yangiliklari",
      description: "Tomsk fojiasiga 2 yil: dahshatli tunning so‘nmagan olovi",
      time: "Mart 01.2021",
      img: NewsImgRight3,
    },
  ];

  return (
    <div className="news container">
      <NewsHeader name="Yangiliklar" />
      <div className="news__container-flex">
        <div className="news__card">
          {newsImgData.slice(0, 1).map((item, id) => (
            <div className="news__card-overflow" key={id}>
              <div className="news__card-inner">
                <div className="news__card-img">
                  <img src={item.img} alt="" />
                  <div className="news__img-background"></div>
                </div>
                <div className="news__card-p bold">
                  <p className="text-p">{item.description}</p>
                  <p>{item.time}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="news__card">
          {newsImgData.slice(1, 4).map((item, id) => (
            <div className="news__card__box" key={id}>
              <a href="#" className="bold news__box__a-block">
                {item.country}
              </a>
              <div className="news__box-flex">
                <div className="news__box-flex_order">
                  <a href="#" className="news__box__a-none bold">
                    {item.country}
                  </a>
                  <p className="bold">
                    {item.description?.length < 120
                      ? item.description
                      : item.description.slice(0, 120) + "..."}
                  </p>
                </div>
                <img src={item.img} alt="" />
              </div>
              <p className="news__card__box-time bold">{item.time}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
