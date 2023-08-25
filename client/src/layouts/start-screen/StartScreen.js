import './index.css'

import CoshText from '../../components/UI-components/CoshText/CoshText'
import Buttons from '../../components/buttons/Buttons'
import UniversalList from '../../components/UI-components/UniversalList/UniversalList'
import Texts from '../../resources/text'
import Title from '../../components/title/Title'
import SocialBar from '../../components/social-bar/SocialBar'

const StartScreen = (props) => {
    const { formVisible, socialBarData,textListData } = props;
    return (
        <section className='banner-wrapper' >
        <h1 className='title'>{Texts.ua.title}</h1>
        <CoshText
            text={Texts.ua.subTitle2}
            classes="ms-text-3" 
        />
        <Buttons
        formVisible={formVisible}
        />
        <SocialBar
            socialBarData={socialBarData}
        />
        <Title
            title={Texts.ua.msText2}
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
    </section>
    )
}

export default StartScreen