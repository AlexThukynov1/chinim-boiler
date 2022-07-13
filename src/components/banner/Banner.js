import './index.css'
import CoshImage from '../UI-components/CoshImage/CoshImage'
import CoshText from '../UI-components/CoshText/CoshText'
import Buttons from '../buttons/Buttons'


const Banner = (props) => {
    return (<div className='banner-wrapper' >
        <h1 className='title'> Lorem ipsum dolor sit.</h1>
        <CoshText
            text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. "
            classes="text" />
        <CoshText
            text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus rerum veritatis corporis maiores explicabo enim, esse, odio sunt, incidunt nesciunt amet earum nemo consectetur accusamus."
            classes="text" />
        <Buttons/>
        <CoshText
            text="Temporibus rerum veritatis corporis maiores explicabo enim, esse, odio sunt, incidunt nesciunt amet earum nemo consectetur accusamus." classes="text" />
    </div>
    )
}

export default Banner