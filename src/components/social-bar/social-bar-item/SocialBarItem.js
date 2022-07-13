import './index.css'

const SocialBarItem = (props) => {
    const {link,src,alt} = props;
    return (
        <li>
            <a className="social-bar-item" href={link}>
                <img src={src} alt={alt} />
            </a>
        </li>
    )
}

export default SocialBarItem