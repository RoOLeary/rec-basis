import {Hero, Text, Media, Group, AllData, List, Row, Layout} from "./blocks";

export interface PageContent extends AllData<Hero | Text | Media | Group | List | Row> {
    type: string,
}

export interface PageConfig {
    locales: Record<string, string>
    layout: Layout
}

export interface Meta {
    description: string,
    keywords: string
}

export interface PageData {
    title: string,
    slug: string
    is_active: boolean,
    market: string,
    module: string,
    content: PageContent[],
    meta: Meta,
    config: PageConfig
}

export interface PageMeta {
    status: number,
    message: string,
    locale: string,
}

export interface PageResponse {
    data : PageData,
    meta : PageMeta
}

export interface ToteResponse {
    data : Array<string>,
    meta: PageMeta
}
