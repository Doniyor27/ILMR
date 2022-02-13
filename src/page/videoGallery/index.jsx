import React, { useState } from "react";
import MediatekaBottom from "./MediatekaBottom";
import MediatekaTop from "./MediatekaTop";
import MediatekaOneTop1 from "../../assets/images/mediatekaOneTop1.png";
import MediatekaOneTop2 from "../../assets/images/mediatekaOneTop2.png";
import MediatekaOneBottom1 from "../../assets/images/mediatekaOneBottom1.png";
import MediatekaOneBottom2 from "../../assets/images/mediatekaOneBottom2.png";
import MediatekaOneBottom3 from "../../assets/images/mediatekaOneBottom3.png";
import MediatekaOneBottom4 from "../../assets/images/mediatekaOneBottom4.png";
import Hero2 from "../../components/hero2";
import "./style.scss";
import { heroData10 } from "../../components/heroData";
export default function MediatekaOne() {
  const mediatekaOneData = [
    {
      id: 1,
      title:
        "“Ishga marhamat” monomarkazlarida turkiyalik mutaxassislar faoliyat olib bormoqda",
      time: "Mart 01, 2021 ",
      img: MediatekaOneTop1,
      path: "#",
    },
    {
      id: 2,
      title:
        "“Ishga marhamat” monomarkazlarida turkiyalik mutaxassislar faoliyat olib bormoqda",
      time: "Mart 01, 2021 ",
      img: MediatekaOneTop2,
      path: "#",
    },
    {
      id: 3,
      country: "O’zbekiston yangiliklari",
      desc: "Asosiy hamkorlar, oltini tashqi savdosi",
      img: MediatekaOneBottom1,
      path: "#",
    },
    {
      id: 4,
      country: "Jaxon yangiliklari",
      desc: "Asosiy hamkorlar, oltin va mashinalar - O‘zbekistonning 2021 yilgi tashqi savdosi",
      img: MediatekaOneBottom2,
      path: "#",
    },
    {
      id: 5,
      country: "Anons",
      desc: "Asosiy hamkorlar, oltin va mashinalar - O‘zbekistonning 2021 yilgi tashqi savdosi",
      img: MediatekaOneBottom3,
      path: "#",
    },
    {
      id: 6,
      country: "E’lon",
      desc: "Asosiy hamkorlar, oltin va mashinalar - O‘zbekistonning 2021 yilgi tashqi savdosi",
      img: MediatekaOneBottom4,
      path: "#",
    },
  ];
  const [mediaData, setMediaData] = useState(mediatekaOneData);

  return (
    <>
      <Hero2 data={heroData10} index={10} />
      <div className="mediatekaOne container">
        <div className="mediatekaOne__top">
          <MediatekaTop mediaData={mediaData} />
        </div>
        <div className="mediatekaOne__bottom">
          <MediatekaBottom mediaData={mediaData} />
        </div>
      </div>
    </>
  );
}
