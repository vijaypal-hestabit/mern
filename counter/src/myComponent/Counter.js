import React, { useState } from 'react'
import PropTypes from 'prop-types';

export default function Counter(props) {
    return (
        <div>
            <h1>{props.title}</h1>
            <button onClick={props.minus}>-</button>
            <input type="number" onChange={props.getInput} readOnly value={props.count} />
            <button onClick={props.plus}>+</button>
        </div>
    )
}

Counter.propTypes = {
    title: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired,
    plus: PropTypes.func.isRequired,
    minus: PropTypes.func.isRequired

}

Counter.defaultProps = {
    title: 'Write here title',
    cout: 0
}