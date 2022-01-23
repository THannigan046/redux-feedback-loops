import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { Button } from '@mui/material';

function Thanks(){
    const feedback = useSelector(store => store.feedbackReducer)
    const dispatch = useDispatch()
    const history = useHistory()
    const leaveNewFeedback = () => {
        dispatch({
            type: 'CLEAR'
        })
        history.push('/')
    }
    return(
        <>
            <h2>Thank You!</h2>
            
            <Button onClick={leaveNewFeedback}>Leave new feedback</Button>
        </>
    )
}

export default Thanks 