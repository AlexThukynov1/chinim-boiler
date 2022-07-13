import './index.css'
import SocialBar from '../../components/social-bar/SocialBar'

const FooterScreen = (props) => {
    return (
        <footer className='footer'>
            <SocialBar
                socialBarData={props.socialBarData} 
            />
        </footer>
    )
} 

export default FooterScreen