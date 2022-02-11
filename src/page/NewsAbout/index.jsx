import React, { useState } from "react";
import NewsAboutImg from "../../assets/images/newsAboutImg.png";
import "./style.scss";
import Qoute1 from "../../assets/images/qoute1.png";
import Qoute2 from "../../assets/images/qoute2.png";

export default function NewsAbout() {
  const newsAboutData = [
    {
      id: 1,
      img: NewsAboutImg,
      title:
        "Аziz doʼstlar! Mehnat bozori tadqiqotlari instituti veb-sahifasiga xush kelibsiz.",
      info: [
        {
          id: 1,
          desc: "Tarixga nazar tashlasak, Institut dastlab 1977 yilda SSSR Davlat mehnat va ijtimoiy masalalar qoʼmitasi Mehnat ilmiy-tadqiqot institutining Oʼzbekiston filiali sifatida tashkil etilib, mustaqillik yillarida va bugungi kunga qadar Oʼzbekiston Respublikasi Mehnat vazirligi huzuridagi mehnat va ijtimoiy masalalar, aholini ish bilan taʼminlash hamda mehnatni muhofaza qilish yoʼnalishidagi foliyatida salkam 45 yillik yoʼlni bosib oʼtdi.",
        },
        {
          id: 2,
          desc: "Sir emaski, soʼnggi besh yil davomida mamlakatimiz jahon hamjamiyati eʼtirofiga loyiq ulkan islohotlar markazi sifatida namoyon boʼlmoqda. Xususan, mamlakatimizda inson kapitalini toʼlaqonli rivojlantirish, oliy va professional taʼlimning sifatini oshirish, mehnat bozorining rivojlanishi tendentsiyalarini inobatga olgan holda, aholining keng qatlamlarini talab yuqori boʼlgan kasblarga oʼqitish hamda malakali kadrlarni tayyorlashning sifat jihatidan yangi tizimini joriy etish ustuvor vazifa sifatida qaralmoqda.",
        },
        {
          id: 3,
          desc: "Oʼzbekiston Respublikasi Prezidentining 2020 yil 31 dekabrdagi «Malakalarni baholash tizimini tubdan takomillashtirish va mehnat bozorini malakali kadrlar bilan taʼminlash chora-tadbirlari toʼgʼrisida»gi qarorida Bandlik va mehnat munosabatlari vazirligi huzuridagi Respublika bandlik va mehnat muhofazasi ilmiy markazini Bandlik va mehnat munosabatlari vazirligi huzuridagi Mehnat bozori tadqiqotlari instituti etib qayta tashkil etish va unga Kasbiy malaka va bilimlarni rivojlantirish boʼyicha Kengashning ishchi organi vazifasi yuklatilishi belgilandi.",
        },
        {
          id: 4,
          desc: "Shundan soʼng, Hukumatning 2021 yil 30 sentyabrdagi maxsus qarori bilan Oʼzbekiston Respublikasi Bandlik va mehnat munosabatlari vazirligi huzurida Mehnat bozori tadqiqotlari instituti tashkil etildi",
        },
        {
          id: 5,
          desc: " Yangi Oʼzbekiston – inson qadri ustuvor boʼlgan jamiyat va xalqparvar davlatdir va shunday ekan unda munosib mehnat, mehnat unumdorligini taʼminlash eng oliy vazifalardan biridir. ",
        },
        {
          id: 6,
          desc: " Mehnat institutining missiyasi – inson bugun, ertaga va har doim munosib mehnat va toʼlaqonli turmush kechirishga haqli ekanligini ilmiy asoslash, shuningdek, har kimning farovon hayot toʼgʼrisidagi orzularini real voqelikka aytantirishga ilhomlantirishni nazarda tutadi.",
        },
        {
          id: 7,
          desc: " Mehnat institutining strategik maqsadi – yangi sifat va formatda inson kapitalini toʼlaqonli rivojlantirish, oliy va professional taʼlimning samaradorligini oshirish, mehnat bozorining rivojlanishi tendentsiyalarini inobatga olgan holda, aholining keng qatlamlarini talab yuqori boʼlgan kasblarga oʼqitish hamda malakali kadrlarni tayyorlash tizimini joriy qilishda ilmiy pozitsiyani ilgari surishdan iborat.",
        },
        {
          id: 8,
          desc: "Mehnat instituti ishtiyoq, aniqlik, ochiqlik, innovatsion fikrlash, rivojlanish, samaradorlik va professionalizm qadriyatlari asosida oʼzligini namoyon etadi va barchaga ishonchli hamkorlik uchun oʼz eshiklarini ochadi.",
        },
        {
          id: 9,
          desc: "Shu maqsadlarga erishish yoʼlida Sizni hamkorlikka chorlab qolamiz!",
        },
      ],
    },
  ];

  return (
    <div className="newsAbout container">
      <div className="newsAbout__inner">
        <div className="newsAbout__left">
          {newsAboutData.map(item => (
            <div className="newsAbout__left__info" key={item.id}>
              <h3>{item.title}</h3>
              <p>{item.info[0].desc}</p>
              <p>{item.info[1].desc}</p>
              <p>{item.info[2].desc}</p>
              <p>{item.info[3].desc}</p>
              <div className="newsAbout__left__p">
                <img src={Qoute1} alt="" />
                <img src={Qoute2} alt="" />
                <p>{item.info[4].desc}</p>
              </div>
              <p>{item.info[5].desc}</p>
              <p>{item.info[6].desc}</p>
              <p>{item.info[7].desc}</p>
              <p>{item.info[8].desc}</p>
            </div>
          ))}
          <h1>
            Murodullo <br /> Xolmuxamedov
          </h1>
        </div>
        <div className="newsAbout__right">
          {newsAboutData.map((item, id) => (
            <img src={item.img} alt="" key={id} />
          ))}
        </div>
      </div>
    </div>
  );
}
