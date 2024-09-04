import Link from 'next/link'
import React from 'react'

interface FooterComponentProps{
    title: string
    links: {
        title: string
        link: string
    }[]
}

const FooterComponent: React.FC<FooterComponentProps> = ({title, links}) => {
  return (
    <div className='flex flex-col gap-[14px] uppercase px-5'>
        <h3 className='text-accordion-txt font-semibold '>{title}</h3>
        <ul className='flex flex-col gap-1'>
            {links.map((link, index) => (
                <li key={index} >
                    <Link href={link.link} className="inline-block py-2 border-background-tertiary border-b">{link.title}</Link>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default FooterComponent