import { Component } from 'react';
import './App.css';
import StartScreen from '../layouts/start-screen/StartScreen'
import PriceScreen from '../layouts/price-screen/PriceScreen';
import AboutScreen from '../layouts/about-screen/AboutScreen';
import ContactScreen from '../layouts/contact-screen/ContactScreen';
import FooterScreen from '../layouts/footer-screen/FooterScreen';
import Images from '../resources/image';
import Texts from '../resources/text';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      socialBarData: [
        {
            src: Images.viberImg.src,
            link: '#',
            alt: Images.viberImg.alt
        },
        {
            src: Images.watsupImg.src,
            link: '#',
            alt: Images.watsupImg.alt
        },
        {
            src: Images.telegramImg.src,
            link: '#',
            alt: Images.telegramImg.alt
        }
    ],
    textListData: [
      {
        id: 0,
        src: Images.checkImg.src,
        text: Texts.ua.msTextListItem1
      },
      {
        id: 1,
        src: Images.checkImg.src,
        text: Texts.ua.msTextListItem2
      },
      {
        id: 2,
        src: Images.checkImg.src,
        text: Texts.ua.msTextListItem3
      },
      {
        id: 3,
        src: Images.checkImg.src,
        text: Texts.ua.msTextListItem4
      },
      {
        id: 4,
        src: Images.checkImg.src,
        text: Texts.ua.msTextListItem5
      },
      {
        id: 5,
        src: Images.checkImg.src,
        text: Texts.ua.msTextListItem6
      }
    ],
    aboutListData: [
      {
        id: 0,
        text: Texts.ua.causeText,
        icon: Images.dotImg.src,
        alt: Images.dotImg.alt
      },
      {
        id: 1,
        text: Texts.ua.causeText1,
        icon: Images.dotImg.src,
        alt: Images.dotImg.alt
      },
      {
        id: 0,
        text: Texts.ua.causeText2,
        icon: Images.dotImg.src,
        alt: Images.dotImg.alt
      },
      {
        id: 2,
        text: Texts.ua.causeText3,
        icon: Images.dotImg.src,
        alt: Images.dotImg.alt
      },
      {
        id: 3,
        text: Texts.ua.causeText4,
        icon: Images.dotImg.src,
        alt: Images.dotImg.alt
      },
      {
        id: 4,
        text: Texts.ua.causeText5,
        icon: Images.dotImg.src,
        alt: Images.dotImg.alt
      },
      {
        id: 5,
        text: Texts.ua.causeText6,
        icon: Images.dotImg.src,
        alt: Images.dotImg.alt
      },
    ]
    }
  }
  render() {
    return (
      <div className="app">
        <div className='content'>
        <StartScreen
        textListData={this.state.textListData}
        />
        <PriceScreen
          priceListData={Texts.ua.priceList}
        />
        <AboutScreen
          aboutListData={this.state.aboutListData}
        />
        <ContactScreen/>
       </div>
      </div>
    );
  }
}

export default App;
