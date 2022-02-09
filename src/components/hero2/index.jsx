import React from 'react';
import heroData from '../heroData';
import './style.scss';
import SidebarBtn from '../../components/SidebarBtn'
import SidebarEye from '../../components/SidebarEye'
import SidebarLanguage from '../../components/SidebarLanguage'
import logo from '../../assets/images/logo.svg'

const Hero2 = () => {
	return (
		<div className='wrapper'>
				{heroData.slice(2,3).map(({id, title, img, texts}) => (
					<div className="hero2">
					<div className="hero2__background">
						<img src={img} alt="background" />
					</div>
					<div className="hero2__container">
					<div className="hero2__sidebar">
					<SidebarBtn/>
					<SidebarEye/>
					<SidebarLanguage/>
					</div>
					<div className="hero2__content">
						<div className="hero2__logo">
								<img src={logo} alt="" />
						</div>
						<div className="hero2__title"></div>
						<div className="hero2__pages">
							<span>Asosiy > </span>
							<span>{title} > </span>
							<span>Asosiy > </span>
						</div>
					</div>
					<div className="hero2__navbar"></div>
					</div>
				</div>				
			))}
		</div>
	)
}

export default Hero2;
	
