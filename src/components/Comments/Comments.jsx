import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

function Comments(){
    const feedback = useSelector(store => store.feedbackReducer)
    const history = useHistory()
    const nextPage = () => {
        history.push('/thanks')
    }

    return(
        <>
        <h3>page 4 of 4</h3>
            <form onSubmit={addComments}>
                <input
                    type='text'
                    value={commentsInput}
                />

            </form>
            <button onClick={nextPage}>Next</button>
        
        
        </>
    )
}

export default Comments;