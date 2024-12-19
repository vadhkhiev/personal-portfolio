import Image, {StaticImageData} from "next/image";
import bootstrapIcon from "@/Components/assets/image/bootstrap-icon.png";
import nextjsIcon from "@/Components/assets/image/nextjs-icon.png";
import tailwindcssIcon from "@/Components/assets/image/tailwindcss-icon.png";
import reactIcon from "@/Components/assets/image/react-icon.png";

type ModelTechSkillIcons = {
    label: string,
    icon: StaticImageData,
}

export default function TechSkills() {

    const tech_skills_icons: ModelTechSkillIcons[] = [
        {label: 'ReactJS', icon: reactIcon},
        {label: 'NextJS', icon: nextjsIcon},
        {label: 'Bootstrap', icon: bootstrapIcon},
        // {label: 'Redux', icon: imgAssetUrl('redux-icon.png')},
        {label: 'TailwindCSS', icon: tailwindcssIcon},
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