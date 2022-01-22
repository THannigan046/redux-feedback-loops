import React from 'react';
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

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
    }
    const nextPage = () => {
        if (supported === '') {
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
    return (
        <>
            <h3>page 3 of 4</h3>
            <h2>How supported did you feel today?</h2>
            <form onSubmit={addSupported}>
                <input
                    type='text'
                    value={supportedToAdd.supported}
                    onChange={handleSupportedChange}
                />

            </form>
            <button onClick={nextPage}>Next</button>
        </>
    )
}

export default Supported;