export const api_key = "36711beab143038cb4a13b9702b777fb"
export const language = "pt-BR"
export const getImage = (url: string | null | undefined) => url ? `https://image.tmdb.org/t/p/w500${url}` : ''