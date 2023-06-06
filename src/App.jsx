import { useState } from "react";

function App() {
  //let counter = 0;
                                //EXTENSIONES DEL EDITOR PARA MAÑANA 02/Marzo/2023//
  const [counter, setCounter] = useState(0) //definir una variable de estado

  return (
    <div>
      <h3>Counter</h3>
      <hr />
      <h1>{counter}</h1>
      <button 
          onClick={() => {
           setCounter(counter + 1);
            console.log(counter)
          }}
          type="button" 
          className='btn btn-danger'
          >+1</button>

          <button 
          onClick={() => {
           setCounter(counter - 1);
            console.log(counter)
          }}
          type="button" 
          className='btn btn-secundary'
          >-1</button>

          <button 
          onClick={() => {
           setCounter(0);
            console.log(counter)
          }}
          type="button" 
          className='btn btn-warning'
          > 0</button>

    </div>
  )
}
export default App
//AGREGAR 2 BOTONES, UNO QUE LO DECREMENTE Y UNO QUE COMIENCE DESDE 0//