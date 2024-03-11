//! Crea una función llamada swap que reciba un array y dos parametros que sean indices del array. La función deberá intercambiar la posición de los valores de los indices que hayamos enviado como parametro. Retorna el array resultante.

// Sugerencia de array:

const fantasticFour = [
  'La antorcha humana',
  'Mr. Fantástico',
  'La mujer invisible',
  'La cosa'
]

const fantasticFourCopy = [...fantasticFour]

function swap(array, index, index2) {
  ;[array[index], array[index2]] = [array[index2], array[index]]
}
swap(fantasticFourCopy, 0, 3)
console.log(fantasticFourCopy)
