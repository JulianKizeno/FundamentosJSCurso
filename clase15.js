var contador = 0

const llueve = () => Math.random() < 0.25

do {
  contador++
} while (!llueve())

contador === 1 ? console.log(`Fui a ver si llovía ${contador} vez`)
:
console.log(`Fui a ver si llovía ${contador} veces`)
