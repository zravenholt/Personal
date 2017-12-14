import React from 'react';
import Menu from './menu/menu.jsx';
import Main from './main/main.jsx';
import $ from 'jquery';
import {findDOMNode} from 'react-dom';


class App extends React.Component {
  constructor (props) {
    super(props);

    this.state = {

    };

  }


  render () {
    return (
      <div>
        <Menu />
        <Main />
      </div>
    );
  }
}

export default App;