import './inputText.scss';
import { useState } from 'react';

const InputText = () => {

    const [value, setValue] = useState('');

    return(
        <input className="inputText" type='text' value={value} placeholder='Enter name'
        onChange={event => setValue(event.target.value)}/>
    )
}

export default InputText;