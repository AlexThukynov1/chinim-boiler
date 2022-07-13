import { Component } from 'react';
import './App.css';
import StartScreen from '../layouts/start-screen/StartScreen'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      socialBarData: [
        {
            src: '../assets/media/images/instagram.svg',
            link: '#',
            alt: 'Alt'
        },
        {
            src: '../assets/media/images/phone.svg',
            link: '#',
            alt: 'Alt'
        },
        {
            src: '../assets/media/images/viber.svg',
            link: '#',
            alt: 'Alt'
        }
    ]
    }
  }
  render() {
    return (
      <div className="app">
        <StartScreen
        socialBarData={this.state.socialBarData} 
        />
      </div>
    );
  }
}

export default App;
