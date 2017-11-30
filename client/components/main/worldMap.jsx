import React from 'react';
import Datamap from 'datamaps';

class WorldMap extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      center: this.props.target,
      mapCreated: false
    };

    this.drawMap = this.drawMap.bind(this);
  }

  componentDidMount () {
    this.drawMap(); 
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
        },
        data: {
          USA: { fillKey: 'authorHasTraveledTo' }
        }
      });
      this.setState({
        mapCreated: true
      });
      console.log('drawmap', map);

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
        'SWE', 'IRL', 'PHL', 'JAM', 'ISR'
      ];

      let countryIndex = 0;
      let visitableIndex = 0;
      
      let addDestinations = () => {
        let name = visitable[visitableIndex];
        map.updateChoropleth({
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
        console.log(countryIndex);
        let name = countries[countryIndex];
        map.updateChoropleth({
          [name]: { fillKey: 'authorHasTraveledTo' }
        });
        countryIndex++;
        if (countryIndex === countries.length) {
          setTimeout(addDestinations, 250);
        } else {
          setTimeout(populateMap, 250);
        }
      };


      setTimeout(() => {
        populateMap();
      }, 700);
    }

  }


  
  render () {

    return (
      <div className='map-holder'>
        <div id='world-map'></div>
      </div>
    );

  }
}

export default WorldMap;