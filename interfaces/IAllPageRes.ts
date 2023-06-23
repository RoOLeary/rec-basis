export interface AllPageResponse {
    name: string,
    markets: Record<string, MarketPageData>
}

export interface AllChangeResponse {
    name: string,
    changes: Record<string, MarketPageData>
}

export interface MarketPageData {
    display: string,
    locales: Array<string>,
    pages: Array<string>
}