import "./index.css"
import Texts from "../../resources/text";
import Images from "../../resources/image";


const Buttons = (props) => {
    const {formVisible} = props;
    return (
        <div className="buttons-wrapper">
            <a href="tel:+38(095)-367-47-03">
                <button className="call-btn btn-wrapper">
                    <img src={Images.callImg.src} alt="Button 1 icon" className="icon-img"/>
                    <span className="">{Texts.ua.button1}</span>
                </button>
            </a>
            <button onClick={formVisible} className="callback-btn btn-wrapper">
                <img src={Images.emailImg.src} alt="Button 2 icon" className="icon-img"/>
                <span className="">{Texts.ua.button2}</span>
            </button>
        </div>
    )
}

export default Buttons