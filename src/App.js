import React, {useState} from 'react'

import './App.css'

import ColorBlock from './ColorBlock'

import ColorForm from './ColorForm'


<div>
<h1>Enter a valid color name below and see it appear on the screen! Magic!!</h1>
</div>
function App(){
    let [colors, setColors] = useState ([
    //Commented out for Bonus Section (As if starting app with blank array - user can make any type of rainbow using any color!)
        // 'violet', 'blue',
        // 'lightblue', 'green',
        // 'greenyellow', 'yellow',
        // 'orange', 'red'
    ])
    
    let colorMap = colors.map((color, i) => {
        return (
            <ColorBlock color={color} />
        )
    })

    const addColor = (newColor) => {
        setColors([...colors, newColor])
    }

    return (
        <div className="App">
            {colorMap}
            <ColorForm addColor={addColor} />
        </div>
    )
}

export default App;