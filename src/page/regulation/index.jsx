import React from "react";
import "./style.scss";
import { heroData3 } from "../../components/heroData";
import Hero2 from "../../components/hero2";
export default function Regulation() {
  const content = `
    <h2>Oʼzbekiston Respublikasi Bandlik va mehnat munosabatlari vazirligi huzuridagi Mehnat bozori tadqiqotlari instituti toʼgʼrisida</h2>
    <span>1-bob. Umumiy qoidalar </span> 
    <p>1. Ushbu Nizom O‘zbekiston Respublikasi Bandlik va mehnat munosabatlari vazirligi huzuridagi Mehnat bozori tadqiqotlari institutining (keyingi o‘rinlarda — Institut) huquqiy maqomini, asosiy vazifalari va funksiyalarini, huquq va majburiyatlarini, shuningdek, faoliyatini tashkil etish tartibini belgilaydi.</p>
    <span> 2. Institut:</span>
    <p>Mehnat bozori, ish bilan ta’minlash, mehnat munosabatlari, kasbiy malaka va bilimlarni rivojlantirish, mehnatni muhofaza qilish va me’yorlash, mehnat sohasida kadrlar tayyorlash va ularning malakasini oshirish bo‘yicha ilmiy-tadqiqot muassasasi;</p>
    <p>O‘zbekiston Respublikasi Prezidentining «Malakalarni baholash tizimini tubdan takomillashtirish va mehnat bozorini malakali kadrlar bilan ta’minlash chora-tadbirlari to‘g‘risida» 2020 yil 31 dekabrdagi PQ-4939-son qarori bilan tasdiqlangan Kasbiy malaka va bilimlarni rivojlantirish bo‘yicha kengashning ishchi organi hisoblanadi.</p>
    <p><span>3</span> Institut o‘z faoliyatida O‘zbekiston Respublikasining Konstitutsiyasi va qonunlariga, O‘zbekiston Respublikasi Oliy Majlisi palatalarining qarorlariga, O‘zbekiston Respublikasi Prezidentining farmonlari, qarorlari va farmoyishlariga, Vazirlar Mahkamasining qarorlari va farmoyishlariga, Kasbiy malaka va bilimlarni rivojlantirish bo‘yicha kengash qarorlariga, O‘zbekiston Respublikasi bandlik va mehnat munosabatlari vaziri buyruqlariga, ushbu Nizomga va boshqa qonunchilik hujjatlariga amal qiladi.</p>
    <p><span>4</span> Institut o‘z faoliyatida O‘zbekiston Respublikasi Bandlik va mehnat munosabatlari vazirligiga (keyingi o‘rinlarda — Vazirlik) hisobot beradi.</p>
    <p><span>5</span> Institutning faoliyati Bandlikka ko‘maklashish davlat jamg‘armasi va qonunchilik hujjatlarida taqiqlanmagan boshqa manbalar hisobidan moliyalashtiriladi.</p>
    <p><span>6</span> Institut davlat muassasasi shaklidagi yuridik shaxs hisoblanadi, O‘zbekiston Respublikasi Davlat gerbi tasviri tushirilgan va o‘z nomi davlat tilida yozilgan muhrga, shtamp va blankalarga, mustaqil balansga hamda O‘zbekiston Respublikasi Moliya vazirligining G‘aznachiligida shaxsiy g‘azna hisobvaraqlariga ega bo‘ladi.</p>
    <h3>Vazirlar Mahkamasining 2021 yil 30 sentyabrdagi 616-son qaroriga 2-ILOVА</h3>`;
  return (
    <>
      <Hero2 data={heroData3} index={4} />
      <div className="regulation container">
        <div
          className="regulation__inner"
          dangerouslySetInnerHTML={{ __html: content }}
        ></div>
      </div>
    </>
  );
}
