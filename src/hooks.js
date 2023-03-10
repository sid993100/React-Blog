import {useState} from 'react';

//here we create a custom hooks----------and custom hooks is start form use-->like
export function useFormInput(initialValue){
    const[value, setValue] = useState(initialValue);

    function handleChange(e){
         setValue(e.target.value);
    }

    return{
        value,
        onChange: handleChange
    }
}