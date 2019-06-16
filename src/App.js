import React from 'react';
import logo from './logo.svg';
import './App.css';

function sayHi(){
  alert('Hi')
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          编辑 <code>src/App.js</code> 就能改变页面展示。
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={sayHi}>点我</button>
      </header>
    </div>
  );
}

export default App;
