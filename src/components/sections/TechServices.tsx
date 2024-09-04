import React from 'react';
import SectionHeader from '../ui/sectionHeader';
import Image from 'next/image';
import images from '@/constants';
import ArrowBtn from '../ui/arrowbtn';
import Highlight from '../ui/highlight';
import { ServiceHighlights } from '@/constants/data';

const TechServices = () => {
	return (
		<section className="container">
			<SectionHeader
				title="MY PHOTOGRAPHY SERVICES"
				details="Services"
				btntext="View all services"
			/>
			<div className="flex flex-col gap-[30px] py-10 xl:flex-row-reverse xl:items-center">
				<div className="rounded-3xl overflow-hidden xl:rounded-bl-[100px]">
					<Image src={images.artist} alt="Artist Image" loading="lazy" />
				</div>

				<div className="flex flex-col gap-[30px]">
					<div className="flex flex-col gap-3">
						<div className="flex items-center gap-2">
							<h3 className="text-[28px] leading-none text-accordion-txt font-semibold">
								{' '}
								EVENTS
							</h3>
							<ArrowBtn />
						</div>
						<p className="text-sm text-accordion-txt">
							Our event photography service is dedicated to capturing the magic
							of your special occasions. Whether it's a wedding, corporate
							event, or milestone celebration, we're there to document every
							heartfelt moment. We blend into the background, ensuring natural
							and candid shots that reflect the emotions of the day.
						</p>
					</div>
					<div className="flex flex-col gap-2">
						<h4 className="text-sm text-[#CACACE]">Service Highlights</h4>
						<div className="flex flex-col gap-2">
							{ServiceHighlights.map((service, index) => (
								<Highlight key={index} {...service} />
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default TechServices;
