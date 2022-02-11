import React from "react";
import "./style.scss";
import BukletImg from "../../assets/images/bukletImg.png";
import Hero2 from "../../components/hero2";
import { heroData9 } from "../../components/heroData";
export default function Bukletlar() {
  const content = `
  <p>Tarixga nazar tashlasak, Institut dastlab 1977 yilda SSSR Davlat mehnat va ijtimoiy masalalar qoʼmitasi Mehnat ilmiy-tadqiqot institutining Oʼzbekiston filiali sifatida tashkil etilib, mustaqillik yillarida va bugungi kunga qadar Oʼzbekiston Respublikasi Mehnat vazirligi huzuridagi mehnat va ijtimoiy masalalar, aholini ish bilan taʼminlash hamda mehnatni muhofaza qilish yoʼnalishidagi foliyatida salkam 45 yillik yoʼlni bosib oʼtdi.</p>
  <p>Sir emaski, soʼnggi besh yil davomida mamlakatimiz jahon hamjamiyati eʼtirofiga loyiq ulkan islohotlar markazi sifatida namoyon boʼlmoqda. Xususan, mamlakatimizda inson kapitalini toʼlaqonli rivojlantirish, oliy va professional taʼlimning sifatini oshirish, mehnat bozorining rivojlanishi tendentsiyalarini inobatga olgan holda, aholining keng qatlamlarini talab yuqori boʼlgan kasblarga oʼqitish hamda malakali kadrlarni tayyorlashning sifat jihatidan yangi tizimini joriy etish ustuvor vazifa sifatida qaralmoqda.</p>
  <p> Oʼzbekiston Respublikasi Prezidentining 2020 yil 31 dekabrdagi «Malakalarni baholash tizimini tubdan takomillashtirish va mehnat bozorini malakali kadrlar bilan taʼminlash chora-tadbirlari toʼgʼrisida»gi qarorida Bandlik va mehnat munosabatlari vazirligi huzuridagi Respublika bandlik va mehnat muhofazasi ilmiy markazini Bandlik va mehnat munosabatlari vazirligi huzuridagi Mehnat bozori tadqiqotlari instituti etib qayta tashkil etish va unga Kasbiy malaka va bilimlarni rivojlantirish boʼyicha Kengashning ishchi organi vazifasi yuklatilishi belgilandi.</p>
  <p> Shundan soʼng, Hukumatning 2021 yil 30 sentyabrdagi maxsus qarori bilan Oʼzbekiston Respublikasi Bandlik va mehnat munosabatlari vazirligi huzurida Mehnat bozori tadqiqotlari instituti tashkil etildi.</p>
  <p>Yangi Oʼzbekiston – inson qadri ustuvor boʼlgan jamiyat va xalqparvar davlatdir va shunday ekan unda munosib mehnat, mehnat unumdorligini taʼminlash eng oliy vazifalardan biridir.</p>
  <p> Mehnat institutining missiyasi – inson bugun, ertaga va har doim munosib mehnat va toʼlaqonli turmush kechirishga haqli ekanligini ilmiy asoslash, shuningdek, har kimning farovon hayot toʼgʼrisidagi orzularini real voqelikka aytantirishga ilhomlantirishni nazarda tutadi. </p>
  <p>Mehnat institutining strategik maqsadi – yangi sifat va formatda inson kapitalini toʼlaqonli rivojlantirish, oliy va professional taʼlimning samaradorligini oshirish, mehnat bozorining rivojlanishi tendentsiyalarini inobatga olgan holda, aholining keng qatlamlarini talab yuqori boʼlgan kasblarga oʼqitish hamda malakali kadrlarni tayyorlash tizimini joriy qilishda ilmiy pozitsiyani ilgari surishdan iborat.</p>
  <p> Mehnat instituti ishtiyoq, aniqlik, ochiqlik, innovatsion fikrlash, rivojlanish, samaradorlik va professionalizm qadriyatlari asosida oʼzligini namoyon etadi va barchaga ishonchli hamkorlik uchun oʼz eshiklarini ochadi.</p>
  <p>Shu maqsadlarga erishish yoʼlida Sizni hamkorlikka chorlab qolamiz! </p>
  <img src=${BukletImg}/>
  <p>Tarixga nazar tashlasak, Institut dastlab 1977 yilda SSSR Davlat mehnat va ijtimoiy masalalar qoʼmitasi Mehnat ilmiy-tadqiqot institutining Oʼzbekiston filiali sifatida tashkil etilib, mustaqillik yillarida va bugungi kunga qadar Oʼzbekiston Respublikasi Mehnat vazirligi huzuridagi mehnat va ijtimoiy masalalar, aholini ish bilan taʼminlash hamda mehnatni muhofaza qilish yoʼnalishidagi foliyatida salkam 45 yillik yoʼlni bosib oʼtdi.</p>
  <p>Sir emaski, soʼnggi besh yil davomida mamlakatimiz jahon hamjamiyati eʼtirofiga loyiq ulkan islohotlar markazi sifatida namoyon boʼlmoqda. Xususan, mamlakatimizda inson kapitalini toʼlaqonli rivojlantirish, oliy va professional taʼlimning sifatini oshirish, mehnat bozorining rivojlanishi tendentsiyalarini inobatga olgan holda, aholining keng qatlamlarini talab yuqori boʼlgan kasblarga oʼqitish hamda malakali kadrlarni tayyorlashning sifat jihatidan yangi tizimini joriy etish ustuvor vazifa sifatida qaralmoqda.</p>
  <p> Oʼzbekiston Respublikasi Prezidentining 2020 yil 31 dekabrdagi «Malakalarni baholash tizimini tubdan takomillashtirish va mehnat bozorini malakali kadrlar bilan taʼminlash chora-tadbirlari toʼgʼrisida»gi qarorida Bandlik va mehnat munosabatlari vazirligi huzuridagi Respublika bandlik va mehnat muhofazasi ilmiy markazini Bandlik va mehnat munosabatlari vazirligi huzuridagi Mehnat bozori tadqiqotlari instituti etib qayta tashkil etish va unga Kasbiy malaka va bilimlarni rivojlantirish boʼyicha Kengashning ishchi organi vazifasi yuklatilishi belgilandi.</p>
  <p> Shundan soʼng, Hukumatning 2021 yil 30 sentyabrdagi maxsus qarori bilan Oʼzbekiston Respublikasi Bandlik va mehnat munosabatlari vazirligi huzurida Mehnat bozori tadqiqotlari instituti tashkil etildi.</p>
  <p>Yangi Oʼzbekiston – inson qadri ustuvor boʼlgan jamiyat va xalqparvar davlatdir va shunday ekan unda munosib mehnat, mehnat unumdorligini taʼminlash eng oliy vazifalardan biridir.</p>
  <p> Mehnat institutining missiyasi – inson bugun, ertaga va har doim munosib mehnat va toʼlaqonli turmush kechirishga haqli ekanligini ilmiy asoslash, shuningdek, har kimning farovon hayot toʼgʼrisidagi orzularini real voqelikka aytantirishga ilhomlantirishni nazarda tutadi. </p>
  <p>Mehnat institutining strategik maqsadi – yangi sifat va formatda inson kapitalini toʼlaqonli rivojlantirish, oliy va professional taʼlimning samaradorligini oshirish, mehnat bozorining rivojlanishi tendentsiyalarini inobatga olgan holda, aholining keng qatlamlarini talab yuqori boʼlgan kasblarga oʼqitish hamda malakali kadrlarni tayyorlash tizimini joriy qilishda ilmiy pozitsiyani ilgari surishdan iborat.</p>
  <p> Mehnat instituti ishtiyoq, aniqlik, ochiqlik, innovatsion fikrlash, rivojlanish, samaradorlik va professionalizm qadriyatlari asosida oʼzligini namoyon etadi va barchaga ishonchli hamkorlik uchun oʼz eshiklarini ochadi.</p>
  <p>Shu maqsadlarga erishish yoʼlida Sizni hamkorlikka chorlab qolamiz! </p>`;

  return (
    <div>
      <Hero2 data={heroData9} index={4} />
      <div className="buklet container">
        <div
          className="buklet__text"
          dangerouslySetInnerHTML={{ __html: content }}
        ></div>
      </div>
    </div>
  );
}
