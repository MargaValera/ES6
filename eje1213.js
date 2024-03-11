//! Crea una función llamada findArrayIndex que reciba como parametros un array de textos y un texto y devuelve la posición del array cuando el valor del array sea igual al valor del texto que enviaste como parametro.

// Haz varios ejemplos y compruebalos.

// Sugerencia de función:

// Ej array:
const mainCharacters = [
  'Luke',
  'Leia',
  'Han Solo',
  'Chewbacca',
  'Rey',
  'Anakin',
  'Obi-Wan'
]

const mainCharactersCopy = [...mainCharacters]

// function findArrayIndexAndDelete(array, text) {
//   let index = 0
//   for (const item of array) {
//     if (item === text) {
//       array.splice(index, 1)
//     }
//     return index
//   }
//   return -1
// }

function findArrayIndexAndDelete(array, text) {
  const index = array.findIndex((item) => item === text)
  if (index !== -1) {
    array.splice(index, 1)
  }
  return index
}

const index = findArrayIndexAndDelete(mainCharactersCopy, 'Luke')

console.log(index)
console.log(mainCharactersCopy)

//! Usando la función anterior beneficiate de poder conocer el indice del array para crear una función llamada removeItem que pasandole un array y un texto como parametros (los mismos parametros que en el anterior ejercicio) llame a la función anteriormente creada findArrayIndex y obten el indice para  posteriormente usar la función de javascript .splice() para eliminar el  elemento del array. Finalmente retorna el array.

// De nuevo haz varios ejemplos para practicar y comprueba que funcionan  correctamente.

//? RESPUESTA ARRIBA
