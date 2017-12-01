import React from 'react';
import School from './highSchool.jsx';
// import College from './college.jsx';
// import Coding from './coding.jsx';

class Education extends React.Component {
  constructor (props) {
    super(props);

    this.state = {

    };

  }

  

  render () {
    return (
      <div className='education'>
        <School />
        {/* <College />
        <Coding /> */}
      </div>
    );
  }
}

export default Education;