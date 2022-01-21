import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

function Understanding() {
    const feedback = useSelector(store => store.feedbackReducer) 
    const history = useHistory()
    const nextPage = () => {
    history.push('/supported')
    }
    return(
        <>
        <h3>page 2 of 4</h3>
        <h2>How well are you understanding the content?</h2>
        <button onClick={nextPage}>Next</button>
        </>
    )
}

export default Understanding;