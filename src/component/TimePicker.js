import React, {useState} from 'react'
import TimeKeeper from 'react-timekeeper'
import styled from 'styled-components'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import {TimeFive} from '@styled-icons/boxicons-solid/TimeFive'

export function format({hour, minute}) {
    return `${('0' + hour).slice(-2)} : ${('0' + minute).slice(-2)}`
}

const Clock = styled(TimeKeeper)`
    position: absolute !important;
    top: 2.5rem;
`

export default function TimePicker({time, onChange}) {
    const [show, setShow] = useState(false)
    return <InputGroup>
        <FormControl
            value={format(time)}
            onFocus={() => setShow(true)}
            onBlur={() => setShow(false)}
            readOnly
        />
        <InputGroup.Append>
            <InputGroup.Text><TimeFive /></InputGroup.Text>
        </InputGroup.Append>
    {
        show && <Clock
            hour24Mode
            switchToMinuteOnHourSelect
            forceCoarseMinutes
            coarseMinutes={5}
            time={time}
            onChange={({hour, minute}) => onChange({hour, minute})}
            onDoneClick={() => setShow(false)}
        />
    }
    </InputGroup>
}