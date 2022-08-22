import './index.css'
import Title from '../../components/title/Title'
import CoshText from '../../components/UI-components/CoshText/CoshText'
import CoshImage from '../../components/UI-components/CoshImage/CoshImage'
import Buttons from '../../components/buttons/Buttons'
import Texts from '../../resources/text'
import UniversalList from '../../components/UI-components/UniversalList/UniversalList'
import Images from '../../resources/image'

const AboutScreen = (props) => {
    const {aboutListData} = props;
    return (
        <div className='about-screen'>
            <Title
                title={Texts.ua.aboutUsTitle}
            />
            <div className='content-wrapper'>
            {
                aboutListData.map((item,index)=> {
                    return(
                        <UniversalList
                        iconClass={'abu-list-icon'}
                        iconSrc={item.icon}
                        textClass={'abu-list-text'}
                        text={item.text}
                        ListWrapperClass={'abu-list-wrapper'}
                        iconWrapper={'icon-wrapper'}
                        key={index}
                    />
                    )
                })
            }
            <CoshImage
                imgWrapperClass={'boyler-img-wrapper'}
                imgClass={'boyler-img'}
                src={Images.boyler.src}
                alt={Images.boyler.alt}
            />
            <CoshText
                text={Texts.ua.aboutUsText1}
                classes={'abu-text'}
            />
            </div>
            <Buttons/>
        </div>
    )
}

export default AboutScreen