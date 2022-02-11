import React from 'react';

import Arrow from '../../../../../assets/images/icons/scroll-arrow.svg'

import './SidebarScroll.scss';

const SidebarScroll = () => {
  return (
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
  )
};

export default SidebarScroll;
