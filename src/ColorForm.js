import React, { useState } from 'react'


function ColorForm(props){
    let [input, setInput] = useState('')

    const handleSubmit = (e) => {
        // Eliminate the default behavior of our form submittal
        e.preventDefault()
        setInput("")
        // addColor, the function we just built, should be available within props.
        props.addColor(input)
    }

    return (
        <div>
            <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width,initial-scale=0.2" />
                <meta name="description" content="game"/>
            </head>
            <h1>Enter a valid color name and watch it appear on the screen! Magic!!</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" minLength="3" maxLength="20" 
                onChange={(e) => setInput(e.target.value)}
                value={input} />
                <button type="submit">Submit!</button>
            </form>
        </div>
    )
}

export default ColorForm;


