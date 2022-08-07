import './index.css'
import PriceList from '../../components/price-list/PriceList'
import Buttons from '../../components/buttons/Buttons'
import Title from '../../components/title/Title'
import Texts from '../../resources/text'
import CoshText from '../../components/UI-components/CoshText/CoshText'


const PriceScreen = (props) => {
    const {priceListData} = props
    return (
        <div className='price-screen'>
            <Title
                title={Texts.ua.title}
            />
            <CoshText
                text={Texts.ua.priceTitle}
                classes={'ps-subtitle'}
            />
            <CoshText
                text={Texts.ua.subTitle}
                classes={'ps-subtitle'}
            />
            <PriceList
                priceListData= {priceListData}
            />
            <CoshText
                text={Texts.ua.note1}
                classes={'ps-text'}
            />
            <CoshText
                text={Texts.ua.note2}
                classes={'ps-text'}
            />
            <CoshText
                text={Texts.ua.note3}
                classes={'ps-text'}
            />
            <CoshText
                text={Texts.ua.note4}
                classes={'ps-text'}
            />
            <CoshText
                text={Texts.ua.priceName}
                classes={'service'}
            />
            <CoshText
                text={Texts.ua.priceDescription}
                classes={'ps-text'}
            />
            <Buttons/>
        </div>
    )
}

export default PriceScreen