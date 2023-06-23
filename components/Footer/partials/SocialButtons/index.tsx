import { FooterSocials } from '@/interfaces/blocks';
import Link from 'next/link';
import React, { FunctionComponent } from 'react';
import { IconName } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faTwitter, faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons'

const { library } = require('@fortawesome/fontawesome-svg-core');


// type socialButtonProps = {
//     socials: FooterSocials[]
// }

library.add(faFacebookSquare, faTwitter, faWhatsapp, faInstagram );

const socialFontAwesomeMap: Record<string, IconName> = {
    'facebook': 'facebook-square',
    'instagram': 'instagram',
    'whatsapp': 'whatsapp',
    'twitter': 'twitter'
}

const RenderSocialButton = (social: any, key: number) => {
    return(
        <Link key={key} className='w-12 h-12 rounded-[96px] color-white bg-grey3 flex items-center justify-center' href={social.link}>
            <FontAwesomeIcon className='text-white text-[22px]' icon={['fab', socialFontAwesomeMap[social.type]]} />
        </Link>
    )
}

const SocialButtons = ({socials}: socialButtonProps ) => {
    return(
        <div className='my-10 flex gap-5 w-full items-center justify-center'>
            {
                socials.map((social, index) => {
                    return(RenderSocialButton(social, index))
                })
            }
        </div>
    )
}

export default SocialButtons;