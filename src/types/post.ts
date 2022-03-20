export type Post = {
    item?: {
        featured_media?: string
        title?: {
            rendered?: string
        }
        excerpt?: {
            rendered?: string
        }
        id?: number | null
    }
    content?: {
        rendered?: string
    }
    page_views?: number
}
