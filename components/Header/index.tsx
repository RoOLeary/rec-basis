'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Header } from './header.interfaces';
import { usePathname } from 'next/navigation';

type headerProps = {
    header?: Header,
    locales?: Record<string,string>,
    currentLocale?: string
}

const Header = ({ header, locales, currentLocale}:headerProps ) => {
    
    const router = usePathname()
    const slug = "home"
    return(
        <header className="header block relative md:px-20 pl-6 bg-white">
            <div className="relative w-full flex justify-between mx-auto max-w-7xl md:px-4">
                <div className="flex flex-row items-center">
                    <Link href={`/`} prefetch={false} className="shake">
                        <Image className='my-5 rounded ' src={'../assets/img/logo.svg'} alt={'logo'} width={48} height={48} />
                    </Link>
                </div>
                
                <div className="flex flex-row items-center max-md:hidden">
                    <nav className="flex items-center text-white">
                        <Link href={`/${slug}` } className='prose text-black prose-PicnicText mx-2' prefetch={false}>
                            <p>About Picnic</p>
                        </Link>
                        <Link href={`/working-at-picnic` } className='prose text-black prose-PicnicText mx-2' prefetch={false}>
                            <p>Picnic as Employer</p>
                        </Link>
                        <Link href={`/teams` } className='prose text-black prose-PicnicText mx-2' prefetch={false}>
                            <p>Teams</p>
                        </Link>
                        <Link href={`/tech` } className='prose text-black prose-PicnicText mx-2' prefetch={false}>
                            <p>Tech</p>
                        </Link>
                        <Link href={`/de` } className='prose text-black prose-PicnicText mx-2' prefetch={false}>
                            <p>LANG</p>
                        </Link>
                        {/* Button should be a styled link */}
                        <Link href={`/jobs` } className='bg-greenish text-white rounded rounded-full mx-2 px-4 py-2' prefetch={false}>
                            <p>All jobs</p>
                        </Link>
                    </nav>
                </div>
                {/* Mobile Navigation */}
                {/* Can also be broken out into a sub-component */}
                <div className="sm:hidden md:visible lg:visible xl:visible 2xl:visible z-10 float-right">
                    <input type="checkbox" className="peer hidden" id="sidebar-collapse"/>
                    <label className="bg-transparent border-none m-[14px] z-10 absolute top-2 right-0 text-4xl group" htmlFor="sidebar-collapse">
                        <div className="relative flex items-center justify-center w-[50px] h-[50px] transform transition-all duration-200 my-1">
                            <div className="flex flex-col space-y-1 w-[20px] h-[20px] transform transition-all duration-300 origin-center">
                            <div className="bg-black h-[2px] w-5 group-peer-checked:w-6 border border-solid rounded transform transition-all duration-300 origin-left group-peer-checked:rotate-[42deg] group-peer-checked:-translate-y-[3.9px]"></div>
                            <div className="bg-black h-[2px] w-5 group-peer-checked:w-6 border border-solid rounded transform transition-all duration-300 group-peer-checked:opacity-0"></div>
                            <div className="bg-black h-[2px] w-5 group-peer-checked:w-6 border border-solid rounded transform transition-all duration-300 origin-left group-peer-checked:-rotate-[42deg]"></div>
                            </div>
                        </div>
                    </label>
                    <aside className="fixed top-0 bg-white w-full h-full -right-full peer-checked:right-0 ease-out delay-150 duration-300">
                        
                        <div className='pt-4 pl-6 list-none text-xl space-y-10'>
                        
                            <Link href={`/jobs` } className='prose text-black prose-PicnicText mx-1 text-black' prefetch={false}>
                                <p>Jobs</p>
                            </Link>
                            <Link href={`/teams` } className='prose text-black prose-PicnicText mx-1 text-black' prefetch={false}>
                                <p>Teams</p>
                            </Link>
                            <Link href={`/cities/amsterdam` } className='prose text-black prose-PicnicText mx-1 text-black' prefetch={false}>
                                <p>Cities</p>
                                <ul>
                                    <li>SubNav</li>
                                    <li>SubNav</li>
                                    <li>SubNav

                                        <ul>
                                            <li>Sub Sub Nav</li>
                                            <li>Sub Sub Nav</li>
                                            <li>Sub Sub Nav</li>
                                        </ul>
                                    </li>
                                </ul>
                            </Link>
                            <Link href={`/contact` } className='prose text-black prose-PicnicText mx-1 text-black' prefetch={false}>
                                <p>Contact</p>
                                <ul className="hid">
                                    <li>SubNav</li>
                                    <li>SubNav</li>
                                    <li>SubNav
                                    <li>SubNav
                                        <ul>
                                            <li>Sub Sub Nav</li>
                                            <li>Sub Sub Nav</li>
                                            <li>Sub Sub Nav</li>
                                        </ul>
                                    </li>
                                    </li>
                                </ul>
                            </Link>
                        </div>
                    </aside>
                </div>
            </div>
        </header>
    )
}

export default Header; 