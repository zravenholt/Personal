import React from 'react';
import Datamap from 'datamaps';
import $ from 'jquery';
import {findDOMNode} from 'react-dom';

class WorldMap extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      center: this.props.target,
      mapCreated: false,
      world: null
    };

    this.drawMap = this.drawMap.bind(this);
    this.buildMap = this.buildMap.bind(this);
  }

  componentDidMount () {
    this.drawMap();
    let container = findDOMNode(this.refs.mapHolder);
    $(container).hide().fadeIn(800).promise();
  
  }

  componentWillUnmount () {
    this.setState({
      mapCreated: false
    });
  }

  drawMap () {
    if (!this.state.mapCreated) {
      let map = new Datamap({
        element: document.getElementById('world-map'),
        fills: {
          defaultFill: '#ABDDA4',
          authorHasTraveledTo: '#fa0fa0',
          authorWantsToTravelTo: '#ffdb4d'
        }
      });
      this.setState({
        mapCreated: true,
        world: map
      });

      let worldMap = findDOMNode(this.refs.map);
      $(worldMap).hide().fadeIn(800).promise().done();
    }
  }

  buildMap () {
    console.log('building map');
    let countries = [
      'USA', 'CAN', 'GBR', 'FRA', 'BEL',
      'NLD', 'DEU', 'DNK', 'CZE', 'AUT',
      'SVK', 'SVN', 'HRV', 'BIH', 'ITA',
      'GRC', 'ARE', 'IND', 'NPL', 'THA',
      'KHM', 'IDN', 'GTM', 'BLZ', 'HND',
      'SLV', 'NIC', 'CRI', 'PAN', 'ECU',
      'PER', 'BOL', 'ARG', 'URY', 'BRA',
      'PRY', 'CHL', 'UGA', 'ESP', 'MEX', 
      'LAO', 'VNM', 'JPN'
    ];

    let visitable = [
      'CHN', 'AUS', 'NZL', 'ZAF', 'EGY',
      'MDG', 'CUB', 'MAR', 'TZA', 'NOR',
      'SWE', 'IRL', 'PHL', 'JAM', 'ISR',
      'COL',
    ];

    let countryIndex = 0;
    let visitableIndex = 0;
    
    let addDestinations = () => {
      console.log('adding destination');
      let name = visitable[visitableIndex];
      this.state.world.updateChoropleth({
        [name]: { fillKey: 'authorWantsToTravelTo' }
      });
      visitableIndex++;
      if (visitableIndex === visitable.length) {
        return;
      } else {
        setTimeout(addDestinations, 250);
      }
    };

    let populateMap = () => {
      console.log('populate Map');
      let name = countries[countryIndex];
      this.state.world.updateChoropleth({
        [name]: { fillKey: 'authorHasTraveledTo' }
      });
      countryIndex++;
      if (countryIndex === countries.length) {
        setTimeout(addDestinations, 250);
      } else {
        setTimeout(populateMap, 250);
      }
    };

    populateMap();
  }


  
  render () {

    return (
      <div className='map-holder' ref='mapHolder'>
        <div>
          <div className='map-blurb'>
            <div>Traveling is a lifelong passion of mine. I hope to one day explore the entire world and beyond.
                  Here, you can see the countries I have explored (in the order I saw them!).
            </div>
          </div>
          <div>
            <div className='legend'>
              <div className='legend-icons'>
                <div className='legend-icon' id='explored'></div>
                <div className='legend-icon' id='next'></div>
              </div>
              <div className='legend-texts'>
                <div className='legend-text'>: Explored!</div>
                <div className='legend-text'>: Next on my wishlist</div>
              </div>
              <button onClick={this.buildMap} id='world-populate-button'>Watch my adventures!</button>
            </div>
          </div>
        </div>
        <div id='world-map' ref='map'></div>
      </div>
    );

  }
}

export default WorldMap;