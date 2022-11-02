import './button.scss';

const Button = (props) => {

    return(
        <button className="button">
            {props.nameBtn}
        </button>
    )
}

export default Button;