import { NavLink } from "react-router-dom";
import { useState } from "react";
import './headerMenu.scss';


const HeaderMenu = () => {
    const [menu, setMenu] = useState(false);
    return (
        <div className="app__header">
            <p className='app__logo'>
                Rick and morty portal
            </p>
            <div className={menu ? "app__burger app__burger_active" : "app__burger"} onClick={() => setMenu(!menu)}>
                <span></span>
            </div>
            <ul className={menu ? "app__menu app__menu_active" : "app__menu app__menu_hide"}>
                <li>
                    <NavLink exact activeStyle={{'color': '#1DC985'}} to="/">
                        Characters
                    </NavLink>
                </li>
                <li>
                    <NavLink exact activeStyle={{'color': '#1DC985'}} to="/location">
                        Location
                    </NavLink>
                </li>
                <li>
                    <NavLink exact activeStyle={{'color': '#1DC985'}} to="/episode">
                        Episode
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default HeaderMenu;