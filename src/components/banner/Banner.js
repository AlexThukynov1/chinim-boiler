import './index.css'
import CoshImage from '../UI-components/CoshImage/CoshImage'
import CoshText from '../UI-components/CoshText/CoshText'
import Buttons from '../buttons/Buttons'
import UniversalList from '../UI-components/UniversalList/UniversalList'
import Texts from '../../resources/text'


const Banner = (props) => {
    const {textListData} = props;
    return (
    <div className='banner-wrapper' >
        <h1 className='title'>{Texts.ua.msTitle}</h1>
        <CoshText
            text={Texts.ua.msText1}
            classes="text ms-text-1" 
        />
        <Buttons/>
        <CoshText
            text={Texts.ua.msText2}
            classes="text ms-text-2" 
        />
            <div className='general-list-wrapper'>
            {
                textListData.map((item,index) => {
                    return (
                        <UniversalList
                            iconClass={'img-list'}
                            iconSrc={item.src}
                            textClass={'list-text'}
                            text={item.text}
                            ListWrapperClass={'list-wrapper'}
                            iconWrapper={'icon-wrapper'}
                            key={index}
                        />
                    )
                })
            }
            </div>
    </div>
    )
}

export default Banner