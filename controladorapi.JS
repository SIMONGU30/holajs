const NOMBRE_CLIENTE='mauricio'
let direccion='calle23#10-12'
let telefono='3045269287'
let metodoPago='efectivo'

const NOMBRE_REPARTIDOR='simon'
let identificacionRepartidor='1002854904'
let ubicacionRepartidor='centro comercial molinos'

const NOMBRE_TIENDA='postresitos repre'
let nombreProducto=' milo '
let precioUnitarioProducto=7000
let cantidad=5
let iva=0.19

let valorNeto=precioUnitarioProducto * cantidad 
let valorIva=valorNeto*iva
let valorImpuesto=valorNeto+valorIva
let valorTotal=valorImpuesto-10000


console.log('.......................................................')
console.log('..........................RAPPI........................')
console.log('........................................................')
console.log(`nombre del producto : ${nombreProducto} `)
console.log(`precio unitario : ${precioUnitarioProducto} `)
console.log(`cantidad del producto : ${cantidad} `)
console.log(`iva : ${iva} `)
console.log(`costo total : ${valorTotal} `)

