import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodolistHeader from './TodolistHeader';
import Todolist from './Todolist';

class App extends Component{
  // constructor(){

  // }
  render(){
    return(
      <div className="App">
        <TodolistHeader />
        <Todolist />
      </div>
    );
  }
}


export default App;
