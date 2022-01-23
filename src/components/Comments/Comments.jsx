import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { useState } from 'react'
import { Button } from '@mui/material';
import { ArrowForward } from '@mui/icons-material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Input from '@mui/material/Input';
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

    const prevPage = () => {
        history.push('/supported')
    }

    return(
        <>
        <h3>page 4 of 4</h3>
        <h2>Any comments you would like to leave?</h2>
            <form onSubmit={addComments}>
                <Input
                    type='text'
                    
                    value={commentToAdd.comments}
                    onChange={handleCommentChange}
                />

            </form>
            <Button startIcon={<ArrowBackIcon />} onClick={prevPage}>Prev</Button>
            <Button endIcon={<ArrowForward />} onClick={nextPage}> Next</Button>
        
        
        </>
    )
}

export default Comments;