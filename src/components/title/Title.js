import React from 'react'
import './index.css'

const Title = (props) => {
    const {title} = props
    return (
        <React.Fragment>
            <h2 className='title-component'>{title}</h2>
        </React.Fragment>
    )
}

export default Title