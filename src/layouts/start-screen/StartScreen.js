import './index.css'
import StartScreenHeader from '../../components/start-screen-header/StartScreen'
import Banner from '../../components/banner/Banner'

const StartScreen = (props) => {
    return (
        <div className='start-screen-wrapper'>
            <StartScreenHeader className='general-layout'
                socialBarData={props.socialBarData}
            />
            <Banner/>
        </div>
    )
}

export default StartScreen