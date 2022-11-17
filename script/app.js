'use strict'
//Задача №1
const nickName = prompt('What is your nickName', '')
const firstName = prompt('What is your first name', '')
const surname = prompt('What is your surname', '')
if ((nickName && firstName && surname) || (firstName && surname)) {
  alert(`hello ${firstName} ${surname}`)
} else {
  if (nickName && surname) {
    alert(`Hello ${nickName}`)
  } else {
    if (nickName && firstName) {
      alert(`hello ${firstName}`)
    } else {
      alert(`Hello noName`)
    }
  }
}

// Задача №2

let checkNumber = prompt('Enter any number', '')
let moreLess
let oddEven
let integeFractional
let positiveNegative

if (isNaN(checkNumber)) {
  alert('Вами введено не число')
} else {
  if (checkNumber > 100) {
    moreLess = 'больше 100'
  } else {
    moreLess = 'меньше 100'
  }
  if (checkNumber % 2 > 0) {
    oddEven = 'нечетное'
  } else {
    oddEven = 'четное'
  }
  if (Number.isInteger(+checkNumber) === true) {
    integeFractional = 'целое'
  } else {
    integeFractional = 'дробное'
  }
  if (checkNumber > 0) {
    positiveNegative = 'положительное'
  } else {
    positiveNegative = 'oтрицательное'
  }
  alert(
    `Вами введено числo ${moreLess}, ${oddEven}, ${integeFractional}, ${positiveNegative}`,
  )
}

//Задача №3
// задача 2 из первого урока
const firstNumber = +prompt('Первое число?', 1)
const secondNumber = +prompt('Второе число?', 2)
firstNumber === 1,
  secondNumber === 2 ? alert(firstNumber + secondNumber) : alert('default')

// Задача 3 из первого урока
const userName = prompt('what is your name?', '')
const userAge = prompt('What is your age', '')
userAge >= 18 ? alert('hello') : alert(`Goodbye ${userName}`)

//Задача №4
const enterNumber = +prompt('Введите число от 0 до 9', '')
switch (enterNumber) {
  case 0:
    alert('ноль')
    break
  case 1:
    alert('один')
    break
  case 2:
    alert('два')
    break
  case 3:
    alert('три')
    break
  case 4:
    alert('четыре')
    break
  case 5:
    alert('пять')
    break
  case 6:
    alert('шесть')
    break
  case 7:
    alert('семь')
    break
  case 8:
    alert('восемь')
    break
  case 9:
    alert('девять')
    break
  case enterNumber > 10:
    alert('Цифра больше 10')
    break
}
