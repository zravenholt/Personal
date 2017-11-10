import React from 'react';


class Intro extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      picLocation: 0,
      picIDList: ['tiger', 'ugandan', 'katie'],
      sourceList: ['./styles/IntroPic.jpg', './styles/IntroPic2.jpg', './styles/IntroPic3.jpg'],
      descriptionList: ['This is me with my friend; Hobbes the Tiger. ' + 
                        'We share similar passions of adventuring, good meals, and algorithm puzzles. ' + 
                        'We do not share tail-mustache humor.', 

        'You might be asking; "Why is he holding Ugandan gin in one hand, ' + 
                        'a large rock in the other, and wearing a zebra shirt?" ' + 
                        'That\'s a good question. Shoot me a DM to find out the answer.', 
                        
        'This is me and my girlfriend of 5 years. As much as I hate to admit it, ' + 
                        'she has succeeded in turning me into a self-respecting adult. ' + 
                        'I did not see that one coming.']
    };

    this.changePicture = this.changePicture.bind(this);

  }

  changePicture(direction) {
    if (direction === 'left') {
      if (this.state.picLocation > 0) {
        this.setState({
          picLocation: this.state.picLocation - 1
        });
      } else {
        this.setState({
          picLocation: this.state.sourceList.length - 1
        });
      }
    } else {
      if (this.state.picLocation < this.state.sourceList.length - 1) {
        this.setState({
          picLocation: this.state.picLocation + 1
        });
      } else {
        this.setState({
          picLocation: 0
        });
      }
    }
  }

  render () {
    return (
      <div className='intro'>
        <h1 className='greeting'>Hi there, my name is Zane.</h1>
        <div className='carousel'>
          <img className='arrow' onClick={() => { this.changePicture('left'); }} src='./styles/leftArrow.svg.png'/>
          <div className='circular-frame'>
            <img id={this.state.picIDList[this.state.picLocation]} src={this.state.sourceList[this.state.picLocation]}/> 
          </div>
          <img className='arrow' onClick={() => { this.changePicture('right'); }} src='./styles/rightArrow.svg.png'/>
        </div>
        <div className='pic-blurb'>{this.state.descriptionList[this.state.picLocation % this.state.descriptionList.length]}</div>
      </div>
    );
  }
}

export default Intro;