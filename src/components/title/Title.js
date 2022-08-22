import React from 'react'
import './index.css'

const Title = (props) => {
    const {title} = props
    return (
        <div className='title-wrapper'>
            <h2 className='title-component'>{title}</h2>
        </div>
    )
}

export default Title