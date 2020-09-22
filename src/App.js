import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import './App.css';
// import TableWork from "./home-tasks/ht1/components/TableWork";
import Blog from "./home-tasks/ht2/Blog";
import Slider from './home-tasks/ht3/Slider'



  class App extends Component {
    render() {
      return (
          <>
        {/*<TableWork />*/}
        {/*<Slider />*/}
        <Blog />
        </>
      )
    }
  }

  export default App;