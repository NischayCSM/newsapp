import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from "react-top-loading-bar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export default class App extends Component {
  pageSize=5
  state={
    progress:0,
    apikey:process.env.REACT_APP_NEWS_API
  }
 setProgress=(progress)=>{
    this.setState({progress:progress})
  };
  render() {
    return (
      <Router>
    
        <Navbar/>
        <LoadingBar
        color="#f11946"
        progress={this.state.progress} 
      />
      <Routes>
          <Route exact path="/"element={<News setProgress={this.setProgress} apikey={this.state.apikey} key="general" pageSize={this.pageSize} category="general"/>}></Route>
          <Route exact path="/business" element={<News setProgress={this.setProgress} apikey={this.state.apikey} key="business" pageSize={this.pageSize} category="business"/>}></Route>
          <Route exact path="/entertainment" element={<News setProgress={this.setProgress} apikey={this.state.apikey} key="entertainment" pageSize={this.pageSize} category="entertainment"/>}></Route>
          <Route exact path="/health" element={<News setProgress={this.setProgress} apikey={this.state.apikey} key="health" pageSize={this.pageSize} category="health"/>}></Route>
          <Route exact path="/science" element={<News setProgress={this.setProgress} apikey={this.state.apikey} key="science" pageSize={this.pageSize} category="science"/>}></Route>
          <Route exact path="/sports"element={<News setProgress={this.setProgress} apikey={this.state.apikey} key="sports" pageSize={this.pageSize} category="sports"/>}></Route>
          <Route exact path="/technology"element={<News setProgress={this.setProgress} apikey={this.state.apikey} key="technology" pageSize={this.pageSize} category="technology"/>}></Route>
        </Routes>
      </Router>
    )
  }
}

