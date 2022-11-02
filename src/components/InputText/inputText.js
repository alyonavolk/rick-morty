import './inputText.scss';
import { useState } from 'react';

const InputText = () => {

    const [value, setValue] = useState('Enter name');

    return(
        <input className="inputText" type='text' value={value} onChange={event => setValue(event.target.value)}/>
    )
}

export default InputText;