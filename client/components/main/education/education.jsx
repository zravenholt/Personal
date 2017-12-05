import React from 'react';
import School from './highSchool.jsx';
import $ from 'jquery';
import {findDOMNode} from 'react-dom';
// import College from './college.jsx';
// import Coding from './coding.jsx';

class Education extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      selected: this.props.selected
    };

    this.selectSchool = this.selectSchool.bind(this);

  }

  selectSchool () {
    console.log($().fadeOut);
    let school = findDOMNode(this.refs.school);
    let college = findDOMNode(this.refs.college);
    let coding = findDOMNode(this.refs.coding);

    $(college, coding).fadeOut(500).promise().done(() => {
      console.log('done jquery triggered');
      this.setState({selected: 'school'});
        //run jquery on click in html
    });
    console.log('triggered');
  }

  

  render () {
    if (this.state.selected === null) {
      return (
        <div className='education'>
          <div id='tile-select'>Select a tile to learn more</div>
          <div className='tile-holder'>
            <div className='tile' id='school-tile' ref='school' onClick={this.selectSchool}>
              <img className='tile-image' src='./styles/Kingston-HS.png' />
              <div>Kingston High School</div>
            </div>
            <div className='tile' id='college-tile' ref='college' onClick={() => { this.setState({selected: 'college'}); }}>
              <img className='tile-image' src='./styles/Claremont_Mckenna_College_Seal.png' />
              <div>Claremont McKenna College</div>
            </div>
            <div className='tile' id='coding-tile' ref='coding' onClick={() => { this.setState({selected: 'coding'}); }}>
              <img className='tile-image' src='./styles/hack-reactor-logo.png' />
              <div>Hack Reactor Program</div>
            </div>
            <script>
              {$('#school-tile').click(() => {
                console.log('jquery school click');
              })}
            </script>
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