import React from 'react';
import './HeroModal.scss';
import SidebarBtn from '../../../../../components/SidebarBtn';
import SidebarEye from '../../../../../components/SidebarEye';
import SidebarLanguage from '../../../../../components/SidebarLanguage';
import SidebarSocials from './SidebarSocials';
import Sidebar from './Sidebar';
import './Sidebar.scss';

const HeroModal = () => {
	const columns = [
		{
		  id: 1,
		  title: "Institut",
		  texts: [
			{
			  id: 1,
			  text: "Insititut haqida",
			  url: "#",
			},
			{
			  id: 2,
			  text: "Rahbariyat",
			  url: "#",
			},
			{
			  id: 3,
			  text: "Tuzilma",
			  url: "#",
			},
			{
			  id: 4,
			  text: "Nizom",
			  url: "#",
			},
			{
			  id: 5,
			  text: "Hujjatlar",
			  url: "#",
			},
			{
			  id: 6,
			  text: "Kasbiy malaka va bilimlarni rivojlantirish bo’yicha kengash",
			  url: "#",
			},
			{
			  id: 7,
			  text: "Kasbiy malaka va bilimlarni rivojlantirish bo’yicha hududiy kengashlar",
			  url: "#",
			},
			{
			  id: 8,
			  text: "Kasbiy malaka va bilimlarni rivojlantirish bo’yicha tarmoq kengashlari",
			  url: "#",
			},
			{
			  id: 9,
			  text: "Mehnatni me’yorlash markazi",
			  url: "#",
			},
			{
			  id: 10,
			  text: "Malakani baholash markazi",
			  url: "#",
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
			  url: "#",
			},
			{
			  id: 2,
			  text: "Uy xoʼjaliklarini bandlik masalalari boʼyicha oʼrganish va boshqa dala tadqiqotlarini tashkil qilish guruhi",
			  url: "#",
			},
			{
			  id: 3,
			  text: "Mehnatni muhofaza qilish boʼyicha markaziy laboratoriya",
			  url: "#",
			},
			{
			  id: 4,
			  text: "Mehnat gigienasi laboratoriyasi",
			  url: "#",
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
			  url: "#",
			},
			{
			  id: 3,
			  text: "Xorij yangiliklari",
			  url: "#",
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
			  url: "#",
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
			  id: 12,
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
			  url: "#",
			},
			{
			  id: 3,
			  text: "Videogaleriya",
			  url: "#",
			},
			{
			  id: 4,
			  text: "Bukletlar",
			  url: "#",
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
			  url: "#",
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
			  url: "#",
			},
		  ],
		},
	  ];

  return (
	  <div className="modal container">
		  <div className="modal__sidebar">
			  <SidebarBtn/>
			  <SidebarEye/>
			  <SidebarLanguage/>
			  <SidebarSocials/>
		  </div>
		 <div className="modal__inner">
		 <div className="modal__columns">
          {columns.map(item => {
            const { id, title, texts } = item;
            return (
              <div className="modal-column" key={id}>
                <div className="modal-column__title">{title}</div>
                {texts.map(({ id, text, url }) => (
                  <a href={url} className="modal-column__link" key={id}>
                    {text}
                  </a>
                ))}
              </div>
            );
          })}
        </div>
		 </div>
	  </div>
  )
};

export default HeroModal;
