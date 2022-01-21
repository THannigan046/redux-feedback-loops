import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
function Feeling() {
    const feedback = useSelector(store => store.feedbackReducer)
    const history = useHistory() 
    const nextPage = () => {
        history.push('/understanding')
    }
    return (
        <>
        <h3>page 1 of 4</h3>
        <h2>How are you feeling today?</h2>
        <form>
        <input
        type='text'
        />

        </form>
        <button onClick={nextPage}>Next</button>
        </>
    )
}

export default Feeling;