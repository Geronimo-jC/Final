const lista = []

const AgregarNumeros=(event)=>{
    event.preventDefault()
    let numero = document.getElementById("numero")
    lista.push(numero.valueAsNumber)
    numero.value=""
    procesarlista()
}

const procesarlista =()=>{
    let salida = document.getElementById("salida")
    let suma = 0 
    lista.map((elemento)=>{suma+=elemento})
    let promedio = suma/lista.length
    let menor = Math.min(...lista)
    let mayor = Math.max(...lista)
    salida.innerHTML = `
    <tr>
    <th>suma</th>
    <th>${suma}</th>
    <th>Mayor</th>
    <th>${mayor}</th>
    <th>Menor</th>
    <th>${menor}</th> 
    <th>Promedio</th>
    <th>${promedio}</th>
</tr>
`

}