export function format({hour, minute}) {
    return `${('0' + hour).slice(-2)} : ${('0' + minute).slice(-2)}`
}

export const dayOfWeek = new Map([
    [1, '日'],
    [2, '月'],
    [3, '火'],
    [4, '水'],
    [5, '木'],
    [6, '金'],
    [7, '土'],
])

export const dayOfMonth = new Map(
    [...Array(31).keys()].map(i => [i + 1, `${i + 1}日`])
)

export function minutes({hour, minute}) {
    return hour * 60 + minute
}