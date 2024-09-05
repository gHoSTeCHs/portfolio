import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import React from 'react';

interface ProfileCardProps {
	title: string;
	date: string;
	link: string;
	image: StaticImageData
}

const ProjectCard: React.FC<ProfileCardProps> = ({ title, date, link, image }) => {
	return (
		<div className='flex flex-col gap-[19px]'>
			<div>
				<Image src={image} alt="Project Image" className='h-[353px] object-cover rounded-xl lg:w-full lg:[428px]' loading='lazy'/>
			</div>
			
			<div className='flex justify-between'>
				<div>
					<h3 className='text-base font-medium text-[#CACACE]'>{title}</h3>
					<p className='text-sm text-accordion-txt'>{date}</p>
				</div>
				<div>
					<Link href={link}  className='text-base font-medium text-[#CACACE] uppercase border-b border-[#2F2F37]'>
						View Project
					</Link>
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
