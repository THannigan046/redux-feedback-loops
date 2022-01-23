import React from 'react';
import {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { Button } from '@mui/material';
import { ArrowForward } from '@mui/icons-material';
function Feeling() {

    const dispatch = useDispatch();
    const feeling = useSelector(store => store.feelingReducer)
    const [feelingToAdd, setFeelingToAdd] = useState({feeling: ''})
    const history = useHistory() 

    const nextPage = () => {
        //could've done min/max, but that made the input shrink
        if (feeling.feeling === '' || feeling.feeling < 0 || feeling.feeling > 5 || feeling.feeling === null){
            alert('please enter a valid input')
        }
        else {
            history.push('/understanding')
        }
    }

    const handleFeelingChange = (evt) => {
        setFeelingToAdd({ 
            feeling: evt.target.value
        })
    }
    const handleSubmit = (evt) => {
        evt.preventDefault()
        dispatch({
            type: 'ADD_FEELING',
            payload: feelingToAdd
        })
        
        //nextPage()
        
    }
    return (
        <>
        <h3>page 1 of 4</h3>
        <h2>How are you feeling today?</h2>
        <form onSubmit={handleSubmit}>
        <input
        type='number'
        placeholder='scale of 0 to 5'
        onChange={handleFeelingChange}
        value={feelingToAdd.feeling}
        />

        </form>
        
        <Button endIcon={<ArrowForward/>} onClick={nextPage}>Next</Button>
        </>
    )
}

export default Feeling;