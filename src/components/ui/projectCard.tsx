import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface ProfileCardProps {
	title: string;
	date: string;
	link: string;
}

const ProjectCard: React.FC<ProfileCardProps> = ({ title, date, link }) => {
	return (
		<div>
			<Image src={''} alt="Project Image" />
			<div>
				<div>
					<h3>{title}</h3>
					<p>{date}</p>
				</div>
				<div>
					<Link href={link} className="capitalize">
						View Project
					</Link>
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
