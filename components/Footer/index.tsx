
import Link from 'next/link';
import Image from 'next/image'; 
import { Footer, FooterLinks } from '../../interfaces/blocks';
import SocialButtons from './partials/SocialButtons';

type footerProps = {
    footer?: Footer
}


const socials = [
    {
        type: 'facebook',
        link: 'facebook'
    },
    {
        type: 'twitter',
        link: 'twitter'
    },
    {
        type: 'instagram',
        link: 'instagram'
    },
    {
        type: 'youtube',
        link: 'youtube'
    }
];

const Footer = ({footer}:footerProps) => {
    // const { media_src, columns, advanced, styling, socials, cookie_privacy } = footer
    // const router = useRouter();
    // const locale = router.query.locale as string;
    // const parsed_footer_cols = columns.reduce((groups, item) => {
    //     const group = (groups[item.title] || []);
    //     group.push(item);
    //     groups[item.title] = group;
    //     return groups;
    //   }, {});

    const RenderCookiesPrivacy = (cookieprivacy: FooterLinks[]) => {

        return(
            <div className='flex w-full flex-row items-center justify-center md:gap-20 gap-2 my-2 text-center'>
                
                <Link href={'#'} className='prose prose-PicnicText text-white' prefetch={false}>
                    <p>Link</p>
                </Link>
                <Link href={'#'} className='prose prose-PicnicText text-white' prefetch={false}>
                    <p>Link</p>
                </Link>
                <Link href={'#'} className='prose prose-PicnicText text-white' prefetch={false}>
                    <p>Link</p>
                </Link>
                <Link href={'#'} className='prose prose-PicnicText text-white' prefetch={false}>
                    <p>Link</p>
                </Link>
                <Link href={'#'} className='prose prose-PicnicText text-white' prefetch={false}>
                    <p>Link</p>
                </Link>
                
                {/* {
                    cookieprivacy && cookieprivacy.map( (element: FooterLinks) => {
                        return(
                            <Link href={element.href} className='prose prose-PicnicText text-white' prefetch={false}>
                                <p>{element.label}</p>
                            </Link>
                        )
                    })
                } */}
            </div>
        )
    }

    return(
        <footer id={'footer'} className="footer block relative md:px-20 px-6 py-16 bg-biege text-white">
            <div className='relative flex flex-col items-start justify-center mx-auto max-w-7xl md:p-5 p-0 my-4'>
                <Link href={`/`} prefetch={false}>
                    <img className='my-5 rounded shake' src={'../assets/img/logo.svg'} alt={'logo'} width={48} height={48} />
                </Link>
                <div className='flex flex-row w-full h-full items-stretch justify-between flex-wrap md:gap-2 gap-8'>
                    <div className='flex flex-col gap-3 w-[155px] md:w-[210px]'>
                        <h3 className="column_heading">Picnic</h3>
                        <Link className='prose prose-PicnicText text-graylink' href={'/about'}>
                            <p>Over Picnic</p>
                        </Link>
                        <Link className='prose prose-PicnicText text-graylink' href={'/jobs'}>
                            <p>Careers at Picnic</p>
                        </Link>
                        <Link className='prose prose-PicnicText text-graylink' href={'#'}>
                            <p>Word Bezorger</p>
                        </Link>
                        <Link className='prose prose-PicnicText text-graylink' href={'#'}>
                            <p>Word magazijnmedewerker</p>
                        </Link>
                        <Link className='prose prose-PicnicText text-graylink' href={'#'}>
                            <p>Word vrachtwagenchauffeur</p>
                        </Link>
                        <Link className='prose prose-PicnicText text-graylink' href={'#'}>
                            <p>Blog</p>
                        </Link>

                        
                    </div>
                    <div className='flex flex-col gap-3 w-[155px] md:w-[210px]'>
                        <h3 className="column_heading">Online supermarkt</h3>
                        <Link className='prose prose-PicnicText text-graylink' href={'#'}>
                            <p>App downloaden</p>
                        </Link>
                        <Link className='prose prose-PicnicText text-graylink' href={'#'}>
                            <p>Ons assortiment</p>
                        </Link>
                        <Link className='prose prose-PicnicText text-graylink' href={'#'}>
                            <p>Hoe werkt het?</p>
                        </Link>
                        <Link className='prose prose-PicnicText text-graylink' href={'#'}>
                            <p>Waar bezorgt Picnic?</p>
                        </Link>
                        <Link className='prose prose-PicnicText text-graylink' href={'#'}>
                            <p>Thuisbezorgingen</p>
                        </Link>
                        <Link className='prose prose-PicnicText text-graylink' href={'#'}>
                            <p>Op reis voor de laagste prijs</p>
                        </Link>
                        <Link className='prose prose-PicnicText text-graylink' href={'#'}>
                            <p>Koken met Picnic</p>
                        </Link>
                        <Link className='prose prose-PicnicText text-graylink' href={'#'}>
                            <p>Tasjes</p>
                        </Link>
                    </div>
                    <div className='flex flex-col gap-3 w-[155px] md:w-[210px]'>
                        <h3 className="column_heading">Vragen</h3>
                        <Link className='prose prose-PicnicText text-graylink' href={'#'}>
                            <p>Veelgestelde vragen</p>
                        </Link>
                        <Link className='prose prose-PicnicText text-graylink' href={'#'}>
                            <p>Algemene voorwaarden</p>
                        </Link>
                        <Link className='prose prose-PicnicText text-graylink' href={'#'}>
                            <p>Belangrijke mededelingen</p>
                        </Link>
                        <Link className='prose prose-PicnicText text-graylink' href={'#'}>
                            <p>Thuiswinkel Waarborg</p>
                        </Link>
                        <Link className='prose prose-PicnicText text-graylink' href={'#'}>
                            <p>Acties en prijzen</p>
                        </Link>
                        <Link className='prose prose-PicnicText text-graylink' href={'#'}>
                            <p>Contact</p>
                        </Link>
                    </div>
                    {/* {
                        Object.keys(parsed_footer_cols).map( (col) => {
                            console.log(col)
                            return(
                                <div className='flex flex-col gap-3 w-[155px] md:w-[210px]'>
                                    <strong>{col}</strong>
                                    {
                                        parsed_footer_cols[col].map( link => 
                                            {
                                                return(
                                                    <Link className='prose prose-PicnicText text-white' href={link.type == 'page' ? `${locale}/${link.href}` : link.href}>
                                                        <p>{link.label}</p>
                                                    </Link>
                                                )
                                            }
                                        )
                                    }
                                </div>
                            )
                        })
                    } */}
                </div>
                {/* <SocialButtons socials={socials}/> */}
                <span style={{'height': '2em', 'marginBottom': '2em' }} ></span>
                {/* {RenderCookiesPrivacy(cookie_privacy)} */}
                <div className='flex w-full flex-row items-center justify-center gap-20 my-2 text-centerprose prose-PicnicText text-graylink'>
                    <p className="column_heading">© {(new Date().getFullYear())} Picnic</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;