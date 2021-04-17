import React from 'react'
import Button from './Button'
import PropTypes from 'prop-types'

const Functions = ({ onContentClear, OnDelete }) => {
    return (
        <section className="functions">
            <Button type="button-long-text" text="Clear" clickHandler={ onContentClear } />
            <Button text="&larr;" clickHandler={ OnDelete } />
        </section>
    )
}

// Validation
Functions.propTypes = {
    onContentClear: PropTypes.func.isRequired,
    OnDelete: PropTypes.func.isRequired,
}

export default Functions