import React from 'react';

class About extends React.Component {
  constructor (props) {
    super(props);

    this.state = {

    };

  }

  

  render () {
    return (
      <div className='about'>
        <h1 className='greeting'>Here's a little more about me:</h1>
        <div className='about-bar'>
          <div>
            <div className='about-selection'>Education</div>
            <div className='about-selection'>Hobbies</div>
            <div className='about-selection'>Travel</div>
          </div>
          <div className='about-bar-images'></div>
        </div>
      </div>
    );
  }
}

export default About;