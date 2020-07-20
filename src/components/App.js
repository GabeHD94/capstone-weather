import React, { Component } from 'react';
import Weather from "./component/weather"
import Google from "./component/googleSearch"
import Date from "./component/date";
import Clock from './clock'
import { Spring } from 'react-spring/renderprops';



export default class App extends Component {
  render() {
    return (
      <Spring
      from={{ opacity: 0, marginTop: -500 }}
      to={{ opacity: 1, marginTop: 0}}
      >
        {props => (
          <div style={props}>
            <div className='app'>
              <div className="date-wrapper">
                <Date />
              </div>
              <div className="clock-wrapper">
                <Clock />
              </div>
              <Google />
              <Weather />

            </div>
          </div>
        )}
      </Spring>
    );

  }
}
