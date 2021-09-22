import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  pageSize = 9;
  apiKey = process.env.REACT_APP_NEWS_API
  state = {
    progress: 10
  }
  setProgress = (progress)=>{
    this.setState({progress:progress});
  }
  render() {
    return (
      <div>
        
        <Router>
        <NavBar />
        <LoadingBar
        height = {3}
        color='#f11946'
        progress={this.state.progress}
        />
          <Switch> 
          <Route exact path="/">
                <News setProgress={this.setProgress} apiKey={this.apiKey} key="genral"  pageSize = {this.pageSize} country="in" category="genral"/>
            </Route>
            <Route exact path="/buisness">
                <News setProgress={this.setProgress} apiKey={this.apiKey} key="buisness"  pageSize = {this.pageSize} country="in" category="buisness"/>
            </Route>
            <Route exact path="/entertainment">
                <News setProgress={this.setProgress} apiKey={this.apiKey} key="entertainment" pageSize = {this.pageSize} country="in" category="entertainment"/>
            </Route>
            <Route exact path="/genral">
                <News setProgress={this.setProgress} apiKey={this.apiKey} key="genral" pageSize = {this.pageSize} country="in" category="genral"/>
            </Route>
            <Route exact path="/health">
                <News setProgress={this.setProgress} apiKey={this.apiKey} key="health" pageSize = {this.pageSize} country="in" category="health"/>
            </Route>
            <Route exact path="/science">
                <News setProgress={this.setProgress} apiKey={this.apiKey} key="science" pageSize = {this.pageSize} country="in" category="science"/>
            </Route>
            <Route exact path="/sports">
                <News setProgress={this.setProgress} apiKey={this.apiKey} key="sports" pageSize = {this.pageSize} country="in" category="sports"/>
            </Route>
            <Route exact path="/technology">
                <News setProgress={this.setProgress} apiKey={this.apiKey} key="technology" pageSize = {this.pageSize} country="in" category="technology"/>
            </Route>
            
          </Switch>

        </Router>


        
     
     
      </div>
    )
  }
}

