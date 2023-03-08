export type Beer = {
    id: string
    name: string
    abv: number
    ibu: number
    ounces: number
    // style: Style
    // brewery: Brewery
}

export type Style = {
    id: number
    name: string
}

export type Brewery = {
    id: number
    name: string
    city: string
    state: string
}