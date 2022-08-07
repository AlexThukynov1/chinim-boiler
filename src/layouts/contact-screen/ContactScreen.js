import './index.css'
import Title from '../../components/title/Title'
import Images from '../../resources/image'
import Texts from '../../resources/text'

const ContactScreen = (props) => {
    return (
        <div className='contact-screen'>
            <Title
                title="Lorem ipsum."
            />
            <div className='contact-item-wrapper'>
            <a className='contact-item' href="tel">
                <img src={Images.call} alt="Viber" className="contact-img"/>
                <span className='contact'>{Texts.ua.contactText1}</span>
            </a>
            <a className='contact-item' href="tel">
                <img src={Images.letter} alt="Viber" className="contact-img"/>
                <span className='contact'>{Texts.ua.contactText2}</span>
            </a>
            </div>
        </div>
    )
}

export default ContactScreen