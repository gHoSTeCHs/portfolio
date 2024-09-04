import About from '@/components/sections/About';
import Intro from '@/components/sections/Intro';
import NavBar from '@/components/sections/NavBar';
import PortfolioSection from '@/components/sections/Portfolio';
import TechServices from '@/components/sections/TechServices';
import React from 'react';

const page = () => {
	return (
		<div>
			<Intro />
			<About />
			<TechServices />
			<PortfolioSection />
		</div>
	);
};

export default page;
