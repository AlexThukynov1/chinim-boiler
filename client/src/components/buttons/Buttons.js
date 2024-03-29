import "./index.css"
import Images from "../../resources/image";
import Texts from "../../resources/text";


const Buttons = (props) => {
    const {formVisible,btnsWrapper} = props;
    return (
        <div className={`buttons-wrapper ${btnsWrapper}`}>
            <a href="tel:+38(095)-367-47-03">
                <button className="call-btn btn-wrapper">
                    <img src={Images.callImg.src} alt="Зателефонувати" className="icon-img"/>
                    <span className="">{Texts.ua.button1}</span>
                </button>
            </a>
            <a href="#">
            <button onClick={formVisible} className="callback-btn btn-wrapper">
                <img src={Images.emailImg.src} alt="Відправити заявку" className="icon-2"/>
                <span className="">{Texts.ua.button2}</span>
            </button>
            </a>
        </div>
    )
}

export default Buttons