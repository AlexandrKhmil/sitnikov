import {Canvas} from './canvas.js'
import {readingData} from './data.js'

import {Lagrange} from './lab1/lagrange.js'

import {controllInit} from './input/sizeButtons.js'

/* Функции которые совмещают работу классов */

let lagrangeDraw= () => { 
  // Reading Data
  let data = readingData() 

  // Calculate Lagrange
  let lagrange = new Lagrange(data)
  let approximatedArray = lagrange.approximation(data[0][0], data[data.length - 1][0], 0.1)

  // Drawing
  let myCanvas = new Canvas(document.querySelector('canvas')) 
  myCanvas.grid([750, 750]) 
  myCanvas.draw(data, '#000000', [750, 750], 10)
  myCanvas.draw(approximatedArray, '#ff0000', [750, 750], 10) 
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