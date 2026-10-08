import { useState } from 'react'
import './App.css'
import { ujPalya } from './adat'
import JatekTer from './component/JatekTer'

function App() {

  const [lista, setLista] = useState(ujPalya())

function szomszedok(index:number){
  const kapcsolatok:number[][] = [
  [0,1,3],
  [1,0,2,4],
  [2,1,5],
  [3,0,4,6],
  [4,1,3,5,7],
  [5,2,4,8],
  [6,3,7],
  [7,4,6,8],
  [8,5,7]
  ]

return kapcsolatok[index]
}

function kattintasKezelo(index:number){
  const modositottLista = [...lista]

  const erintettek = szomszedok(index)

  erintettek.forEach(i=>{
    modositottLista[i] =
    modositottLista[i] === 0 ? 1 : 0
  })

  setLista(modositottLista)

  if(modositottLista.every(elem => elem === 0)){
    alert("Nyertél!")
    setLista(ujPalya())
  }
  if(modositottLista.every(elem => elem === 1)){
    alert("Vesztettél!")
    setLista(ujPalya())
  }
}

  return (
    <>
      <header>
        <h1>LightOut</h1>
      </header>

      <article>
        <JatekTer lista={lista} kattintasKezelo={kattintasKezelo}/>
      </article>
    </>
  )
}

export default App
