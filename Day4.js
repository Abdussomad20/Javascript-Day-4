let num =-1
if (num>0){
    console.log(`${num} is greater than zero`)
}
else{
    console.log(`${num} is not greater than zero`)
}

let isRaining = false
if (isRaining){
    console.log('Remember to take your rain coat')
}
else{
    console.log('There is no rain outside')
}

let age = 0
if (age>22){
    console.log(`My age is ${age}.`)
}
else if (age==10) {
console.log('This is not my age')
}
else if (age==0){
    console.log(`${age} shouldn't be ${age}`)
}
else{
    console.log(`${age} cannot be negative number and it should be a number`)
}

// let weather = 'sunny'
// if (weather === 'rainy') {
//   console.log('You need a rain coat.')
// } else if (weather === 'cloudy') {
//   console.log('It might be cold, you need a jacket.')
// } else if (weather === 'sunny') {
//   console.log('Go out freely.')
// } else {
//   console.log('No need for rain coat.')
// }

// let weather = 'cloudy'
// switch (weather) {
//     case 'rainy':
//         console.log('You need a Jacket')
//         break
//     case 'sunny':
//         console.log('You need umbrella')
//         break
//     case 'cloudy':
//         console.log('It might be cold')
//         break
//     default:
//         console.log('No need for raincoat')
// }

let dayUserInput = prompt('What day is today ?')
let day = dayUserInput.toLowerCase()

switch (day) {
  case 'monday':
    console.log('Today is Monday')
    break
  case 'tuesday':
    console.log('Today is Tuesday')
    break
  case 'wednesday':
    console.log('Today is Wednesday')
    break
  case 'thursday':
    console.log('Today is Thursday')
    break
  case 'friday':
    console.log('Today is Friday')
    break
  case 'saturday':
    console.log('Today is Saturday')
    break
  case 'sunday':
    console.log('Today is Sunday')
    break
  default:
    console.log('It is not a week day.')
}
