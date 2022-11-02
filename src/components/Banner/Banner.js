// import styled from "styled-components";
import pict1 from '../../resources/img/pngwing1.png';
import pict2 from '../../resources/img/pngwing3.png';
import './Banner.scss';


const Banner = () => {

    return(
        <div className="app__banner">
            <div>
                <img src={pict1} alt=''></img>
                <p>
                    Rick and motry! Portal!
                </p>
            </div>
            <div><img src={pict2} alt=''></img></div>
        </div>
    )
}

export default Banner;