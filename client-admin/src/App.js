import './App.css';
import React, { Component } from 'react';
import MyProvider from './contexts/MyProvider';
import Login from './components/LoginComponent';
import Main from './components/MainComponent';
import axios from 'axios';
import { BrowserRouter } from 'react-router-dom';



class App extends Component {
  componentDidMount() {
    axios.get('/hello').then((res) => {
      const result = res.data;
      this.setState({ message: result.message });
    });
  }

  render() {
    return (
      <MyProvider>
        <Login />
        <BrowserRouter>
        <Main />
        </BrowserRouter>
      </MyProvider>
      
    );
  }
}

export default App;