export type Link = {
    name: string,
    link: string
}

export type Projects = {
    name: string,
    desc: string,
    links?: Link[]
}

export type Categories = 'svelte' | 'general'

export type Post = {
    slug: string,
    title: string,
    description: string,
    date: string
    categories: Categories[],
    published: boolean
}