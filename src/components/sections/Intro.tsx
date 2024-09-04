import React from 'react';
import Header from '../ui/header';
import Work from '../ui/work';
import { ArrowUpRight } from 'lucide-react';

const Intro = () => {
	return (
		<section>
			<div className="container py-7 md:py-14">
				<div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:gap-0 lg:justify-between">
					<Header title="DAMIEN BRAUN" details="Stunning Photography by" />
					<Work />
				</div>
			</div>
		</section>
	);
};

export default Intro;
