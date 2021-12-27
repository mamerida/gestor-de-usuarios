import {useState} from 'react'

const useFormulario = (inicial) =>{
    const [formulario, setFormulario] = useState(iniciar)
    const handleChange = (e) =>{
      setFormulario({...formulario,[e.target.name] : e.target.value})
    }

    return [formulario,handleChange]
}

export default useFormulario