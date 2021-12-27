import './Input.css'


//para mayor consistencia dentro de la app genero de manera separada la logica de los inputs 
//donde mediante un spreat operator paso los valos por defencto de mi input 
// rest = name="name" value={formulario.name} onChange={handleChange}
const Input = ({label,...rest}) =>{
    return(
        <div className='field'>
            <label>{label}</label>
            <input 
                {...rest}
            />
        </div>

    )
}

export default Input