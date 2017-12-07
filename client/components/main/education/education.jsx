import React from 'react';
import SelectedEducation from './selectedEducation.jsx';
import $ from 'jquery';
import {findDOMNode} from 'react-dom';

class Education extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      selected: this.props.selected
    };

    this.selectEducation = this.selectEducation.bind(this);
    this.returnBack = this.returnBack.bind(this);

  }

  componentDidMount () {
    let education = findDOMNode(this.refs.education);
    $(education).hide().fadeIn(600).promise();
  }

  componentDidUpdate () {
    let education = findDOMNode(this.refs.education);
    $(education).hide().fadeIn(600).promise();
  }

  selectEducation (selected) {
    let school = findDOMNode(this.refs.school);
    let college = findDOMNode(this.refs.college);
    let coding = findDOMNode(this.refs.coding);

    if (selected === 'school') {
      $(college).add(coding).fadeOut(600).dequeue()
      .animate({height: '0'}, {duration: 600}).add(school).fadeOut(600).promise().done(() => {
        this.setState({selected: 'school'});
      });
    } else if (selected === 'college') {
      $(school).add(coding).fadeOut(600).dequeue()
      .animate({height: '0'}, {duration: 600}).add(college).fadeOut(600).promise().done(() => {
        this.setState({selected: 'college'});
      });
    } else {
      $(school).add(college).fadeOut(600).dequeue()
      .animate({height: '0'}, {duration: 600}).add(coding).fadeOut(600).promise().done(() => {
        this.setState({selected: 'coding'});
      });
    }
  }

  returnBack () {
    this.setState({selected: null});
  }

  

  render () {
    if (this.state.selected === null) {
      return (
        <div className='education' ref='education'>
          <div id='tile-select'>Select a tile to learn more</div>
          <div className='tile-holder'>
            <div className='tile' id='school-tile' ref='school' onClick={() => { this.selectEducation('school'); }}>
              <img className='tile-image' src='./styles/Kingston-HS.png' />
              <div>Kingston High School</div>
            </div>
            <div className='tile' id='college-tile' ref='college' onClick={() => { this.selectEducation('college'); }}>
              <img className='tile-image' src='./styles/Claremont_Mckenna_College_Seal.png' />
              <div>Claremont McKenna College</div>
            </div>
            <div className='tile' id='coding-tile' ref='coding' onClick={() => { this.selectEducation('coding'); }}>
              <img className='tile-image' src='./styles/hack-reactor-logo.png' />
              <div>Hack Reactor Program</div>
            </div>
          </div>
        </div>
      );
    }
    return (
      <div className='education'>
        <SelectedEducation selected={this.state.selected} returnBack={this.returnBack.bind(this)}/>
      </div>
    );
  }
}

export default Education;