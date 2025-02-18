import {ReactNode} from "react";
import Header from "@/Components/layout/Header";

export default function Layout({children}: { children: ReactNode }) {
    return (
        <>
            <header className='w-full flex justify-center'><Header/></header>
            <main className='px-5 sm:px-10 py-2'>{children}</main>
        </>
    )
}