import React from 'react';
import {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

function Supported() {
    let [supportedInput, setSupportedInput ] = useState('')
    const feedback = useSelector(store => store.feedbackReducer)
    const history = useHistory()
    const addSupported = () => {

    }
    const nextPage = () => {
        history.push('/comments')
    }
    return (
        <>
            <h3>page 2 of 4</h3>
            <h2>How supported did you feel today?</h2>
            <form onSubmit={addSupported}>
                <input
                    type='text'
                    value={supportedInput}
                    onChange = {event => setSupportedInput(event.target.value)}
                />

            </form>
            <button onClick={nextPage}>Next</button>
        </>
    )
}

export default Supported;