import { MediaSrc } from "./IMediaSrc"

export interface Advanced {
    custom_classes ?: Array<string>,
    anchor_name ?: string
    enabled ?: boolean
}

export interface Styling {
    background_color: string,
    vcenter ?: boolean,
    hcenter ?: boolean,
    sizing ?: string,
    rounded_corners ?: boolean,
    offset ?: string,
    text_color ?: string,
    variant ?: string,
    direction ?: string,
    primitive ?: boolean,
    no_margin ?: boolean,
    overlap ?: boolean,
    col_not_full_width ?: boolean
    background_image ?: MediaSrc["media_src"],
    full_width ?: boolean
}

export interface Common {
    advanced: Advanced,
    styling: Styling,
}

