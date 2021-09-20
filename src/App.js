import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
export default class App extends Component {
  pageSize = 9;
  render() {
    return (
      <div>
        
        <Router>
        <NavBar />
          <Switch> 
          <Route exact path="/">
                <News key="genral" pageSize = {this.pageSize} country="in" category="genral"/>
            </Route>
            <Route exact path="/buisness">
                <News key="buisness" pageSize = {this.pageSize} country="in" category="buisness"/>
            </Route>
            <Route exact path="/entertainment">
                <News key="entertainment" pageSize = {this.pageSize} country="in" category="entertainment"/>
            </Route>
            <Route exact path="/genral">
                <News key="genral" pageSize = {this.pageSize} country="in" category="genral"/>
            </Route>
            <Route exact path="/health">
                <News key="health" pageSize = {this.pageSize} country="in" category="health"/>
            </Route>
            <Route exact path="/science">
                <News key="science" pageSize = {this.pageSize} country="in" category="science"/>
            </Route>
            <Route exact path="/sports">
                <News key="sports" pageSize = {this.pageSize} country="in" category="sports"/>
            </Route>
            <Route exact path="/technology">
                <News key="technology" pageSize = {this.pageSize} country="in" category="technology"/>
            </Route>
            
          </Switch>

        </Router>


        
     
     
      </div>
    )
  }
}

