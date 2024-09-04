import React from 'react';
import SectionHeader from '../ui/sectionHeader';

const PortfolioSection = () => {
	return (
		<section className="container">
			<SectionHeader
				title="Explore My photography work."
				details="Portfolio"
				btntext="View All My Works"
			/>
			<div className="py-10"></div>
		</section>
	);
};

export default PortfolioSection;
