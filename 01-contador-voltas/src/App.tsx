import { useState, useEffect } from "react"
import { MostrarVoltas } from "./components/MostrarVoltas"
import { MostrarTempo } from "./components/MostrarTempo"
import { Button } from "./components/Button"
import { GlobalStyle } from './styles/global'

function App() {

  const [voltas,setVoltas] = useState(0)
  const [running,setRunning] = useState(false)
  const [tempo,setTempo] = useState(0)


  useEffect(() =>{
    let timer: any = null

    if(running){
      timer = setInterval(() =>{
        setTempo(old => old + 1)
      },1000)
    }
    return () =>  {
      if(timer){
        clearInterval(timer)
      }
    }
  },[running])

  const toggleRunning = () =>{
    setRunning(!running)
  }
  
  const increment = ()=>{
    setVoltas(voltas + 1)
  }
  
  const decrement = ()=>{
    if(voltas > 0){
      setVoltas(voltas - 1)
      }
  }

  const reset = ()=>{
    setVoltas(0)
    setTempo(0)
  }

  return (
    <>
      <MostrarVoltas voltas={voltas}/>
      <Button text='+' className='biggerPlus' onClick={increment}/>
      <Button text='-' className='biggerPlus' onClick={decrement}/>
      {
        voltas > 0 &&
        <MostrarTempo tempo={Math.round(tempo/voltas)}/>
      }
      <Button text={running ? 'Pausar' : 'Iniciar'}onClick={toggleRunning}/>
      <Button text='Reiniciar' onClick={reset}/>
      <GlobalStyle/>
    </>
  );
}

export default App;
