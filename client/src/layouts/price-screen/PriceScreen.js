import './index.css'
import PriceList from '../../components/price-list/PriceList'
import Buttons from '../../components/buttons/Buttons'
import Title from '../../components/title/Title'
import Texts from '../../resources/text'
import CoshText from '../../components/UI-components/CoshText/CoshText'


const PriceScreen = (props) => {
    const {priceListData,formVisible,priceListData1} = props
    return (
        <section id="price" className='price-screen'>
            <h2 className='hidden'>{Texts.ua.priceTitle}</h2>
            <Title
                title={Texts.ua.priceTitle}
            />
            <PriceList
                priceListData= {priceListData}
                data-aos="flip-up"
            />
            <Title
                title={Texts.ua.priceName1}
                titleClass={'title-custom'}
            />
            <PriceList
                priceListData={priceListData1}
                data-aos="flip-up"
            />
            <CoshText
                text={Texts.ua.note1}
                classes={'ps-text-notes'}
            />
             <CoshText
                text={Texts.ua.note5}
                classes={'ps-text-notes'}
            />
            <CoshText
                text={Texts.ua.note2}
                classes={'ps-text-notes'}
            />
            <CoshText
                text={Texts.ua.note3}
                classes={'ps-text'}
            />
            <Title
                title={Texts.ua.priceName}
                titleClass={'title-custom'}
            />
            <CoshText
                text={Texts.ua.priceDescription}
                classes={'ps-text'}
            />
            <CoshText
                text={Texts.ua.note4}
                classes={'ps-text-notes'}
            />
            <Buttons
                formVisible={formVisible}
            />
        </section>
    )
}

export default PriceScreen