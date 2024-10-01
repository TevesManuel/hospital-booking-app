import React from "react"

const useField = () => {
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