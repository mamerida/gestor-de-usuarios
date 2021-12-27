
import useFormulario from './hooks/useFormulario'
function App() {



  return (
    <form>
      <input 
        name="name" 
        placeholder="nombre" 
        value={formulario.name}  
        onChange={handleChange}
        />
    </form>
  );
}

export default App;
