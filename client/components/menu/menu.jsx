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

  componentDidMount () {
    let menu = findDOMNode(this.refs.menu);      
    let didScroll;
    let lastScrollTop = 0;
    let delta = 5;
    let navbarHeight = $(menu).outerHeight();
        
    function hasScrolled () {
      var st = $(window).scrollTop();
      if (Math.abs(lastScrollTop - st) <= delta) { return; }
      
      if (st > lastScrollTop && st > navbarHeight) {
        $(menu).removeClass('nav-down').addClass('nav-up');
      } else {
        if (st + $(window).height() < $(document).height()) {
          $(menu).removeClass('nav-up').addClass('nav-down');
        }
      }
      
      lastScrollTop = st;
    }
    
    $(window).scroll(function(event) {
      didScroll = true;
    });

    setInterval(function() {
      if (didScroll) {
        hasScrolled();
        didScroll = false;
      }
    }, 250);
  }

  navigate (location) {
    let moveToDiv = '.' + location;

    if (location === 'intro') {
      $('html,body').animate({
        scrollTop: $(moveToDiv).offset().top - 70},
        'slow');
    } else {
      $('html,body').animate({
        scrollTop: $(moveToDiv).offset().top},
        'slow');
    }
  }

  render () {
    return (
      <div className='Menu'>
        <div className='menu-holder' ref='menu'>
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