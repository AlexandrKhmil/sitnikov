import {Canvas} from './canvas.js'
import {readingData} from './data.js'

import {Lagrange} from './lab1/lagrange.js'
import {Newton} from './lab1/newton.js'

import {controllInit} from './input/sizeButtons.js'

/* ********************************************************************* */
/* Функции которые совмещают работу классов */

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
  let data = readingData() 
  
  // calculate Newton
  let newton = new Newton(data) 
  let approximatedArray = newton.qwerty(0, 1, 0.1)

  console.log(approximatedArray)
  
  //newton.work(0.1)

  // Drawing
  let myCanvas = new Canvas(document.querySelector('canvas')) 
  myCanvas.grid([750, 750]) 
  myCanvas.drawLine(data, '#000000', [4500, 500], 10)
  myCanvas.drawLine(approximatedArray, '#ff0000', [4500, 500], 10) 
}

/* ********************************************************************* */

let siteNameSpace = {
  home : {
    onload : () => {},
    start  : () => {}
  },
  lab1 : {
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
    start : () => {}
  }
} 

document.addEventListener("DOMContentLoaded", () => {
  siteNameSpace[ document.body.id ].onload() 
})

document.addEventListener('argsInputed', () => { 
  siteNameSpace[ document.body.id ].start() 
}) 