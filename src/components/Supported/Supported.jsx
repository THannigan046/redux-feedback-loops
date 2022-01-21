import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

function Supported() {
    const feedback = useSelector(store => store.feedbackReducer)
    const history = useHistory()
    const nextPage = () => {
        history.push('/supported')
    }
    return (
        <>
            <h3>page 2 of 4</h3>
            <form onSubmit={addSupported}>
                <input
                    type='text'
                    value={supportedInput}
                />

            </form>
            <button onClick={nextPage}>Next</button>
        </>
    )
}

export default Supported;