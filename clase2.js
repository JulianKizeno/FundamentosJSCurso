var nombre = 'Sacha', apellido = 'Lifszyc'

var nombreEnMayusculas = nombre.toUpperCase()
var apellidoEnMinusculas = apellido.toLowerCase()

var primeraLetraDelNombre = nombre.charAt(0)
var cantidadDeLetrasDelNombre = nombre.length

var nombreCompleto = `${nombre} ${apellido.toUpperCase()}`

var str = nombre.substr(1, 2)

// Reto ---

let nombreUsuario = prompt('introduce tu nombre')
let numeroLetrasNombre = nombreUsuario.length
let ultimaLetraNombre = nombreUsuario.charAt(nombre.length-1)
let mesajeParaElUsuario = alert(`La ultima letra de tu nombre es ${ultimaLetraNombre}`)