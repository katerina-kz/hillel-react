import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import './App.css';
// import TableWork from "./home-tasks/ht1/components/TableWork";
// import Blog  from "./home-tasks/ht2/Blog";
// import Slider from './home-tasks/ht3/Slider';
// import Form from './home-tasks/ht4/Form';
// import BlogRouter from "./home-tasks/ht5/BlogRouter";
// import ShopRedux from './home-tasks/ht6/ShopRedux'
import Wrapper from "./home-tasks/ht6/Wrapper";


  class App extends Component {
    render() {
      return (
          <>
        {/*<TableWork />*/}
        {/*<Slider />*/}
        {/*<Form />*/}
        {/*<Blog />*/}
        {/*<BlogRouter/>*/}
        <Wrapper/>
        </>
      )
    }
  }

  export default App;