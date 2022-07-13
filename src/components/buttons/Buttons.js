import "./index.css"
import UniversalButton from '../UI-components/universal-button/UniversalButton'


const Buttons = (props) => {
    return (
        <div className="buttons-wrapper">
            <UniversalButton
                btnStyle="callback-btn"
                btnText="Lorem ipsum"
                btnClassWrapper='btn-wrapper' />
            <UniversalButton btnStyle="call-btn"
                btnText="Lorem ipsum"
                btnClassWrapper='btn-wrapper' />
        </div>
    )
}

export default Buttons