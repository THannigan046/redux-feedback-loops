import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'

function Understanding() {
    const dispatch = useDispatch();
    const understanding = useSelector(store => store.understandingReducer)
    const history = useHistory()
    const [understandingToAdd, setUnderstandingToAdd] = useState({understanding: ''})
    const nextPage = () => {
        if (understanding === '' || understanding < 0 || understanding > 5){
            alert('please enter a valid input')
        }
        else {
            history.push('/supported')
        }
        
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
        nextPage()
    }

    return (
        <>

            <h3>page 2 of 4</h3>
            <h2>How well are you understanding the content?</h2>
            <form onSubmit={handleSubmit}>
            <input
                type='number'
                placeholder='scale of 0 to 5'
                onChange={handleUnderstandingChange}
                value={understandingToAdd.understanding}
            />
            </form>
            <button onClick={nextPage}>Next</button>
        </>
    )
}

export default Understanding;