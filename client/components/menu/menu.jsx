import React from 'react';
import $ from 'jquery';
import {findDOMNode} from 'react-dom';

class Menu extends React.Component {
  constructor (props) {
    super(props);

    this.state = {

    };

    this.navigate = this.navigate.bind(this);

  }

  navigate (location) {

    let moveToDiv = '.' + location;

    
    $('html,body').animate({
      scrollTop: $(moveToDiv).offset().top - 50},
      'slow');

  }

  render () {
    return (
      <div className='Menu'>
        <div className='menu-holder'>
          <div className='menu-bar'>
            <div className='links' onClick={() => { this.navigate('intro'); }}>Photos</div>
            <div className='links' onClick={() => { this.navigate('about'); }}>About Me</div>
            <div className='links' onClick={() => { this.navigate('projects'); }}>Projects</div>
            <div className='links' onClick={() => { this.navigate('photos'); }}>Contact Info</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;