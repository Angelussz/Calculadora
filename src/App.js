import './App.css';
import Logo from './components/Logo';
import Boton from './components/button';
import Pantalla from './components/Pantalla';
import "./styles/Pantalla.css";
import BotonClear from './components/Clear';
import {useState} from 'react';
import {evaluate} from 'mathjs';
function App() {
  const [input,setInput] = useState("");
  const [equal,isEqual] = useState(false);
  const agregarInput = (val)=>{
    if(equal){
      setInput(val)
      isEqual(false)
      
    }
    else{
      setInput(input+val)

    }

  }
  const calcularResultado = ()=>{
    if(input){
      setInput(evaluate(input));
      isEqual(true)
    }
    else{
      alert("Ingrese valores")
    }
  }
  return (
    <div className="App">
      {/* <div className='freecodecamp-logo-contenedor'>
        <img src= {freeCodeCampLogo} className="freecodecamp-logo" alt='Logo de freecodecamp' />
      </div> */}
      <Logo src="logo.png" />
      <div className='contenedor-calculadora'>
        <Pantalla input={input} />
        <div className='fila'>
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput} >2</Boton>
          <Boton  manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput} >+</Boton>
        </div>  
        <div className='fila'>
          <Boton manejarClic={agregarInput} >4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={agregarInput}>-</Boton>
        </div>  
        <div className='fila'>
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInput}>*</Boton>
        </div>  
        <div className='fila'>
          <Boton manejarClic={calcularResultado}>=</Boton>
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={agregarInput}>.</Boton>
          <Boton manejarClic={agregarInput}>/</Boton>
        </div> 
        <div className='fila'>
          <BotonClear manejarClear={()=>setInput('')} >Clear</BotonClear>
        </div>
      </div> 
    </div>
  );
}

export default App;
