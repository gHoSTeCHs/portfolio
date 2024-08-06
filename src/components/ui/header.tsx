import React from 'react'

interface HeaderProps {
  title: string;
  details: string;
}

const Header: React.FC<HeaderProps> = ({title, details}) => {
  return (
    <div className='flex flex-col gap-[4px]'>
        <p className='text-[14px] text-txt capitalize md:text-[16px]'>{details}</p>
        <h1 className='text-4xl md:text-6xl leading-normal p-0'>{title}</h1>
    </div>
  )
}
 
export default Header