import React from 'react';
import AboutCenter from './aboutCenter.jsx';

class About extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      aboutCenter: null
    };
    
    this.changeCenter = this.changeCenter.bind(this);
  }

  changeCenter (target) {
    console.log('center change', target);
    this.setState({
      aboutCenter: target
    });
  }

  

  render () {
    return (
      <div className='about'>
        <h1 className='greeting'>Here's a little more about me:</h1>
        <div className='about-bar'>
          <div>
            <div className='about-selection' onClick={() => { this.changeCenter('education'); }} >Education</div>
            <div className='about-selection' onClick={() => { this.changeCenter('hobbies'); }} >Hobbies</div>
            <div className='about-selection' onClick={() => { this.changeCenter('travel'); }}>Travel</div>
          </div>
        </div>
        <div className='about-bar'>
          <AboutCenter target={this.state.aboutCenter}/>
        </div>
      </div>
    );
  }
}

export default About;