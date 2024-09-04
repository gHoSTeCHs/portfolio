import React from 'react';
import Button from './button';
import Header from './header';

interface SectionHeaderProps {
	title: string;
	details: string;
	children?: ChildNode;
	btntext: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
	title,
	details,
	children,
	btntext,
}) => {
	return (
		<div className="flex flex-col gap-5 border border-x-0 border-t-0 border-background-tertiary py-5 md:flex-row md:items-center md:justify-between md:gap-0">
			<Header title={title} details={details} />
			<div className="inline-block">
				<Button>{`${btntext} ->`}</Button>
			</div>
		</div>
	);
};

export default SectionHeader;
