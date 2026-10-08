import Elem from "./elem"
import './jatekTer.css'

interface ListaProps{
    lista: number[],
    kattintasKezelo:(index:number)=>void
}

export default function JatekTer({lista,kattintasKezelo}:ListaProps){
    return(
        <>
            <div className="tarolo">
            {
                lista.map((e,i)=>{
                    return <Elem elem={e} key={i} index={i} kattintasKezelo={kattintasKezelo}/>
                })
            }
            </div>
        </>
    )
}