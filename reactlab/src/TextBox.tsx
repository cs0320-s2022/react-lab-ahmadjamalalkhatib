import React from 'react';

function TextBox(props : any) {

    return(
        <div className = "TextBox">
            <header className = "TextBox-header">
                <label>
                    {props.label}
                </label>
                <input type = {'text'}
                       onChange = {(event) => props.change(event.target.value)}/>
            </header>
        </div>

    )
}

export default TextBox;