import "./index.css"
// import BurgerMenuItem from "./burger-menu-item/BurgerMenuItem"

const BurgerMenu = (props) => {
    return (
        <div className="burger-menu">
        <input id="menu-toggle" type="checkbox" />
        <label className="menu-btn" for="menu-toggle">
          <span></span>
        </label>
     
        <ul className="menubox">
                <li><a className="menu-item" href="#">Головна</a></li>
                <li><a className="menu-item" href="#">Прайс</a></li>
                <li><a className="menu-item" href="#">Контакти</a></li>
        </ul>
      </div>
    )
}

export default BurgerMenu