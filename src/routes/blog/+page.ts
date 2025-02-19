import type { Post } from "$lib/types.js"
import type { PageLoad } from "./$types.js"

export const load: PageLoad = async ({ fetch }) => {
    const res = await fetch('blog/posts')
    const posts: Post[] = await res.json()
    return { posts }
}