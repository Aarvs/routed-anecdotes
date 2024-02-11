import { useState } from "react";

const useField = (name) => {
    const[value, setValue] = useState('')

    const onChange = (event) => {
        setValue(event.target.value)
    }

    return {
        value,
        onChange,
        name,
    }
}

export default useField