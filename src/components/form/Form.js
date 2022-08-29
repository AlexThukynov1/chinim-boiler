import { Component } from "react"
import Images from "../../resources/image";
import "./index.css"

class Form extends Component  {
    constructor(props) {
        super(props);
        this.state = {
            userName: "",
            userEmail: "",
            userText: ""
        }
    }
    render() {
        const {onSubmit,closeForm} = this.props;
        return(
            <div id="formWrapper" className="form-wrapper">
                <div className="form-bg">
                <form className="form" onSubmit={onSubmit}>
                    <div className="form-header">
                        <div><span className="form-caption">Залишити заявку</span></div>
                        <div onClick={closeForm}><img src={Images.closeBtn.src}/></div>
                    </div>
                    <input className="input input-name" type="text" placeholder="Вкажіть Ваше і'мя"/>
                    <input className="input input-tel" type="tel" placeholder="Вкажіть Ваш номер телефона"/>
                    <input className="input input-city" type="text" placeholder="Вкажіть Ваше місто\район"/>
                    <input className="input input-text-area" type="text" placeholder="Коротко опишіть Вашу проблему"/>
                    <button className="submit-btn" type="submit">Відправити</button>
                </form>
                </div>
            </div>
        )
    }
}

export default Form;

