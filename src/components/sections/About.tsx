import React from 'react';
import Header from '../ui/header';
import Button from '../ui/button';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import images from '@/constants';
import DetailedInfo from '../detailedInfo';

const About = () => {
	return (
		<section className="container">
			<div className="">
				<div className="flex flex-col gap-5 border border-x-0 border-t-0 border-background-tertiary py-5 md:flex-row md:items-center md:justify-between md:gap-0">
					<Header title="I AM DAMIEN" details="About" />
					<div className="inline-block">
						<Button>{'Know More ->'}</Button>
					</div>
				</div>
				<div className="flex flex-col gap-5 py-10 md:items-center lg:grid lg:grid-cols-2">
					<Image src={images.image} alt="Personal Image" />
					<DetailedInfo />
				</div>
			</div>
		</section>
	);
};

export default About;
