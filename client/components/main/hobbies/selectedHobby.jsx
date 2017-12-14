import React from 'react';
import $ from 'jquery';
import {findDOMNode} from 'react-dom';

class SelectedHobby extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      examples: [],
      pictureSrc: '',
      blurb: '',
      title: ''
    };

    this.schoolPopulate = this.schoolPopulate.bind(this);
    this.collegePopulate = this.collegePopulate.bind(this);
    this.codingPopulate = this.codingPopulate.bind(this);
    this.handleBack = this.handleBack.bind(this);
  }

  componentWillMount () {
    if (this.props.selected === 'games') {
      this.gamesPopulate();
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

  gamesPopulate () {
    this.setState({
      examples: [
        'Overwatch',
        '--- First Person Shooter videogame with diverse cast of characters to play',
        'Magic, the Gathering',
        '--- The best card game there is. Easy to learn, impossible to master.',
        'Boardgame classics: Chess, Go, Monopoly, etc',
        'Cabo',
        '--- Game of memorization and mental trickery, played with a regular deck of cards.',
        'Mass Effect',
        '--- This videogame trilogy is an epic RPG sci-fi that tells its story better than any book could'

      ],
      pictureSrc: './styles/Kingston-HS.png',
      blurb: 'I have always loved playing games with people. With my brother, my friends, myself, anyone who\'s willing to play really.' +
              'My favorite games are ones that have a good balance of planning ahead and executing that plan, ' + 
              'and sometimes a little luck. Below are some, but not all, of my favorites:',
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