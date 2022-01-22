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
        nextPage()
    }
    const nextPage = () => {
        if (supported === '' || supported < 0 || supported > 5) {
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
                    type='number'
                    placeholder='scale of 0 to 5'
                    value={supportedToAdd.supported}
                    onChange={handleSupportedChange}
                />

            </form>
            <button onClick={nextPage}>Next</button>
        </>
    )
}

export default Supported;