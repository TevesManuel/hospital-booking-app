import React from "react"

export interface useFieldValues
{
    value: string,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const useField = () : useFieldValues  => {
    const [value, setValue] = React.useState('')
  
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }
  
    return {
        value,
        onChange  
      }
  
}
export default useField;