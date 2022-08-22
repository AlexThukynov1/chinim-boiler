import './index.css'
import StartScreenHeader from '../../components/start-screen-header/StartScreen'
import Banner from '../../components/banner/Banner'

const StartScreen = (props) => {
    return (
        <div className='start-screen-wrapper'>
            <StartScreenHeader className='general-layout'/>
            <Banner
            textListData={props.textListData}
            />
        </div>
    )
}

export default StartScreen