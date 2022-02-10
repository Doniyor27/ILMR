import React from 'react';
import Footer from '../../components/footer';
import Hero2 from '../../components/hero2';
import Development from './components/development';
import Hero from './components/hero';
import HeroModal from './components/hero/components/HeroModal';
import { heroData10, heroData11, heroData12, heroData13, heroData14, heroData15, heroData2, heroData3, heroData5, heroData6, heroData7, heroData8, heroData9 } from '../../components/heroData';

const Homepage = () => {
  return (
	  <div>
		  <Hero2 data={heroData2} index={2}/>
		  {/* <Hero2 data={heroData3} index={1}/> */}
		  {/* <Hero2 data={heroData3} index={2}/> */}
		  {/* <Hero2 data={heroData5} index={1}/> */}
		  {/* <Hero2 data={heroData6} index={3}/> */}
		  {/* <Hero2 data={heroData7} index={2}/> */}
		  {/* <Hero2 data={heroData8} index={4}/> */}
		  {/* <Hero2 data={heroData9} index={2}/> */}
		  {/* <Hero2 data={heroData10} index={4}/> */}
		  {/* <Hero2 data={heroData11} index={6}/> */}
		  {/* <Hero2 data={heroData12} index={2}/> */}
		  {/* <Hero2 data={heroData13}/> ishlamayapti  */}
		  {/* <Hero2 data={heroData14} index={3}/> */}
		  {/* <Hero2 data={heroData15} index={3}/> */}
		  {/* <Hero/>	 */}
		  {/* <HeroModal/> */}
		  {/* <Development/> */}
		  {/* <Footer/> */}
	  </div>
  )
};

export default Homepage;
