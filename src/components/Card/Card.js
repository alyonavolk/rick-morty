// import styled from "styled-components";
import './Card.scss';

const Card = (props) => {

    return(
        <div className="app__card">
            <div>
                <img src={props.image} alt=''></img>
                <p>
                    {props.cardName}
                </p>
            </div>
        </div>
    )
}

export default Card