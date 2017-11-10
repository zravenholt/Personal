import React from 'react';
import Intro from './intro.jsx';

class Main extends React.Component {
  constructor (props) {
    super(props);

    this.state = {

    };

  }

  

  render () {
    return (
      <div className='main'>
        <Intro />
      </div>
    );
  }
}

export default Main;