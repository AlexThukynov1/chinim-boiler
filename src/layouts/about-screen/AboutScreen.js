import './index.css'
import Title from '../../components/title/Title'
import CoshText from '../../components/UI-components/CoshText/CoshText'
import Buttons from '../../components/buttons/Buttons'

const AboutScreen = (props) => {
    return (
        <div className='about-screen'>
            <Title
                title="Lorem ipsum dolor sit."
            />
            <CoshText
                text="Lorem ipsum, dolor sit amet consectetur adipisicing elit."
            />
            <CoshText
                text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus rerum veritatis corporis maiores explicabo enim, esse, odio sunt, incidunt nesciunt amet earum nemo consectetur accusamus."
            />
            <CoshText
                text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus rerum veritatis corporis maiores explicabo enim, esse, odio sunt, incidunt nesciunt amet earum nemo consectetur accusamus.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus rerum veritatis corporis maiores explicabo enim, esse, odio sunt, incidunt nesciunt amet earum nemo consectetur accusamus.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus rerum veritatis corporis maiores explicabo enim, esse, odio sunt, incidunt nesciunt amet earum nemo consectetur accusamus."
            />
            <CoshText
                text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus rerum veritatis corporis maiores explicabo enim, esse, odio sunt, incidunt nesciunt amet earum nemo consectetur accusamus."
            />
            <Buttons/>
        </div>
    )
}

export default AboutScreen