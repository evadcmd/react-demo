import {dayOfWeek, dayOfMonth} from 'time'

const BASIS = moment({
    year: 1970,
    month: 0, // [0-11]
    day: 1
})

const LABEL_MAP = {
    WEEK: dayOfWeek,
    MONTH: dayOfMonth,
    SINGLE_SHOT: new Map()
}

function dateObj(momentObj) {
    return {
        year: momentObj.get('year'),
        month: momentObj.get('month'),
        day: momentObj.get('date'),
    }
}

export function toMoment(day) {
    return moment({...day, month: day.month - 1})
}

function indexToDay(indices) {
    const from = moment(BASIS).add(indices[0], 'days')
    const res = [dateObj(from)]
    for (let i = 1; i < indices.length; i++)
        res.push(dateObj(moment(from).add(indices[i], 'days')))
    return res
}

function dayToIndex(days) {
    const offset = toMoment(days[0])
    const res = [offset.diff(BASIS, 'days')]
    for (let i = 1; i < days.length; i++)
        res.push(toMoment(days[i]).diff(offset, 'days'))
    return res
}

export function unpack({indices, mode, ...props}) {
    const label = LABEL_MAP[mode]
    return {
        ...props,
        mode,
        indices: mode === 'SINGLE_SHOT' ?
            indexToDay(indices) :
            indices.map(index => ({label: label.get(index), value: index})) // for react select
    }
}

export function pack({cameras, mode, indices, start, end, ...props}) {
    return {
        ...props,
        start,
        mode,
        duration: minutes(end) - minutes(start),
        cameras: cameras ? cameras.map(({label, value}) => ({id: value, label})) : [],
        indices: mode === 'SINGLE_SHOT' ? dayToIndex(indices) : indices.map(({value}) => value)
    }
}