
export function format({hour, minute}) {
    return `${('0' + hour).slice(-2)} : ${('0' + minute).slice(-2)}`
}