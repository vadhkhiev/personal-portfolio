import Image from "next/image";
import {imgAssetUrl} from "@/Components/globalHelper/assetsHelper";


type ModelTechSkillIcons = {
    label: string,
    icon: string,
}

export default function TechSkills() {

    const tech_skills_icons: ModelTechSkillIcons[] = [
        {label: 'ReactJS', icon: imgAssetUrl('react-icon.png')},
        {label: 'NextJS', icon: imgAssetUrl('nextjs-icon.png')},
        {label: 'Bootstrap', icon: imgAssetUrl('bootstrap-icon.png')},
        // {label: 'Redux', icon: imgAssetUrl('redux-icon.png')},
        {label: 'TailwindCSS', icon: imgAssetUrl('tailwindcss-icon.png')},
    ]

    return (
        <>
            <main className='h-30 flex justify-center flex-wrap sm:flex-nowrap space-x-1 py-4'>
                {
                    tech_skills_icons.map(({label, icon}) => {
                        return (
                            <div key={label} className={'h-24 w-24'}>
                                <Image src={icon} width={100} height={100} alt={'image'}/>
                                <p className='text-center text-slate-500'>{label}</p>
                            </div>
                            // <div key={label} style={{width: '90px', height: '90px'}}>
                            //     <Image src={icon} width={100} height={100} alt={'image'}/>
                            //     <p className='text-center text-slate-500'>{label}</p>
                            // </div>
                        )
                    })
                }
            </main>
        </>
    )

}