export function selector(query) {
    const {content} = document.querySelector(`meta[name="${query}"]`)
    return content
}

export function empty(list) {
    return !list || !list.length
}