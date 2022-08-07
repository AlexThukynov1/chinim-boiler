import './index.css'
import SocialBar from '../../components/social-bar/SocialBar'

const FooterScreen = (props) => {
    return (
        <footer className='footer'>
            <SocialBar
                socialBarData={props.socialBarDataFooter} 
            />
        </footer>
    )
} 

export default FooterScreen