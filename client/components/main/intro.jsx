import React from 'react';
import $ from 'jquery';
import {findDOMNode} from 'react-dom';

class Intro extends React.Component {
  constructor (props) {
    super(props);

    let picCount = 6;

    this.state = {
      moving: false,
      picLocation: Math.floor(Math.random() * picCount),
      picIDList: ['tiger', 'ugandan', 'katie', 'skiing', 'boxing', 'starHawks'],
      sourceList: ['./styles/IntroPic.jpg', './styles/IntroPic2.jpg', './styles/IntroPic3.jpg', 
        './styles/skiing.jpg', './styles/MuayThai.jpg', './styles/starHawks.jpg'],
      descriptionList: ['This is me with my friend; Hobbes the Tiger. ' + 
                        'We share similar passions of adventuring, good meals, and algorithm puzzles. ' + 
                        'We do not share tail-mustache humor.', 

        'You might be asking; "Why is he holding Ugandan gin in one hand, ' + 
                        'a large rock in the other, and wearing a zebra shirt?" ' + 
                        'That\'s a good question. Shoot me a DM to find out the answer.', 
                        
        'This is me and my girlfriend of 5 years. As much as I hate to admit it, ' + 
                        'she has succeeded in turning me into a self-respecting adult. ' + 
                        'I did not see that one coming.',

        'Here you see me out on the slopes with my brother. While I cannot profess to be an excellent skier, ' + 
                        'I make up for it with attitude and a strong belief in gravity. I must say, ' + 
                        'skiing is pretty chill.',

        'This was taken during one of my excursions abroad, at a Muay Thai boxing match in Bangkok, Thailand. ' + 
                        'I explored much of South East Asia with the other hooligans you see here, and we had a blast.',

        'As you get to know me more, you will find out just how nerdy I am. For example, when at a Seahawks football game, ' +
                        'you know you can find me at the Darth Vader wearing "12th man" gear. Go Hawks!'
      ]
    };

    this.changePicture = this.changePicture.bind(this);

  }

  changePicture(direction) {
    let image = findDOMNode(this.refs.circularFrame);
    let text = findDOMNode(this.refs.picBlurb);

    if (!this.state.moving) {
      if (direction === 'left') {

        this.setState({
          moving: true
        });

        $(text).fadeToggle('fast');
        $(image).animate({'left': '+=100px'}, 'fast').fadeToggle('fast').dequeue().promise()
        .done(() => {
          if (this.state.picLocation > 0) {
            this.setState({
              picLocation: this.state.picLocation - 1
            });
          } else {
            this.setState({
              picLocation: this.state.sourceList.length - 1
            });
          }
          $(text).fadeToggle('fast');
          $(image).css('left', -100).animate({'left': '+=100px'}, 'fast')
          .fadeToggle('fast').promise().done(() => {
            this.setState({
              moving: false
            });
          });
        });
      } else {
        this.setState({
          moving: true
        });
        $(text).fadeToggle('fast');      
        $(image).animate({'left': '-=100px'}, 'fast').fadeToggle('fast').dequeue().promise()
        .done(() => {
          if (this.state.picLocation < this.state.sourceList.length - 1) {
            this.setState({
              picLocation: this.state.picLocation + 1
            });
          } else {
            this.setState({
              picLocation: 0
            });
          }
          $(text).fadeToggle('fast');        
          $(image).css('left', 100).animate({'left': '-=100px'}, 'fast')
          .fadeToggle('fast').promise().done(() => {
            this.setState({
              moving: false
            });
          });
        });
      }
    }
  }

  render () {
    return (
      <div className='intro' >
        <h1 className='greeting'>Hi there, my name is Zane.</h1>
        <div className='carousel'>
          <img className='arrow' onClick={() => {           
            if (!this.state.moving) {
              this.changePicture('left');
            }
          }
           } src='./styles/leftArrow.svg.png'/>
          <div className='circular-frame' ref='circularFrame'>
            <img id={this.state.picIDList[this.state.picLocation]} src={this.state.sourceList[this.state.picLocation]}/> 
          </div>
          <img className='arrow' onClick={() => {           
            if (!this.state.moving) {
              this.changePicture('right');
            }
          }
           } src='./styles/rightArrow.svg.png'/>
        </div>
        <div className='pic-blurb'>
          <div ref='picBlurb'>
            {this.state.descriptionList[this.state.picLocation % this.state.descriptionList.length]}
          </div>
        </div>
      </div>
    );
  }
}

export default Intro;