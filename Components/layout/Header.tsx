import {motion} from "framer-motion";
import Link from "next/link";
import {usePathname} from "next/navigation";

export default function Header() {

    const tabs = [
        {path: '/', label: 'Vivadh'},
        {path: '/work', label: 'Work'},
        {path: 'https://drive.google.com/file/d/1SxgMah7V_qJbdlbo62gqUe1hCVNQEfJP/view?usp=sharing', label: 'Resume'},
        // {path: '/contact', label: 'Contact'},
    ]

    const pathname = usePathname();

    return (
        <div className='border-amber-100 border rounded-full flex align-middle mt-5 p-1'>
            <div className="flex space-x-1">
                {
                    tabs.map((tab, index) => (
                        <Link key={index}
                              href={tab.path}
                              className={`${pathname === tab.path ? '' : 'hover:text-white/50'} relative rounded-full px-3 py-1.5 text-sm font-medium text-white outline-2 outline-sky-400 focus-visible:outline`}>
                            {
                                pathname === tab.path && (
                                    <motion.div layoutId={'active-pill'}
                                                style={{borderRadius:9999}}
                                                transition={{type:"spring", duration:0.6}}
                                                className='bg-white absolute inset-0'/>
                                )
                            }
                            <span className='relative z-10 mix-blend-exclusion'>{tab.label}</span>
                        </Link>
                    ))
                }
            </div>

        </div>
    )
}

{/*use this instead of rounded-full cause it will cause UI bug*/}