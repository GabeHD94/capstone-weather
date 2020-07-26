import React, { Component } from 'react';
import Weather from "./component/weather"
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Auth from "../components/component/logins/auth";
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
            <BrowserRouter>
            <div>
              <Switch>
                <Route exact path="/" component={Auth} />
                <Route path="/landing" component={Weather} />
              </Switch>
            </div>
            </BrowserRouter>
          </div>
        )}
      </Spring>
    );

  }
}


