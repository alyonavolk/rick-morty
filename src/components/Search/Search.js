import './Search.scss';
import Button from "../Button/buttton";
import InputText from "../InputText/inputText";

const Search = () => {

    return(
        <div className="app__search">
            <p>
                Find a character by name:
            </p>
            <div className='app__search_form'>
                <div><InputText /></div>
                <div><Button nameBtn='FIND' /></div>
            </div>
        </div>
    )
}

export default Search;