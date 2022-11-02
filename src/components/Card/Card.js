import './Card.scss';
import { NavLink } from "react-router-dom";

const Card = (props) => {

    return(
        <div className="app__card">
            <div>
                <img src={props.image} alt=''></img>
                <NavLink className='app__card_link' exact activeStyle={{'color': '#1DC985'}} to="/character"><p>
                    {props.cardName}
                </p></NavLink>
            </div>
        </div>
    )
}

export default Card