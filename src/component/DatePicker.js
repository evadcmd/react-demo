import React, {useState, useEffect, useCallback} from 'react'
import styled from 'styled-components'
import {Calendar} from 'react-modern-calendar-datepicker'
import 'react-modern-calendar-datepicker/lib/DatePicker.css'

const Input = styled.div`
    display: flex;
    flex-wrap: wrap;
    height: auto;
    min-height: calc(1.5em + .75rem + 2px);
    border-radius: ${({focus}) => focus ? '4px' : '1px'};
    border-color: ${({focus}) => focus ? '#2684FF' : 'hsl(0, 0%, 80%)'};
`
const MultiValue = styled.div`
    background-color: hsl(0, 0%, 90%);
    border-radius: 2px;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    margin: 2px;
    min-width: 0;
    box-sizing: border-box;
`
const Label = styled.div`
    border-radius: 2px;
    color: hsl(0, 0%, 20%);
    font-size: 85%;
    overflow: hidden;
    padding: 3px;
    padding-left: 6px;
    text-overflow: ellipsis;
    white-space: nowrap;
    box-sizing: border-box;
`
const Remove = styled.div`
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    border-radius: 2px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    padding-left: 4px;
    padding-right: 4px;
    box-sizing: border-box;
    &:hover {
        background-color: #FFBDAD;
        color: #DE350B;
    }
`

function toMoment(day) {
    return moment({...day, month: day.month - 1})
}

function key({year, month, day}) {
    return year << 9 | month << 5 | day
}

function compareFunc(a, b) {
    return key(a) - key(b)
}

export default function DatePicker({selectedDays, setModal}) {
    const [show, setShow] = useState(false)

    function changeHandler(days) {
        days.sort(compareFunc)
        const from = toMoment(days[0])
        const to = toMoment(days[days.length - 1])
        if (from.year() >= moment.year() && from.diff(to, 'days') < 366)
            setModal(['indices, days'])
    }

    function remove(event) {
        event.stopPropagation()
        const i = event.currentTarget.getAttribute('id')
        const days = [...selectedDays]
        days.splice(i, 1)
        setModal(['indices', days])
    }

    const closeCalendar = useCallback(() => {
        setShow(false)
    }, [])

    const stopPropagation = useCallback((event) => {
        event.nativeEvent.stopImmediatePropagation()
    }, [])

    useEffect(() => {
        document.addEventListener('click', closeCalendar)
        return () => document.removeEventListener('click', closeCalendar)
    }, [])


    return <div onClick={stopPropagation}>

    </div>
}