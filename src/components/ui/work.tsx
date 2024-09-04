import Image from 'next/image';
import React from 'react';
import Button from './button';
import { ArrowUpRight } from 'lucide-react';

const Work = () => {
	return (
		<div className="flex flex-col gap-1">
			<div className="flex items-center gap-2 ">
				<p className="text-[28px] leading-none lg:text-[48px]">LETS </p>
				<div className="inline-block px-[30px] py-[14px] rounded-full bg-[#4A2BED] lg:px-[40px] lg:py-[16px]">
					<svg
						width="14"
						height="14"
						viewBox="0 0 14 14"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M3.875 0.125L13.25 0.125C13.4158 0.125 13.5747 0.190848 13.6919 0.308058C13.8092 0.425269 13.875 0.58424 13.875 0.75V10.125C13.875 10.4702 13.5952 10.75 13.25 10.75C12.9048 10.75 12.625 10.4702 12.625 10.125V2.25888L1.19194 13.6919C0.947864 13.936 0.552136 13.936 0.308058 13.6919C0.0639806 13.4479 0.0639806 13.0521 0.308058 12.8081L11.7411 1.375L3.875 1.375C3.52982 1.375 3.25 1.09518 3.25 0.75C3.25 0.404822 3.52982 0.125 3.875 0.125Z"
							fill="white"
						/>
					</svg>
				</div>
			</div>
			<p className="text-[28px] leading-none lg:text-[48px]">WORK TOGETHER</p>
		</div>
	);
};

export default Work;
