import './index.css'
import Title from '../../components/title/Title'
import src from '../../assets/media/images/viber.png'

const ContactScreen = (props) => {
    return (
        <div className='contact-screen'>
            <Title
                title="Lorem ipsum."
            />
            <div className='contact-item-wrapper'>
            <a className='contact-item' href="tel">
                <img src={src} alt="Viber" className="contact-img"/>
                <span className='contact'>Viber</span>
            </a>
            <a className='contact-item' href="tel">
                <img src={src} alt="Viber" className="contact-img"/>
                <span className='contact'>Viber</span>
            </a>
            <a className='contact-item' href="tel">
                <img src={src} alt="Viber" className="contact-img"/>
                <span className='contact'>Viber</span>
            </a>
            </div>
        </div>
    )
}

export default ContactScreen