import {Canvas} from './canvas.js'
import {readingData} from './data.js'

import {Lagrange} from './lab1/lagrange.js'
import {Newton} from './lab1/newton.js'

import {Spline} from './lab1/spline.js'

import {naturalLog} from './lab1/natural.js'

import {controllInit} from './input/sizeButtons.js'
 
/* ********************************************************************* */
/* Функции которые совмещают работу классов */

let result = (arr) => {
  document.querySelector('.result')
    .appendChild(Object.assign(document.createElement('div'), { className : 'result__list'}))
  let e = document.querySelector('.result__list:last-child')
  arr.forEach((item,index) => {
    e.appendChild(Object.assign(document.createElement('div'), { className : 'result__item'}))
      .appendChild(document.createTextNode(`x[${index}] = [ ${item[0].toFixed(1)}; ${item[1].toFixed(3)}]`))
  })
}

let resultDiff = (arr) => {
  document.querySelector('.result')
    .appendChild(Object.assign(document.createElement('div'), { className : 'result__list'}))
  let e = document.querySelector('.result__list:last-child')
  arr.forEach((item,index) => {
    e.appendChild(Object.assign(document.createElement('div'), { className : 'result__item'}))
      .appendChild(document.createTextNode(`diff[${index}] = [ ${item.toFixed(5)}]`))
  })
}

let difference = (farr, sarr) => {
  return farr.map((item,index) => {
    return Math.abs(item[1] - sarr[index][1])
  })
}

let getExtremums = (arr, text) => {
  console.log('ext arr =', arr) 
  document.querySelector('.result')
    .appendChild(Object.assign(document.createElement('div'), { className : 'result__list'}))
  let e = document.querySelector('.result__list:last-child')
  .appendChild(Object.assign(document.createElement('div'), { className : 'result__item'}))
      .appendChild(document.createTextNode(`${text}`))
    .parentElement.parentElement
    .appendChild(Object.assign(document.createElement('div'), { className : 'result__item'}))
      .appendChild(document.createTextNode(`Max = [${arr.reduce((prev, item) => {return (item < prev) ? prev : item}, 0)}]`))
    .parentElement.parentElement
    .appendChild(Object.assign(document.createElement('div'), { className : 'result__item'}))
      .appendChild(document.createTextNode(`Min = [${arr.reduce((prev, item) => {return (item > prev) ? prev : item}, 0)}]`))
    .parentElement.parentElement
      .appendChild(Object.assign(document.createElement('div'), { className : 'result__item'}))
        .appendChild(document.createTextNode(`Среднее = [${arr.reduce((prev, item) => {return prev + item}, 0) / arr.length}]`))
}

let run = (method) => {
  // Reading Data
  let data = readingData()

  // Calculating Array
  let approximatedArray;
  switch(method) {
    case 'Lagrange' : 
      approximatedArray = new Lagrange(data).getLine(data[0][0], data[data.length - 1][0], 0.1)
      break 
    case 'Newton' : 
      approximatedArray = new Newton(data).getLine(data[0][0], data[data.length - 1][0], 0.1)
      break 
    case 'Spline' : 
      approximatedArray = new Spline(data).getLine(data[0][0], data[data.length - 1][0], 0.1)
      break 
  }

  // Drawing 
  let myCanvas = new Canvas(document.querySelector('canvas')) 
  myCanvas.grid([1, 1]) 
  myCanvas.drawDots(data, '#000000', [1, 1])
  myCanvas.drawLines(approximatedArray, '#ff0000', [1, 1]) 
}

/* ********************************************************************* */

let siteNameSpace = {
  home : {
    onload : () => {},
    start  : () => {}
  },
  lagrange : {
    onload : () => {
      controllInit() 
      run('Lagrange')
    },
    start : () => {
      run('Lagrange')
    }
  },
  newton : {
    onload : () => {
      controllInit() 
      run('Newton')
    },
    start : () => {
      run('Newton')
    }
  },
  spline : {
    onload : () => {
      controllInit() 
      run('Spline')
    },
    start : () => {
      run('Spline')
    }
  }
} 

document.addEventListener("DOMContentLoaded", () => {
  siteNameSpace[ document.body.id ].onload() 
})

document.addEventListener('argsInputed', () => { 
  siteNameSpace[ document.body.id ].start() 
}) 