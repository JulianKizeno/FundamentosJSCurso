function Persona(nombre, apellido, altura) {
  this.nombre = nombre
  this.apellido = apellido
  this.altura = altura
}

Persona.prototype.saludar = function () {
  console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}

Persona.prototype.soyAlto = function () {
  this.altura >= 1.8 ? 
    console.log(`Soy una persona alta porque mido ${this.altura}`)
  :
    console.log(`Soy una persona baja porque mido ${this.altura}`)
}

var sacha = new Persona('Sacha', 'Lifszyc', 1.80)
var erika = new Persona('Erika', 'Luna', 1.75)
var arturo = new Persona('Arturo', 'Martinez', 1.94)

sacha.saludar()
sacha.soyAlto()

erika.saludar()
erika.soyAlto()

arturo.saludar()
arturo.soyAlto()

