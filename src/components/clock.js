import React, { Component } from 'react';
import Clockstyle from './clock.css'
import moment from 'moment-timezone';
import { Spring } from 'react-spring/renderprops';


export default class Clock extends Component {
    render() {
        const currenttime = function() {
            document.getElementById("datetime")
            .innerHTML = moment().format('h:mm a');
        }
        setInterval(currenttime, 1000);
        

        return (
        <Spring
        from={{ opacity: 0, marginTop: -500 }}
        to={{ opacity: 1, marginTop: 0}}
        config={{ delay: 700 }}
        >
        {props => (
            <div style={props}>
                <div className='clock-wrapper'>
                <div id="datetime"></div>
                </div>
                </div>
        )}
        </Spring>
            ); 
        }
}