import {Montserrat} from "next/font/google";
import TechSkills from "@/Components/module/homepage/components/TechSkills";
import {Button} from "@/Components/ui/button";
import Link from "next/link";


const monserrat = Montserrat({subsets: ['latin']});


export default function Home() {
    return (
        <>
            <header className={`my-12 font-bold text-center ${monserrat.className}`}>
                <p className='text-5xl'>KHIEV VIVADH</p>
                <p className='text-2xl w-full h-4'>FRONTEND WEB DEVELOPER</p>
            </header>

            <section className='my-5'>
                <header className={`text-center ${monserrat.className} font-semibold`}>SKILLS</header>
                <TechSkills/>
            </section>


            <div className={`text-3xl pb-5 font-bold text-center ${monserrat.className}`}>
                WHO AM I?
            </div>
            <div className='text-xl sm:leading-8 text-center flex justify-center'>
                <p className='sm:w-1/2'>
                    I am a Frontend Developer at KiloIT. With experience in
                    ReactJS, NextJS, Redux, TailwindCSS, Bootstrap, and React Router, I began my journey in late
                    2022—growing from an intern to a Junior Developer. And I am just getting started!
                </p>
            </div>

            <div className='flex justify-center mt-5'>
                <Link href={'/work'}>
                    <Button className='bg-transparent hover:bg-blue-300 hover:text-gray-800 duration-200 rounded-xl'>Check
                        out my work</Button>
                </Link>
            </div>
        </>
    )
}