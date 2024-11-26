import Image from "next/image";
import thumbnail from "../Components/assets/image/thumbnail-kilohealth.png";
import thumnailJirra from "../Components/assets/image/thumbnail-jirra.png";
import {Montserrat} from "next/font/google";
import {motion} from "framer-motion";
import React from "react";

const monserrat = Montserrat({subsets: ['latin']});


export default function WorksPage() {

    const projectList = [
        {
            organization: 'KILOIT',
            label: 'KiloHealth',
            thumbnail: thumbnail,
            link: 'https://kilohealth.net/'
        },
        {
            organization: 'KILOIT',
            label: 'Jirra Green Biz',
            thumbnail: thumnailJirra,
            link: 'https://jirragreenbiz.com/'
        },
    ]

    return (
        <>
            <header className='group text-5xl mt-10 text-center sm:text-start w-fit'>
                WORKS / PROJECTS
                <span className='block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white'/>
            </header>
            <main
                className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 py-5 mt-3 gap-2 ${monserrat.className}`}>
                {
                    projectList.map(({organization, label, link, thumbnail}) => (
                        <motion.a
                            whileHover={{scale: 1.05, transition: {duration: 0.035}}}
                            whileTap={{scale: 0.9, rotate: 2}}
                            key={label} href={link} target={'_blank'}
                            className='h-72 group transition duration-200 rounded-xl hover:bg-white hover:text-gray-800 p-3'>
                            <header className='h-1/4'>
                                <p className='text-sm'>{organization}</p>
                                <p className='text-2xl font-bold'>{label}</p>
                            </header>
                            <main className='flex h-3/4'>
                                <section
                                    className='flex-1 flex justify-center overflow-hidden transition duration-200 rounded-lg group-hover:border-black group-hover:border-2 border-transparent border-2'>
                                    <Image src={thumbnail} alt={label}/>
                                </section>
                            </main>
                        </motion.a>
                    ))
                }
            </main>
        </>
    )
}