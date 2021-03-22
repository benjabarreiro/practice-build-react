import { useState } from 'react'

function Form({ onAdd }) {
    const [text, setText] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        if(!text) {
            alert('Cant submit empty form')
            return
        }

        onAdd({ text })

        setText('')
    }
    return (
        <form onSubmit={onSubmit}>
            <div>
                <input type="text" placeholder="Type something" value={text} onChange={(e) => setText(e.target.value) } />
            </div>
            <input type="submit" value="Send" />
        </form>
    )
}

export default Form
