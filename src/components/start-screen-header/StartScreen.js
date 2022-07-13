import "./index.css"
import SocialBar from "../social-bar/SocialBar"
import CoshImage from "../UI-components/CoshImage/CoshImage"
import BurgerMenu from "../burger-menu/BurgerMenu"
import logo from '../../assets/media/images/logo.png'

const StartScreenHeader= (props) => {
    const {socialBarData} = props
    return(
        <header id="header" className="start-screen__header">
            <BurgerMenu/>
            <CoshImage
                src={logo}
                alt="Logo"
                imgWrapperClass="logo-wrapper"
                imgClass="logo-img"
            />
            <SocialBar
                socialBarData={socialBarData}
            />
        </header>
    )
}

export default StartScreenHeader