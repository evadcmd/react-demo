import React, {useState, useRef} from 'react'

import styled from 'styled-components'

import TimeKeeper from 'react-timekeeper'
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
const Button = styled.div`
    text-align: center;
    padding: 10px 0;
`

export default function TimePicker({time, onChange}) {
    const [show, setShow] = useState(false)
    const inputRef = useRef(null)

    return <InputGroup>
        <FormControl
            ref = {inputRef}
            value={format(time)}
            onFocus={() => setShow(true)}
            onBlur={() => setShow(false)}
            readOnly
        />
        <InputGroup.Append onClick={() => inputRef.current.focus()}>
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
            doneButton={() => <Button>設定</Button>}
        />
    }
    </InputGroup>
}