import React from 'react'

const TitleInput = props => {
    return(
        <input type='text' placeholder='Update Title Here!' onChange={props.updateTitle} />
    )
}

export default TitleInput;
