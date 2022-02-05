import React from 'react';

import eye from '../../../../assets/images/icons/eye.svg'
import telegram from '../../../../assets/images/icons/telegramHero.svg'
import facebook from '../../../../assets/images/icons/facebookHero.svg'
import instagram from '../../../../assets/images/icons/instagramHero.svg'
import twitter from '../../../../assets/images/icons/twitterHero.svg'
import Arrow from '../../../../assets/images/icons/scroll-arrow.svg'


import logo from '../../../../assets/images/icons/logo.svg';

import hero1 from '../../../../assets/images/hero1.jpg'
import hero2 from '../../../../assets/images/hero2.jpg'
import hero3 from '../../../../assets/images/hero3.jpg'
import hero4 from '../../../../assets/images/hero4.jpg'

import './style.scss';

const Hero = () => {
	const sections = [
		{
		  id: 1,
		  img: hero1,
		  title: ['Tarmoq', 'kengashi'],
		  text: "Institut tomonidan amalga oshiriladigan ilmiy-tadqiqot ishlari dasturlari, rejalari hamda tematikasini ko'rib chiqadi va ma'qullaydi"
		},
		{
		  id: 2,
		  img: hero1,
		  title: ['Hududiy', 'kengash'],
		  text: "Institut tomonidan amalga oshiriladigan ilmiy-tadqiqot ishlari dasturlari, rejalari hamda tematikasini ko'rib chiqadi va ma'qullaydi"
		},
		{
		  id: 3,
		  img: hero1,
		  title: ['Respublika', 'kengashi'],
		  text: "Institut tomonidan amalga oshiriladigan ilmiy-tadqiqot ishlari dasturlari, rejalari hamda tematikasini ko'rib chiqadi va ma'qullaydi"
		},
		{
		  id: 4,
		  img: hero1,
		  title: ['Umumiy', 'kengash'],
		  text: "Institut tomonidan amalga oshiriladigan ilmiy-tadqiqot ishlari dasturlari, rejalari hamda tematikasini ko'rib chiqadi va ma'qullaydi"
		},
	  ]

	const socials = [
		{
			id: 1,
			icon: telegram,
			url: '#'
		},
		{
			id: 2,
			icon: facebook,
			url: '#'
		},
		{
			id: 3,
			icon: instagram,
			url: '#'
		},
		{
			id: 4,
			icon: twitter,
			url: '#'
		}
	]
  return (
	  <div className="hero">
			  <div className="hero__left ">
				  <div className="hero__sidebar">
					  <div className="sidebar__toggle">
					  <div id='hamburger'>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
                	</div>
					  </div>
					  <div className="sidebar__eye">
						  <img src={eye} alt="eye-icon" />
					  </div>
					  <div className="sidebar__language">
						  UZB
					  </div>
					  <div className="sidebar__socials">
						  {socials.map(({id, icon, url}) => (
							  <div key={id} className="social">
								  <a className='social-link' href={url}><img src={icon} alt="social-icon" /></a>
							</div>
						  ))}
					  </div>
					  <div className="sidebar__scroll">
						<div className="sidebar__scroll-mouse">
							<div></div>
						</div>
						<div className="sidebar__scroll-dots">
							<div></div>
							<div></div>
							<div></div>
						</div>
							<div className="sidebar__scroll-arrow"><img src={Arrow} alt="arrow-icon" /></div>
					  </div>
				  </div>
				  {sections.slice(0, 1).map(({id, img, title, text}) => (
					 <div key={id} className="hero__section">
					 <div className="hero__section-image"><img src={img} alt="hero-image" /></div>
					 <div className="hero__section-content">
						 <div className="hero__section-number">{id}</div>
						 <div className="hero__section-info">
						   <div className="hero__section-title">
							   <div>{title[0]}</div>
							   <span>{title[1]}</span>
						   </div>
						   <div className="hero__section-text">{text}</div>
						   <a className='hero__section-btn' href="#"><h4>Batafsil</h4></a>
						 </div>
					 </div>
				 </div>
				  ))}
			  </div>
			  <div className="hero__right">
			  {sections.slice(1, 4).map(({id, img, title, text}) => (
					  <div key={id} className="hero__section">
						  <div className="hero__section-image"><img src={img} alt="hero-image" /></div>
						  <div className="hero__section-content">
							  <div className="hero__section-number">{id}</div>
							  <div className="hero__section-info">
								<div className="hero__section-title">
									<div>{title[0]}</div>
									<span>{title[1]}</span>
								</div>
								<div className="hero__section-text">{text}</div>
								<a className='hero__section-btn hover__btn' href="#"><h4>Batafsil</h4></a>
							  </div>
						  </div>
					  </div>
				  ))}
			  </div>

	</div>
  )
};

export default Hero;
