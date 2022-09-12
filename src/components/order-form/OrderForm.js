import './index.css'

const OrderForm = (props) => {
    const {orderId,onCloseOrder} = props;
    return (
        <div className="order-form-wrapper">
            <div className='bg'>
                <div className='order-form'>
                    <span className='order-text'>Ваша заявка №{orderId} прийнята,наш менеджер зв'яжеться з Вами найближчим часом</span>
                    <button className='order-btn' onClick={onCloseOrder}>OK</button>
                </div>
            </div>
        </div>
    )
}

export default OrderForm