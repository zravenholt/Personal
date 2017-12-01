import React from 'react';

class Menu extends React.Component {
  constructor (props) {
    super(props);

    this.state = {

    };

  }

  render () {
    return (
      <div className='Menu'>
        <div className='menu-holder'>
          <div className='menu-bar'>
            <div className='links' >Photos</div>
            <div className='links' >About Me</div>
            <div className='links' >Projects</div>
            <div className='links' >Contact Info</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;