import { Component } from 'react';
import './App.css';
import StartScreen from '../layouts/start-screen/StartScreen'
import PriceScreen from '../layouts/price-screen/PriceScreen';
import AboutScreen from '../layouts/about-screen/AboutScreen';
import ContactScreen from '../layouts/contact-screen/ContactScreen';
import FooterScreen from '../layouts/footer-screen/FooterScreen';

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
    ],
      priceList: [
        {
          id:0,
          priceName: 'Lorem ipsum, dolor sit amet',
          price: 100
        },
        {
          id:1,
          priceName: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
          price: 200
        },
        {
          id:2,
          priceName: 'Temporibus rerum veritatis corporis maiores explicabo enim, esse, odio sunt, incidunt nesciunt amet earum nemo consectetur accusamus.',
          price: 1000
        },
        {
          id:3,
          priceName: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus rerum veritatis corporis maiores explicabo enim, esse, odio sunt, incidunt nesciunt amet earum nemo consectetur accusamus.',
          price: 10000
        }
      ],
    }
  }
  render() {
    return (
      <div className="app">
        <div className='content'>
        <StartScreen
        socialBarData={this.state.socialBarData} 
        />
        <PriceScreen
          priceListData={this.state.priceList}
        />
        <AboutScreen/>
        <ContactScreen/>
        <FooterScreen
          socialBarData={this.state.socialBarData} 
        />
       </div>
      </div>
    );
  }
}

export default App;
