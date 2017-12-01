import React from 'react';

class School extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      schoolAccomplishments: [
        '4.0 GPA',
        'ASB President',
        '9 AP classes',
        '3 season athlete (Cross Country, Basketball, Track)',
        'Team captain of Basketball, Track'
      ]
    };

  }

  

  render () {
    return (
      <div className='school'>
        <img className='school-logo' src='./styles/Kingston-HS.png' />
        <a href='http://khs.nkschools.org/'>Kingston High School</a>
        <ul className='school-accomplishments'>
          {this.state.schoolAccomplishments.map((item, i) => {
            return <li key={i} className='accomplishment'>{item}</li>;
          })}
        </ul>
        <div className='education-blurb'>
          My local, small-town high school. Here I learned the basics of knowledge,
          but also learned that hard work pays off in the end. 
        </div>
      </div>
    );
  }
}

export default School;