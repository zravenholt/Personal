import React from 'react';

class SelectedEducation extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      accomplishments: [],
      pictureSrc: '',
      titleRef: '',
      title: ''
    };

    this.schoolPopulate = this.schoolPopulate.bind(this);
    this.collegePopulate = this.collegePopulate.bind(this);
    this.codingPopulate = this.codingPopulate.bind(this);
  }

  componentWillMount () {
    if (this.props.selected === 'school') {
      this.schoolPopulate();
    } else if (this.props.selected === 'college') {
      this.collegePopulate();
    } else if (this.props.selected === 'coding') {
      this.codingPopulate();
    }
  }

  schoolPopulate () {
    this.setState({
      accomplishments: [
        '4.0 GPA',
        'ASB President',
        '9 AP classes',
        '3 season athlete (Cross Country, Basketball, Track)',
        'Team captain of Basketball, Track'
      ],
      pictureSrc: './styles/Kingston-HS.png',
      titleRef: 'http://khs.nkschools.org/',
      title: 'Kingston High School'
    });
  }

  collegePopulate () {
    this.setState({
      accomplishments: [
        'Major: Science and Management',
        '  -- Neuroscience Focus',
        'Thesis: Effect of Brain Lesions on Zebra Finch Vocals',
        '  -- Performed brain surgery on finches and observed vocal patterns',
        'Involved with many on-campus clubs and intramural sports'
      ],
      pictureSrc: './styles/Claremont_Mckenna_College_Seal.png',
      titleRef: 'https://www.cmc.edu/',
      title: 'Claremont McKenna College'
      
    });
  }

  codingPopulate () {
    this.setState({
      accomplishments: [
        'Advanced and immersive full-stack software course',
        '80 hours per week of learning over 12+ weeks, 1,000 total hours',
        'First half focused on computer science knowledge',
        '  -- Algorithms, domain knowledge, Javascript fundamentals, frameworks',
        'Second half focused on creating real world applications',
        '  -- Varied tech stacks, deployment, agile work environment',
        'Tech: React/Redux, Angular, webpack, express/node, SQL,',
        'jQuery, D3, Git, AWS, Redis'
      ],
      pictureSrc: './styles/hack-reactor-logo.png',
      titleRef: 'https://www.hackreactor.com/',
      title: 'Hack Reactor Program'
      
    });
  }

  

  render () {
    return (
      <div className='school'>
        <div className='school-data'>
          <div className='school-picture'>
            <img className='school-logo' src={this.state.pictureSrc} />
          </div>
          <div>
            <a className='school-title'href={this.state.titleRef}>{this.state.title}</a>
          </div>
        </div>
        <ul className='school-accomplishments'>
          {this.state.accomplishments.map((item, i) => {
            return <li key={i} className='accomplishment'>{item}</li>;
          })}
        </ul>
        <button onClick={this.props.return}>Click here to go back</button>
      </div>
    );
  }
}

export default SelectedEducation;