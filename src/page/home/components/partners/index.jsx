import React from 'react';

import './style.scss';
import partners1 from '../../../../assets/images/partner1.png'
import partners2 from '../../../../assets/images/partner2.png'
import partners3 from '../../../../assets/images/partner3.png'

const Partners = () => {
	const partners = [
		{
			id: 1,
			img: partners1,
			text: "O'zbekiston Respublikasi Oliy Majlis qonunchilik palatasi"
		},
		{
			id: 1,
			img: partners2,
			text: "Ozbekiston Respublikasi Axborot texnalogiyalari va komminukatsiyalarini rivojlantirish vazirligi"
		},
		{
			id: 1,
			img: partners3,
			text: "O'zbekiston Respublikasi Qonun hujjatlari ma'lumotlari Milliy bazasi"
		}
	]
	return (
		<div className="partners">
			<div className="container">
				<div className="partners__inner">
					{partners.map(({ id, img, text }) => (
						<div className='partner' key={id}>
							<div className="partner__logo">
								<img src={img} alt="partner's logo" />
							</div>
							<div className="partner__text">
								<p>{text}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
};

export default Partners;
