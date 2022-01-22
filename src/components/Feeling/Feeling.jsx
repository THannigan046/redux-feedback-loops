import React from 'react';
import {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
function Feeling() {
    const dispatch = useDispatch();
    const feedback = useSelector(store => store.feedbackReducer)
    const [feelingInput, setFeelingInput] = useState('')
    const history = useHistory() 

    const nextPage = () => {
        history.push('/understanding')
    }

    const handleSubmit = () => {
        dispatch({
            type: 'ADD_FEEDBACK',
            data: {
                feeling: feelingInput
            }
        })
    }
    return (
        <>
        <h3>page 1 of 4</h3>
        <h2>How are you feeling today?</h2>
        <form onSubmit={handleSubmit}>
        <input
        type='text'
        onChange={event => setFeelingInput(event.target.value)}
        value={feelingInput}
        />

        </form>
        <button onClick={nextPage}>Next</button>
        </>
    )
}

export default Feeling;