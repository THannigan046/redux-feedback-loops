import React from 'react';
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { Button } from '@mui/material';
import { ArrowForward } from '@mui/icons-material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Input from '@mui/material/Input';
function Supported() {
    const dispatch = useDispatch();
    const supported = useSelector(store => store.supportedReducer)
    const history = useHistory()
    const [supportedToAdd, setSupportedToAdd] = useState({ supported: '' })
    const addSupported = (evt) => {
        evt.preventDefault()
        dispatch({
            type: 'ADD_SUPPORTED',
            payload: supportedToAdd
        })
        //nextPage()
    }
    const nextPage = () => {
        if (supported.supported === '' || supported.supported < 0 || supported.supported > 5 || supported.supported === null || supported === '') {
            alert('please enter a valid input')
        }
        else {
            history.push('/comments')
        }
        
    }
    const handleSupportedChange = (evt) => {
        setSupportedToAdd({
            supported: evt.target.value
        })
    }
    const prevPage = () => {
        history.push('/understanding')
    }
    return (
        <>
            <h3>page 3 of 4</h3>
            <h2>How supported did you feel today?</h2>
            <form onSubmit={addSupported}>
                <Input
                    type='number'
                    placeholder='scale of 0 to 5'
                    value={supportedToAdd.supported}
                    onChange={handleSupportedChange}
                />

            </form>
            <Button startIcon={<ArrowBackIcon />} onClick={prevPage}>Prev</Button>
            <Button endIcon={<ArrowForward />} onClick={nextPage}> Next</Button>
        </>
    )
}

export default Supported;