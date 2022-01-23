import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Button } from '@mui/material';
import { ArrowForward } from '@mui/icons-material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Input from '@mui/material/Input';

function Understanding() {
    const dispatch = useDispatch();
    const understanding = useSelector(store => store.understandingReducer)
    const history = useHistory()
    const [understandingToAdd, setUnderstandingToAdd] = useState({understanding: ''})
    const nextPage = () => {
        if (understanding === '' || understanding.understanding === "" || understanding.understanding < 0 || understanding.understanding > 5 || understanding.understanding === null){
            alert('please enter a valid input')
        }
        else {
            history.push('/supported')
        }
        
    }

    const prevPage = () => {
        history.push('/')
    }

    const handleUnderstandingChange = (evt) => {
        setUnderstandingToAdd({
            understanding: evt.target.value
        })
    }
    const handleSubmit = (evt) => {
        evt.preventDefault()
        dispatch({
            type: 'ADD_UNDERSTANDING',
            payload: understandingToAdd
        })
        //nextPage()
    }

    return (
        <>

            <h3>page 2 of 4</h3>
            <h2>How well are you understanding the content?</h2>
            <form onSubmit={handleSubmit}>
            <Input
                type='number'
                placeholder='scale of 0 to 5'
                onChange={handleUnderstandingChange}
                value={understandingToAdd.understanding}
            />
            </form>
            <Button startIcon={<ArrowBackIcon />} onClick={prevPage}>Prev</Button>
            <Button endIcon={<ArrowForward />} onClick={nextPage}> Next</Button>
        </>
    )
}

export default Understanding;