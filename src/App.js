import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import './App.css';
import TableWork from "./home-tasks/ht1/components/TableWork";
import Blog from "./home-tasks/ht2/Blog";



  class App extends Component {
    render() {
      return (
        <TableWork />
        // <Blog />
      )
    }
  }

  export default App;