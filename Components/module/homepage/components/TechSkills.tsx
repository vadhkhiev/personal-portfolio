import Image, {StaticImageData} from "next/image";
import bootstrapIcon from "@/Components/assets/image/bootstrap-icon.png";
import nextjsIcon from "@/Components/assets/image/nextjs-icon.png";
import tailwindcssIcon from "@/Components/assets/image/tailwindcss-icon.png";
import reactIcon from "@/Components/assets/image/react-icon.png";
import nodeIcon from "@/Components/assets/image/node-icon.png"
import {Poppins} from "next/font/google";

type ModelTechSkillIcons = {
    label: string,
    icon: StaticImageData,
}

const poppins = Poppins({subsets: ['latin'], weight: '400'})

export default function TechSkills() {


    const tech_skills_icons: ModelTechSkillIcons[] = [
        {label: 'REACTJS', icon: reactIcon},
        {label: 'NEXTJS', icon: nextjsIcon},
        {label: 'BOOTSTRAP', icon: bootstrapIcon},
        // {label: 'Redux', icon: imgAssetUrl('redux-icon.png')},
        {label: 'TAILWINDCSS', icon: tailwindcssIcon},
        {label:'NODEJS', icon: nodeIcon}
    ]

    return (
        <>
            <main className={`h-30 flex justify-center flex-wrap sm:flex-nowrap space-x-1 pb-4 ${poppins.className}`}>
                {
                    tech_skills_icons.map(({label, icon}) => {
                        return (
                            <div key={label}
                                 className={'h-24 w-24'}>
                                <Image src={icon} width={100} height={100} alt={'image'}/>
                                {/*<p className='text-center text-white'>{label}</p>*/}
                            </div>
                        )
                    })
                }
            </main>
        </>
    )

}