import React from 'react'
import Button from './Button'
import PropTypes from 'prop-types'

const renderButtons = onClickNumber => {
    let numbers = [1,2,3,4,5,6,7,8,9,0]
    return numbers.map(item => { return (<Button text={item.toString()} clickHandler={onClickNumber} key={item}/>) }); 
}

const Numbers = ({ onClickNumber }) => {
    return (
        <section className="numbers" >
            { renderButtons(onClickNumber) }
        </section>
    )
}

// Validation
Numbers.propTypes = {
    onClickNumber: PropTypes.func.isRequired
}

export default Numbers