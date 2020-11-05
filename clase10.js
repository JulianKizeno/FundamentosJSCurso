var sacha = {
  nombre: 'Sacha',
  apellido: 'Lifszyc',
  edad: 28,
  ingeniero: false,
  cocinero: false,
  cantante: true,
  dj: false,
  guitarrista: false,
  drone: false
}

function imprimirProfesiones(persona) {
  console.log(`${persona.nombre}`)

  persona.ingeniero ? console.log('es Ingeniero') : console.log('No es ingeniero')
  persona.cocinero ? console.log('es cocinero') : console.log('No es cocinero')
  persona.dj ? console.log('es dj') : console.log('No es dj')
  persona.cantante ? console.log('es cantante') : console.log('No es cantante')
  persona.guitarrista ? console.log('es guitarrista') : console.log('No es guitarrista')
  persona.drone ? console.log('es drone') : console.log('No es Piloto de drone')
  

  // if (persona.cocinero) {
  //   console.log('Cocinero')
  // }

  // if (persona.dj) {
  //   console.log('DJ')
  // }

  // if (persona.cantante) {
  //   console.log('Cantante')
  // }

  // if (persona.guitarrista) {
  //   console.log('Gutiarrista')
  // }

  // if (persona.drone) {
  //   console.log('Piloto de drone')
  // }

}

const imprimirSiEsMayorDeEdad = (persona) => persona.edad >= 18 ? console.log(`${persona.nombre} es mayor de edad`) : console.log(`${persona.nombre} es menor de edad`)

imprimirSiEsMayorDeEdad(sacha)
imprimirProfesiones(sacha)
