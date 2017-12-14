import React from 'react';
import $ from 'jquery';
import {findDOMNode} from 'react-dom';
import SelectedHobby from './selectedHobby.jsx';

class Hobbies extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      selected: this.props.selected
    };

    this.selectHobby = this.selectHobby.bind(this);
    this.returnBack = this.returnBack.bind(this);

  }

  componentDidMount () {
    let hobby = findDOMNode(this.refs.hobby);
    $(hobby).hide().fadeIn(600).promise();
  }

  componentDidUpdate () {
    let hobby = findDOMNode(this.refs.hobby);
    $(hobby).hide().fadeIn(600).promise();
  }

  selectHobby (selected) {
    let games = findDOMNode(this.refs.games);
    let arts = findDOMNode(this.refs.arts);
    let sports = findDOMNode(this.refs.sports);
    let travel = findDOMNode(this.refs.travel);

    if (selected === 'games') {
      $(arts).add(sports).add(travel).fadeOut(600).dequeue()
      .animate({height: '0'}, {duration: 600}).add(games).fadeOut(600).promise().done(() => {
        this.setState({selected: 'games'});
      });
    } else if (selected === 'arts') {
      $(games).add(sports).add(travel).fadeOut(600).dequeue()
      .animate({height: '0'}, {duration: 600}).add(arts).fadeOut(600).promise().done(() => {
        this.setState({selected: 'arts'});
      });
    } else if (selected === 'sports') {
      $(games).add(arts).add(travel).fadeOut(600).dequeue()
      .animate({height: '0'}, {duration: 600}).add(games).fadeOut(600).promise().done(() => {
        this.setState({selected: 'sports'});
      });
    } else {
      $(games).add(arts).add(sports).fadeOut(600).dequeue()
      .animate({height: '0'}, {duration: 600}).add(games).fadeOut(600).promise().done(() => {
        this.setState({selected: 'travel'});
      });
    }
  }

  returnBack () {
    this.setState({selected: null});
  }

  

  render () {
    if (this.state.selected === null) {
      return (
        <div className='hobby' ref='hobby'>
          <div id='tile-select'>Select a tile to learn more</div>
          <div className='tile-holder'>
            <div className='tile hobby-tile' ref='games' onClick={() => { this.selectHobby('games'); }}>
              <img className='tile-image' src='./styles/cards.png' />
              <div>Games</div>
            </div>
            <div className='tile hobby-tile' ref='arts' onClick={() => { this.selectHobby('arts'); }}>
              <img className='tile-image' src='./styles/arts.png' />
              <div>Arts</div>
            </div>
            <div className='tile hobby-tile' ref='sports' onClick={() => { this.selectHobby('sports'); }}>
              <img className='tile-image' src='./styles/sports.png' />
              <div>Sports</div>
            </div>
            <div className='tile hobby-tile' ref='travel' onClick={() => { this.selectHobby('travel'); }}>
              <img className='tile-image' src='./styles/globe.png' />
              <div>Travel</div>
            </div>
          </div>
        </div>
      );
    }
    return (
      <div className='hobby'>
        <SelectedHobby selected={this.state.selected} returnBack={this.returnBack.bind(this)}/>
      </div>
    );
  }
}

export default Hobbies;