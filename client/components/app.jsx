import React from 'react';
import Menu from './menu/menu.jsx';
import Main from './main/main.jsx';

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