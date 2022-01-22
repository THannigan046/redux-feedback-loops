import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { useState } from 'react'
function Comments(){
    let [commentsInput, setCommentsInput] = useState('')
    const feedback = useSelector(store => store.feedbackReducer)
    const history = useHistory()
    const nextPage = () => {
        history.push('/thanks')
    }
    const addComments = () => {

    }

    return(
        <>
        <h3>page 4 of 4</h3>
        <h2>Any comments you would like to leave?</h2>
            <form onSubmit={addComments}>
                <input
                    type='text'
                    value={commentsInput}
                    onChange={event => setCommentsInput(event.target.value)}
                />

            </form>
            <button onClick={nextPage}>Next</button>
        
        
        </>
    )
}

export default Comments;