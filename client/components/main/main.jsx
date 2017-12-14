import React from 'react';
import Intro from './intro.jsx';
import About from './about.jsx';


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
        <About />
      </div>
    );
  }
}

export default Main;