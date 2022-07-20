const inputColor = document.getElementById('inputColor')
inputColor.addEventListener('input', () => {
    document.body.style.backgroundColor = inputColor.value
    console.log(inputColor.value)
})


class Prendas {
    constructor(prenda, email, telefono, cuotas) {
        this.prenda = prenda
        this.email = email
        this.telefono = telefono
        this.cuotas = cuotas
    }
}

const  prendas = []

const form = document.getElementById('idForm')
const divProductos = document.getElementById('divProductos')
const botonProductos = document.getElementById('botonProductos')

form.addEventListener('submit', (event) => {
    event.preventDefault()
    
    let prenda = document.getElementById('idPrenda').value 
    let email = document.getElementById('idEmail').value  
    let telefono = document.getElementById('idTelefono').value 
    let cuotas = document.getElementById('idCuotas').value 

    const ropa = new Prendas(prenda, email, telefono, cuotas)
    prendas.push(ropa)
    console.log(prendas)

    form.reset()
})

botonProductos.addEventListener('click', () => {
    prendas.forEach(ropa => {
        divProductos.innerHTML += `
        <div class="card" style="width: 18rem; margin:3px;">
            <div class="card-body">
                <h5 class="card-title">Producto: ${ropa.prenda}</h5>
                <p class="card-text">Email: ${ropa.email}</p>
                <p class="card-text">Cuotas: ${ropa.cuotas}</p>
                <p class="card-text">Telefono: ${ropa.telefono}</p>
            </div>
        </div>
        
        `
    })
})





