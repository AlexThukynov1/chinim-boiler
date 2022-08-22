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
            <h2 className='ps-title'>{Texts.ua.msTitle}</h2>
            <Title
                title={Texts.ua.priceTitle}
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
            <Title
                title={Texts.ua.priceName}
            />
            <CoshText
                text={Texts.ua.priceDescription}
                classes={'ps-text'}
            />
            <CoshText
                text={Texts.ua.note4}
                classes={'ps-text'}
            />
            <Buttons/>
        </div>
    )
}

export default PriceScreen