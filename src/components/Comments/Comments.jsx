import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { useState } from 'react'
function Comments(){
    const dispatch = useDispatch();
    let [commentToAdd, setCommentToAdd] = useState({ comments: '' })
    const history = useHistory()
    const nextPage = () => {
        history.push('/reviewFeedback')
    }
    const handleCommentChange = (evt) => {
        setCommentToAdd({
            comments: evt.target.value
        })
    }

    const addComments = (evt) => {
        evt.preventDefault()
        dispatch({
            type: 'ADD_COMMENT', 
            payload: commentToAdd
        })
        nextPage()
    }

    return(
        <>
        <h3>page 4 of 4</h3>
        <h2>Any comments you would like to leave?</h2>
            <form onSubmit={addComments}>
                <input
                    type='text'
                    
                    value={commentToAdd.comments}
                    onChange={handleCommentChange}
                />

            </form>
            <button onClick={nextPage}>Next</button>
        
        
        </>
    )
}

export default Comments;