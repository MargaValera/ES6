//! 4.1 Dado el siguiente array, devuelve un array con sus nombres utilizando .map().
const users = [
  { id: 1, name: 'Abel' },
  { id: 2, name: 'Julia' },
  { id: 3, name: 'Pedro' },
  { id: 4, name: 'Amanda' }
]

const usersName = users.map((users) => users.name)
console.log(usersName)

//! 4.2 Dado el siguiente array, devuelve una lista que contenga los valores de la propiedad .name y cambia el nombre a 'Anacleto' en caso de que empiece por 'A'.
const users1 = [
  { id: 1, name: 'Abel' },
  { id: 2, name: 'Julia' },
  { id: 3, name: 'Pedro' },
  { id: 4, name: 'Amanda' }
]

const modifiedUsers = users1.map((user) => ({
  ...user,
  name: user.name.startsWith('A') ? 'Anacleto' : user.name
}))

console.log(modifiedUsers)

//! 4.3 Dado el siguiente array, devuelve una lista que contenga los valores  de la propiedad .name y añade al valor de .name el string ' (Visitado)' cuando el valor de la propiedad isVisited = true.
const cities = [
  { isVisited: true, name: 'Tokyo' },
  { isVisited: false, name: 'Madagascar' },
  { isVisited: true, name: 'Amsterdam' },
  { isVisited: false, name: 'Seul' }
]

const visitedCities = cities.map((city) => ({
  ...city,
  cities: city.isVisited === true ? `${'Visitado'}` : city.isVisited
}))

console.log(visitedCities)
