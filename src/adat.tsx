export function ujPalya(){
    const lista:number[] = []

    for(let i = 0; i < 9; i++){
        lista.push(Math.random() < 0.2 ? 0 : 1)
    }

    return lista
}