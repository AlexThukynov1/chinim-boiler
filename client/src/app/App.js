import { Component } from 'react';

import axios from 'axios';

import Images from '../resources/image';
import Texts from '../resources/text';
import Forma from '../components/form/Form';
import OrderForm from '../components/order-form/OrderForm';
import AboutScreen from '../layouts/about-screen/AboutScreen';
import ContactScreen from '../layouts/contact-screen/ContactScreen';
import PriceScreen from '../layouts/price-screen/PriceScreen';
import StartScreen from '../layouts/start-screen/StartScreen';
import StartScreenHeader from '../components/start-screen-header/StartScreen';
import Confidence from '../components/form/Confidence/Confidence';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      idOrder: null,
      isFormVisible: false,
      isOrderForm: false,
      isConfidenceVisible: false,
      socialBarData: [
        {
          src: Images.viberImg.src,
          link: 'viber://chat?number=%2B380953674703',
          alt: Images.viberImg.alt
        },
        {
          src: Images.watsupImg.src,
          link: 'https://wa.me/380953674703',
          alt: Images.watsupImg.alt
        },
        {
          src: Images.telegramImg.src,
          link: 'https://t.me/ChinimBoiler',
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
        {
          id: 6,
          text: Texts.ua.causeText7,
          icon: Images.dotImg.src,
          alt: Images.dotImg.alt
        },
        {
          id: 7,
          text: Texts.ua.causeText8,
          icon: Images.dotImg.src,
          alt: Images.dotImg.alt
        },
        {
          id: 8,
          text: Texts.ua.causeText9,
          icon: Images.dotImg.src,
          alt: Images.dotImg.alt
        },
        {
          id: 9,
          text: Texts.ua.causeText10,
          icon: Images.dotImg.src,
          alt: Images.dotImg.alt
        },
      ],
    }
  }
  onFormTogle = () => {
    this.setState({ isFormVisible: true })
  }
  closeForm = () => {
    this.setState({ isFormVisible: false })
  }
  onVisibleConfidence = () => {
    this.setState({ isConfidenceVisible: true })
  }
  closeConfidence = () => {
    this.setState({ isConfidenceVisible: false })
  }
  onSubmit = async (values) => {
    values.id =  Date.now()-1670000000000;
    this.setState({idOrder: values.id})
    console.log(values);
    // const req = JSON.stringify(values)
    // console.log(req)
    try {
      await axios.post('https://host.chinimboiler.com:5000/', values);
      this.setState({isOrderForm: true,});
      this.setState({isFormVisible: false,});
    } 
    catch (error) {
      console.log(error)
      this.setState({isOrderForm: false,})
      this.setState({isFormVisible: false,})
    }

  }
  onCloseOrder = () => {
    this.setState({isFormVisible: false,isOrderForm: false,})
  }

  render() {
    const { isFormVisible,isOrderForm, isConfidenceVisible } = this.state;
    const viewForm = isFormVisible ? <Forma onSubmit={this.onSubmit} onVisibleConfidence={this.onVisibleConfidence} closeForm={this.closeForm} /> : null;
    const viewOrderForm = isOrderForm ? <OrderForm orderId={this.state.idOrder} onCloseOrder={this.onCloseOrder} /> : null;
    const confidenceView = isConfidenceVisible ? <Confidence closeConfidence={this.closeConfidence} /> : null;
    return (
      <div className="app">
        {confidenceView}
        {viewForm}
        {viewOrderForm}
        <div className='content'>
        <StartScreenHeader className='general-layout'/>
          <main>
            <StartScreen
              textListData={this.state.textListData}
              formVisible={this.onFormTogle}
              socialBarData={this.state.socialBarData}
            />
            <PriceScreen
              priceListData={Texts.ua.priceList}
              priceListData1={Texts.ua.priceList1}
              formVisible={this.onFormTogle}
            />
            <AboutScreen
              aboutListData={this.state.aboutListData}
              formVisible={this.onFormTogle}
            />
          </main>
          <ContactScreen />
        </div>
      </div>
    );
  }
}

export default App;
