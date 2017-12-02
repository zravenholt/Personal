import React from 'react';
import Datamap from 'datamaps';
import WorldMap from './worldMap.jsx';
import Education from './education/education.jsx';

class AboutCenter extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
    };

  }


  
  render () {
    let body = <div></div>;
    if (this.props.target === null) {
      body = (<div id='waiting-for-select'>Select a field to learn more about me!</div>);
    } else if (this.props.target === 'travel') {
      return (<div>
        <WorldMap />
      </div>);
    } else if (this.props.target === 'education') {
      return (<div>
        <Education selected={null}/>
      </div>);
    }
    return body;
  }
}

export default AboutCenter;