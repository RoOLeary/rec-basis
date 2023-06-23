import { Common } from "../../interfaces/common";
import { MediaSrc } from "../../interfaces/common/IMediaSrc"

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

export type Footer = Common & MediaSrc & {
    columns?: FooterLinks[],
    socials?: FooterSocials[],
    cookie_privacy?: FooterLinks[]
}