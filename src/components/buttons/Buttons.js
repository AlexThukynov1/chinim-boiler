import "./index.css"
import Texts from "../../resources/text";
import Images from "../../resources/image";


const Buttons = (props) => {
    return (
        <div className="buttons-wrapper">
            <button className="call-btn btn-wrapper">
                <img src={Images.btn1Icon} alt="Button 1 icon" className="icon-img"/>
                <span className="">{Texts.ua.button1}</span>
            </button>
            <button className="callback-btn btn-wrapper">
                <img src={Images.btn2Icon} alt="Button 2 icon" className="icon-img"/>
                <span className="">{Texts.ua.button2}</span>
            </button>
        </div>
    )
}

export default Buttons