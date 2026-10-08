import './elem.css'

interface ElemProps{
    elem: number,
    index: number,
    kattintasKezelo:(index:number)=>void
}

export default function Elem({elem,index,kattintasKezelo}:ElemProps){
    return(
        <>
            <div className="buttonTarolo">
                <button className={elem === 1 ? "bekapcsolt" : "kikapcsolt"} onClick={()=>kattintasKezelo(index)}></button>
            </div>
        </>
    )
}