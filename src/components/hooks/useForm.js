import { useState } from "react"

export const useForm = (initialstate = {}) => {

    const [value, setValue] = useState(initialstate)

    const handleInputChange = ({ target }) => {
        setValue({
            ...value,
            [target.name]: target.value
        })
    }
    return [value, handleInputChange]
}
