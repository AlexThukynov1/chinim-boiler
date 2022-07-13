import './index.css'
import PriceList from '../../components/price-list/PriceList'
import Buttons from '../../components/buttons/Buttons'
import Title from '../../components/title/Title'

const PriceScreen = (props) => {
    const {priceListData} = props
    return (
        <div className='price-screen'>
            <Title
                title="Lorem ipsum dolor sit."
            />
            <PriceList
                priceListData= {priceListData}
            />
            <Buttons/>
        </div>
    )
}

export default PriceScreen