import React from 'react';
import School from './highSchool.jsx';
// import College from './college.jsx';
// import Coding from './coding.jsx';

class Education extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      selected: null
    };

  }

  

  render () {
    if (this.state.selected === null) {
      return (
        <div className='education'>
          <div id='tile-select'>Select a tile to learn more</div>
          <div className='tile-holder'>
            <div className='tile' onClick={() => { this.setState({selected: 'school'}); }}>
              <img className='tile-image' src='./styles/Kingston-HS.png' />
              <div>Kingston High School</div>
            </div>
            <div className='tile' onClick={() => { this.setState({selected: 'college'}); }}>
              <img className='tile-image' src='./styles/Claremont_Mckenna_College_Seal.png' />
              <div>Claremont McKenna College</div>
            </div>
            <div className='tile' onClick={() => { this.setState({selected: 'coding'}); }}>
              <img className='tile-image' src='./styles/hack-reactor-logo.png' />
              <div>Hack Reactor</div>
            </div>
          </div>
        </div>
      );
    }
    return (
      <div className='education'>
        <School />
        {/* <College />
        <Coding /> */}
      </div>
    );
  }
}

export default Education;