import React from 'react';
import $ from 'jquery';
import {findDOMNode} from 'react-dom';

class SelectedHobby extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      accomplishments: [],
      pictureSrc: '',
      titleRef: '',
      title: ''
    };

    this.schoolPopulate = this.schoolPopulate.bind(this);
    this.collegePopulate = this.collegePopulate.bind(this);
    this.codingPopulate = this.codingPopulate.bind(this);
    this.handleBack = this.handleBack.bind(this);
  }

  componentWillMount () {
    if (this.props.selected === 'school') {
      this.schoolPopulate();
    } else if (this.props.selected === 'college') {
      this.collegePopulate();
    } else if (this.props.selected === 'coding') {
      this.codingPopulate();
    }
  }

  componentDidMount () {
    let school = findDOMNode(this.refs.school);
    $(school).hide().fadeIn(600).promise();
  }

  handleBack () {
    let school = findDOMNode(this.refs.school);
    $(school).fadeOut(600).promise().done(this.props.returnBack);
  }

  schoolPopulate () {
    this.setState({
      accomplishments: [
        
      ],
      pictureSrc: './styles/Kingston-HS.png',
      titleRef: 'http://khs.nkschools.org/',
      title: 'Kingston High School'
    });
  }

  collegePopulate () {
    this.setState({
      accomplishments: [
        
      ],
      pictureSrc: './styles/Claremont_Mckenna_College_Seal.png',
      titleRef: 'https://www.cmc.edu/',
      title: 'Claremont McKenna College'
      
    });
  }

  codingPopulate () {
    this.setState({
      accomplishments: [
        
      ],
      pictureSrc: './styles/hack-reactor-logo.png',
      titleRef: 'https://www.hackreactor.com/',
      title: 'Hack Reactor Program'
      
    });
  }

  

  render () {
    return (
      <div className='school' ref='school'>
        <div className='school-data'>
          <div className='school-picture'>
            <img className='school-logo' src={this.state.pictureSrc} />
          </div>
          <div className='school-links'>
            <a className='school-title' href={this.state.titleRef}>{this.state.title}</a>
            <button className='return-button' onClick={this.handleBack}>Back to Hobbies</button>
          </div>
        </div>
        <div className='school-text'>
          <ul className='school-accomplishments'>
            {this.state.accomplishments.map((item, i) => {
              if (item[0] === '-') {
                return <li key={i} className='sub accomplishment'>{item}</li>;
              }
              return <li key={i} className='bold accomplishment'>{item}</li>;
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default SelectedHobby;