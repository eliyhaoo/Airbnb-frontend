import { useState } from "react"
import { useEffectUpdate } from "./useEffectUpdate"

export const useForm = (initialFields, cb) => {

    const [fields, setFields] = useState(initialFields)

    const handleChange = ({ target }) => {
        const field = target.name
        const value = target.type === 'number' ? (+target.value || '') : target.value
        setFields((prevState) => ({ ...prevState, [field]: value }))
    }

    useEffectUpdate(() => {
        if (cb) cb(fields)
    }, [fields])

    return [
        fields,
        handleChange,
        setFields
    ]
}