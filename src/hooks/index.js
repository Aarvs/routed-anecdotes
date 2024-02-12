import { useState } from "react";

const useField = (name) => {
    const[value, setValue] = useState('')

    const onChange = (event) => {
        setValue(event.target.value)
    }

    const onReset = () => {
        setValue('')
    }

    return {
        value,
        onChange,
        name,
        onReset,
    }
}

export default useField