import React from 'react';
import Datamap from 'datamaps';

class AboutCenter extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      center: this.props.target
    };

    this.drawMap = this.drawMap.bind(this);
  }

  componentDidUpdate () {
    this.drawMap(); 
    
  }

  drawMap () {
    let map = new Datamap({element: document.getElementById('world-map')});
  }


  
  render () {
    let body = <div></div>;
    if (this.props.target === null) {
      body = (<div>Please select a field to learn more about me!</div>);
    } else if (this.props.target === 'travel') {
      body = (
        <div>
          <div id='world-map'></div>
        </div>
      );
    }
    return body;
  }
}

export default AboutCenter;