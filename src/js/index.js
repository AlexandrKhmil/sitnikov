import {Canvas} from './canvas.js'
import {readingData} from './data.js'

import {Lagrange} from './lab1/lagrange.js'
import {Newton} from './lab1/newton.js'
import {Spline} from './lab1/spline.js'

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
  let approximatedArray = spline.approximation(data[0][0], data[data.length - 1][0], 0.1)  
    
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