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
            src: Images.tgIcom,
            link: '#',
            alt: 'Alt'
        },
        {
            src: Images.wtIcon,
            link: '#',
            alt: 'Alt'
        },
        {
            src: Images.viberIcon,
            link: '#',
            alt: 'Alt'
        }
    ],
    socialBarDataFooter: [
      {
          src: Images.telegramLogo,
          link: '#',
          alt: 'Alt'
      },
      {
          src: Images.watsUpLogo,
          link: '#',
          alt: 'Alt'
      },
      {
          src: Images.viberLogo,
          link: '#',
          alt: 'Alt'
      }
  ],
    textListData: [
      {
        id: 0,
        src: Images.msTextListIcon1,
        text: Texts.ua.msTextListItem1
      },
      {
        id: 1,
        src: Images.msTextListIcon2,
        text: Texts.ua.msTextListItem2
      },
      {
        id: 2,
        src: Images.msTextListIcon3,
        text: Texts.ua.msTextListItem3
      },
      {
        id: 3,
        src: Images.msTextListIcon4,
        text: Texts.ua.msTextListItem4
      },
      {
        id: 4,
        src: Images.msTextListIcon5,
        text: Texts.ua.msTextListItem5
      }
    ],
    aboutListData: [
      {
        id: 0,
        text: Texts.ua.causeText,
        icon: Images.AboutListIcon
      },
      {
        id: 1,
        text: Texts.ua.causeText1,
        icon: Images.AboutListIcon
      },
      {
        id: 0,
        text: Texts.ua.causeText2,
        icon: Images.AboutListIcon
      },
      {
        id: 2,
        text: Texts.ua.causeText3,
        icon: Images.AboutListIcon
      },
      {
        id: 3,
        text: Texts.ua.causeText4,
        icon: Images.AboutListIcon
      },
      {
        id: 4,
        text: Texts.ua.causeText5,
        icon: Images.AboutListIcon
      },
      {
        id: 5,
        text: Texts.ua.causeText6,
        icon: Images.AboutListIcon
      },
    ]
    }
  }
  render() {
    return (
      <div className="app">
        <div className='content'>
        <StartScreen
        socialBarData={this.state.socialBarData} 
        textListData={this.state.textListData}
        />
        <PriceScreen
          priceListData={Texts.ua.priceList}
        />
        <AboutScreen
          aboutListData={this.state.aboutListData}
        />
        <ContactScreen/>
        <FooterScreen
          socialBarDataFooter={this.state.socialBarDataFooter} 
        />
       </div>
      </div>
    );
  }
}

export default App;
