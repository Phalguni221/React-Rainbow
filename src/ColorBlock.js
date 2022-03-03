import React, { useState } from 'react'

function ColorBlock(props){
    return (
        <div className="colorBlock"
        style={{'backgroundColor': props.color}}>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width,initial-scale=0.5" />
        <meta name="description" content="game"/>
            <p>{props.color}</p>
        </div>
    )
}

// Do not forget to export your component once you have built it!
export default ColorBlock;