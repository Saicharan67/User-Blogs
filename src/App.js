import React from 'react';
import logo from './logo.svg';
import ReactDOM from 'react-dom';
import './App.css';
import UserGallery from './components/usergallery/index.js'
function App() {
  return <UserGallery/>
}

ReactDOM.render(<App />, document.getElementById('root'))
