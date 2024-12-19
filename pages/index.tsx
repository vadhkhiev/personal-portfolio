import {Montserrat} from "next/font/google";
import Link from "next/link";
import {ArrowBigRightDash} from "lucide-react";
import TechSkills from "@/Components/module/homepage/components/TechSkills";


const monserrat = Montserrat({subsets: ['latin']});


export default function Home() {
    return (
        <>
            <header className={`mt-12 font-bold ${monserrat.className}`}>
                <p className='text-5xl'>KHIEV VIVADH</p>
                <br/>
                <p className='text-2xl w-full'>IS A FRONTEND WEB DEVELOPER</p>
            </header>

            <section className='mt-5'>
                <header className='text-center'>LANGUAGE - SKILLS - TECHNOLOGY</header>
                <TechSkills/>
            </section>

            <div className="bg-white w-full h-0.5 my-6"/>

            <section className='mt-5 flex flex-wrap justify-center'>
                <div className={`text-3xl sm:flex-1 pb-5 font-bold ${monserrat.className}`}>
                    WHO AM I?
                </div>
                <div className='sm:flex-1 text-xl text-justify sm:leading-8'>
                    Greeting visitors, I am Khiev Vivadh. A Senior Computer Science Student and also working as a Frontend Web
                    Developer at
                    <Link className='text-blue-400' href={'https://kiloit.org/'} target={'_blank'}> KiloIT</Link>.
                    I have experienced using tools and technologies such as ReactJS, NextJS, Bootstrap, TailwindCSS, React
                    Router, Redux. I have started my Frontend journey back in late 2022 learning the basic of creating a
                    website working
                    my way from an intern to a Junior Dev. and I have no plan of slowing down.
                </div>
            </section>

            <div className="bg-white w-full h-0.5 my-6"/>

            {/*<section className='w-full grid grid-cols-1 sm:grid-cols-3 gap-6 my-5'>*/}
            {/*    <Link href="/work">*/}
            {/*        <div className='flex justify-between rounded-lg border-2 border-slate-200 p-2 px-4 hover:bg-white hover:text-black hover:font-semibold transition-colors duration-100'>*/}
            {/*            <p>*/}
            {/*                Check Out My Works*/}
            {/*            </p>*/}
            {/*            <ArrowBigRightDash/>*/}
            {/*        </div>*/}
            {/*    </Link>*/}

            {/*    <Link target={'_blank'} href="https://drive.google.com/file/d/1SxgMah7V_qJbdlbo62gqUe1hCVNQEfJP/view?usp=sharing">*/}
            {/*        <div className='flex justify-between border-2 rounded-lg border-slate-200 p-2 px-4 hover:bg-white hover:text-black hover:font-semibold transition-colors duration-100'>*/}
            {/*            <p>*/}
            {/*                View / Download My Resume*/}
            {/*            </p>*/}
            {/*            <ArrowBigRightDash/>*/}
            {/*        </div>*/}
            {/*    </Link>*/}

            {/*    <Link href="/contact">*/}
            {/*        <div className='flex justify-between border-2 rounded-lg border-slate-200 p-2 px-4 hover:bg-white hover:text-black hover:font-semibold transition-colors duration-100'>*/}
            {/*            <p>*/}
            {/*                Get In Touch*/}
            {/*            </p>*/}
            {/*            <ArrowBigRightDash/>*/}
            {/*        </div>*/}
            {/*    </Link>*/}

            {/*</section>*/}
        </>
    )
}