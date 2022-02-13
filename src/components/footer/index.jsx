import React from "react";
import "./style.scss";
import logo from "../../assets/images/logo.svg";
import twitter from "../../assets/images/icons/twitter.svg";
import facebook from "../../assets/images/icons/facebook.svg";
import instagram from "../../assets/images/icons/instagram.svg";
import telegram from "../../assets/images/icons/telegram.svg";
import oks from "../../assets/images/icons/oks.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  const column = [
    {
      id: 1,
      title: "Institut",
      texts: [
        {
          id: 1,
          text: "Insititut haqida",
          url: "/news/about",
        },
        {
          id: 2,
          text: "Rahbariyat",
          url: "/leadership",
        },
        {
          id: 3,
          text: "Tuzilma",
          url: "/structure",
        },
        {
          id: 4,
          text: "Nizom",
          url: "/regulation",
        },
        {
          id: 5,
          text: "Hujjatlar",
          url: "/books",
        },
        {
          id: 6,
          text: "Kasbiy malaka va bilimlarni rivojlantirish bo’yicha kengash",
          url: "/devskills",
        },
        {
          id: 7,
          text: "Kasbiy malaka va bilimlarni rivojlantirish bo’yicha hududiy kengashlar",
          url: "/devskills",
        },
        {
          id: 8,
          text: "Kasbiy malaka va bilimlarni rivojlantirish bo’yicha tarmoq kengashlari",
          url: "/devskills",
        },
        {
          id: 9,
          text: "Mehnatni me’yorlash markazi",
          url: "/regulation",
        },
        {
          id: 10,
          text: "Malakani baholash markazi",
          url: "/regulation",
        },
      ],
    },
    {
      id: 2,
      title: "Faoliyat",
      texts: [
        {
          id: 1,
          text: "Loyihalar",
          url: "/projects",
        },
        {
          id: 2,
          text: "Uy xoʼjaliklarini bandlik masalalari boʼyicha oʼrganish va boshqa dala tadqiqotlarini tashkil qilish guruhi",
          url: "/projects",
        },
        {
          id: 3,
          text: "Mehnatni muhofaza qilish boʼyicha markaziy laboratoriya",
          url: "/regulation",
        },
        {
          id: 4,
          text: "Mehnat gigienasi laboratoriyasi",
          url: "/vacancy",
        },
        {
          id: 5,
          text: "Shaxsiy himoya vositalarini sertifikatlashtirish laboratoriyasi",
          url: "#",
        },
        {
          id: 6,
          text: "Mehnatni muhofoza qilish sohasida malaka oshirish kurslari",
          url: "#",
        },
      ],
    },
    {
      id: 3,
      title: "Axborot xizmati",
      texts: [
        {
          id: 1,
          text: "Anons",
          url: "#",
        },
        {
          id: 2,
          text: "O’zbekiston yangiliklari",
          url: "/news",
        },
        {
          id: 3,
          text: "Xorij yangiliklari",
          url: "/news",
        },
        {
          id: 4,
          text: "Tadbirlar",
          url: "#",
        },
        {
          id: 5,
          text: "Press-Reliz",
          url: "#",
        },
        {
          id: 6,
          text: "Direktor yutuqlari",
          url: "#",
        },
        {
          id: 7,
          text: "Media reja",
          url: "#",
        },
        {
          id: 8,
          text: "Ijtimoiy tarmoqlarni kuzatish",
          url: "/news",
        },
        {
          id: 9,
          text: "OAV biz haqimizda",
          url: "#",
        },
        {
          id: 10,
          text: "Tanlovlar",
          url: "#",
        },
        {
          id: 11,
          text: "E’lonlar",
          url: "#",
        },
        {
          id: 12,
          text: "Akkreditatsiya",
          url: "#",
        },
        {
          id: 13,
          text: "Ko’p so’raladigan savollar",
          url: "#",
        },
      ],
    },
    {
      id: 4,
      title: "Mediateka",
      texts: [
        {
          id: 1,
          text: "Faoliyat",
          url: "#",
        },
        {
          id: 2,
          text: "Fotogaleriya",
          url: "/photoGallery",
        },
        {
          id: 3,
          text: "Videogaleriya",
          url: "/videoGallery",
        },
        {
          id: 4,
          text: "Bukletlar",
          url: "/bukletlar",
        },
      ],
    },
    {
      id: 5,
      title: "Online kutubxona",
      texts: [
        {
          id: 1,
          text: "Faoliyatga doir adabiyotlar",
          url: "/books",
        },
        {
          id: 2,
          text: "Uslubiy qo’llanmalar",
          url: "#",
        },
        {
          id: 3,
          text: "O’quv-metodik adabiyotlar",
          url: "#",
        },
        {
          id: 4,
          text: "Jurnallar",
          url: "#",
        },
        {
          id: 5,
          text: "Saytlar",
          url: "#",
        },
      ],
    },
    {
      id: 6,
      title: "Bog’lanish",
      texts: [
        {
          id: 1,
          text: "Aloqa",
          url: "/connection",
        },
      ],
    },
  ];
  const socials = [
    {
      id: 1,
      url: "#",
      icon: twitter,
    },
    {
      id: 2,
      url: "#",
      icon: facebook,
    },
    {
      id: 3,
      url: "#",
      icon: instagram,
    },
    {
      id: 4,
      url: "#",
      icon: telegram,
    },
  ];

  return (
    <div className="footer">
      <div className="footer__inner container">
        <div className="footer__columns">
          {column.map(item => {
            const { id, title, texts } = item;
            return (
              <div className="column" key={id}>
                <div className="column__title">{title}</div>
                {texts.map(({ id, text, url }) => (
                  <Link to={url} className="column__link" key={id}>
                    {text}
                  </Link>
                ))}
              </div>
            );
          })}
        </div>
        <div className="footer__underline"></div>
        <div className="footer__bottom">
          <a href="#" className="footer__bottom-logo">
            <img src={logo} alt="logo" className="footer-logo" />
          </a>
          <div className="footer__bottom-socials">
            {socials.map(({ id, url, icon }) => (
              <a href={url} className="social" key={id}>
                <img src={icon} alt="social-media" />
              </a>
            ))}
          </div>
          <div className="footer__bottom-oks">
            <a href="https://oks.uz/" target="_blank" className="oks-logo">
              <img src={oks} alt="Oks Technologies" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
