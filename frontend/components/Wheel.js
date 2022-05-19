import React from 'react'
import * as actions from '../state/action-creators'
import { connect } from 'react-redux'

function Wheel(props) {
    return (
        <div id="wrapper">
            <div id="wheel">
                <div style={{ "--i": 0 }} className={`cog ${props.wheel === 0 ? 'active' : ''}`}>{props.wheel === 0 ? 'B' : ''}</div>
                <div style={{ "--i": 1 }} className={`cog ${props.wheel === 1 ? 'active' : ''}`}>{props.wheel === 1 ? 'B' : ''}</div>
                <div style={{ "--i": 2 }} className={`cog ${props.wheel === 2 ? 'active' : ''}`}>{props.wheel === 2 ? 'B' : ''}</div>
                <div style={{ "--i": 3 }} className={`cog ${props.wheel === 3 ? 'active' : ''}`}>{props.wheel === 3 ? 'B' : ''}</div>
                <div style={{ "--i": 4 }} className={`cog ${props.wheel === 4 ? 'active' : ''}`}>{props.wheel === 4 ? 'B' : ''}</div>
                <div style={{ "--i": 5 }} className={`cog ${props.wheel === 5 ? 'active' : ''}`}>{props.wheel === 5 ? 'B' : ''}</div>
            </div>
            <div id="keypad">
                <button id="counterClockwiseBtn" >Counter clockwise</button>
                <button id="clockwiseBtn" onClick={() => props.moveClockwise()}>Clockwise</button>
            </div>
        </div>
    )
}

export default connect(st => st, actions)(Wheel)