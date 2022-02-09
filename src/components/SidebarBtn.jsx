import React, { useState, useContext } from 'react';
import './SidebarBtn.scss';
const SidebarBtn = () => {
	const [toggle, setToggle] = useState(false);
  return (
	<div onClick={() => setToggle(!toggle)} className={`${toggle? 'sidebar__btn toggle' : 'sidebar__btn'}`}>
		<div className='hamburger'>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
		</div>
	</div>
  )
};

export default SidebarBtn;
