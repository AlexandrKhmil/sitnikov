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

let lagrangeDraw = () => { 
  // Reading Data
  let data = readingData() 

  // Calculate Lagrange
  let lagrange = new Lagrange(data)
  let approximatedArray = lagrange.approximation(data[0][0], data[data.length - 1][0], 0.1)

  // Drawing
  let myCanvas = new Canvas(document.querySelector('canvas')) 
  myCanvas.grid([1, 1]) 
  myCanvas.drawDots(data, '#000000', [1, 1])
  myCanvas.drawLines(approximatedArray, '#ff0000', [1, 1]) 
}

let newtonDraw = () => {
  // Reading Data
  let data = readingData() 
  
  // Calculate Newton
  let newton = new Newton(data) 
  let approximatedArray = newton.approximation(data[0][0], data[data.length - 1][0], 0.1) 

  // Drawing
  let myCanvas = new Canvas(document.querySelector('canvas')) 
  myCanvas.grid([1, 1]) 
  myCanvas.drawDots(data, '#000000', [1, 1])
  myCanvas.drawLines(approximatedArray, '#ff0000', [1, 1]) 
}

let splineDraw = () => {
  // Reading Data
  let data = readingData() 

  // Calculate Spline
  let spline = new Spline(data) 
  let approximatedArraySplines = spline.approximation(data[0][0], data[data.length - 1][0], 0.1)  
  let newton = new Newton(data) 
  let approximatedArrayNewton = newton.approximation(data[0][0], data[data.length - 1][0], 0.1) 

  let naturalArray = naturalLog(data[0][0], data[data.length - 1][0], 0.1)
  console.log('naturalArray = ', naturalArray)
  console.log('spline = ', approximatedArraySplines) 
  result(approximatedArraySplines)
  result(naturalArray)
  resultDiff(difference(approximatedArraySplines, naturalArray)) 
  resultDiff(difference(approximatedArrayNewton, naturalArray))

  getExtremums(difference(approximatedArraySplines, naturalArray), 'Сплайн')
  getExtremums(difference(approximatedArrayNewton, naturalArray), 'Ньютон')


  // Drawing
  let myCanvas = new Canvas(document.querySelector('canvas')) 
  myCanvas.grid([1, 1]) 
  myCanvas.drawDots(data, '#000000', [1, 1])
  myCanvas.drawLines(approximatedArraySplines, '#ff0000', [1, 1]) 
  myCanvas.drawLines(naturalArray, '#00ff00', [1, 1])
  myCanvas.drawLines(approximatedArrayNewton, '#0000ff', [1,1])
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
      lagrangeDraw()
    },
    start : () => {
      lagrangeDraw()
    }
  },
  newton : {
    onload : () => {
      controllInit() 
      newtonDraw()
    },
    start : () => {
      newtonDraw()
    }
  },
  spline : {
    onload : () => {
      controllInit() 
      splineDraw()
    },
    start : () => {
      splineDraw()
    }
  }
} 

document.addEventListener("DOMContentLoaded", () => {
  siteNameSpace[ document.body.id ].onload() 
})

document.addEventListener('argsInputed', () => { 
  siteNameSpace[ document.body.id ].start() 
}) 