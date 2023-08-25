import './index.css'
import Texts from '../../resources/text'
import CoshText from '../../components/UI-components/CoshText/CoshText'

const ContactScreen = (props) => {
    return (
        <footer id="contacts" className='contact-screen'>
            <CoshText
                text={Texts.ua.contactTitle}
                classes={'contact-title'}
            />
            <hr className='line'></hr>
             <CoshText
                text={Texts.ua.contactText1a}
                classes={'contact-sub-title'}
            />
            <CoshText
                text={Texts.ua.contactText1}
                classes={'contact-text'}
            />
            <CoshText
                text={Texts.ua.contactText2a}
                classes={'contact-sub-title'}
            />
            <CoshText
                text={Texts.ua.contactText2}
                classes={'contact-text'}
            />
            <CoshText
                text={Texts.ua.contactText3a}
                classes={'contact-sub-title'}
            />
            <CoshText
                text={Texts.ua.contactText3}
                classes={'contact-text'}
            />
        </footer>
    )
}

export default ContactScreen