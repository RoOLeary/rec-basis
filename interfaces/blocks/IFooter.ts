import { Common } from "../common/ICommon"
import { MediaSrc } from "../common/IMediaSrc"

export interface FooterLinks {
    title: string
    label: string,
    type: string,
    method: string,
    href: string
}

export interface FooterSocials {
    type: string,
    link: string
}

export interface Footer extends Common, MediaSrc{
    columns?: FooterLinks[],
    socials?: FooterSocials[],
    cookie_privacy?: FooterLinks[]
}