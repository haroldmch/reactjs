import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ type, text, clickHandler}) => {
    return (
        <button className={type} onClick={ () => { clickHandler(text) } }>
            <span>{ text}</span>
        </button>
    )
}

// Validation
Button.propTypes = {
    type: PropTypes.string,
    text: PropTypes.string.isRequired,
    clickHandler: PropTypes.func.isRequired
}

Button.defaultProps = {
    
}

export default Button