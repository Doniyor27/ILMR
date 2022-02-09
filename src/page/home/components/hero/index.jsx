<<<<<<< HEAD
import React from 'react';

import telegram from '../../../../assets/images/icons/telegramHero.svg'
import facebook from '../../../../assets/images/icons/facebookHero.svg'
import instagram from '../../../../assets/images/icons/instagramHero.svg'
import twitter from '../../../../assets/images/icons/twitterHero.svg'
import Arrow from '../../../../assets/images/icons/scroll-arrow.svg'

=======
import React, { useState } from 'react';
>>>>>>> b1abf0de235158eedc83316f3f1a2896c7a005cc

import logo from '../../../../assets/images/icons/logo.svg';
import hero1 from '../../../../assets/images/hero1.jpg'

import './style.scss';
<<<<<<< HEAD
import { useState } from 'react/cjs/react.development';

const Hero = () => {
	const [toggle, setToggle] = useState(false)
	const [eyeToggle, setEyeToggle] = useState(false)
	const [langToggle, setLangToggle] = useState(false)
=======
import Sidebar from './components/Sidebar';


const Hero = () => {
	const [eyeToggle, setEyeToggle] = useState(false)
>>>>>>> b1abf0de235158eedc83316f3f1a2896c7a005cc
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

	
  return (
	  <div className="hero">
<<<<<<< HEAD
			  <div className="hero__left ">
				  <div className="hero__sidebar">
					  <div onClick={() => setToggle(!toggle)} className={`${toggle? 'sidebar__toggle toggle' : 'sidebar__toggle'}`}>
					  <div id='hamburger'>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
                	</div>
					  </div>
					  <div onClick={()=> setEyeToggle(!eyeToggle)}
					  className='sidebar__eye'>
					  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/	svg">
							<path id='eye-outer' d="M1.5 18C1.5 18 7.5 6 18 6C28.5 6 34.5 18 34.5 18C34.5 18 28.5 30 18 30C7.5 30 1.5 18 1.5 18Z" stroke="" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
							<path id='eye-inner' d="M18 22.5C20.4853 22.5 22.5 20.4853 22.5 18C22.5 15.5147 20.4853 13.5 18 13.5C15.5147 13.5 13.5 15.5147 13.5 18C13.5 20.4853 15.5147 22.5 18 22.5Z" stroke="" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
						</svg>
						<div className={`${eyeToggle ? 'eye__options eye__show': 'eye__options'}`}>
							<div className="eye__option">A+</div>
							<div className="eye__option">A-</div>
						</div>
					  </div>
					  <div className="sidebar__language" onClick={() => setLangToggle(!langToggle)} >
						  <span>UZB</span>
							<div className={`${langToggle ? 'language__options lang__show': 'language__options'}`}>
							<div className="language__option">ENG</div>
							<div className="language__option">RUS</div>
							</div>
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
=======
		  		
				  <div className="hero-container">
						
				  		<div className="sidebar">
							<Sidebar/>
>>>>>>> b1abf0de235158eedc83316f3f1a2896c7a005cc
						</div>
						
						<div className="hero__logo"><img src={logo} alt="logo" /></div>

						{sections.slice(0, 1).map(({id, title, text}) => (
							<div key={id} className="hero__section">
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
<<<<<<< HEAD
				  <div className="hero__logo"><img src={logo} alt="logo" /></div>
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
=======
			  <div className="hero__left ">
			  <div className="hero__left-image"><img src={hero1} alt="hero-image" /></div>
				  
>>>>>>> b1abf0de235158eedc83316f3f1a2896c7a005cc
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
