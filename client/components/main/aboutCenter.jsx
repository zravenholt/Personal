import React from 'react';
import Datamap from 'datamaps';
import WorldMap from './worldMap.jsx';

class AboutCenter extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
    };

  }


  
  render () {
    let body = <div></div>;
    if (this.props.target === null) {
      body = (<div id='waiting-for-select'>Please select a field to learn more about me!</div>);
    } else if (this.props.target === 'travel') {
      return (<div>
        <WorldMap />
      </div>);
    }
    return body;
  }
}

export default AboutCenter;