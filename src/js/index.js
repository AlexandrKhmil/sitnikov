import {Canvas} from './canvas.js'
import {readingData} from './data.js'

import {Lagrange} from './lab1/interpolationMethods/lagrange'
import {Newton} from './lab1/interpolationMethods/newton' 
import {Spline} from './lab1/interpolationMethods/spline' 

import {controllInit} from './input/sizeButtons.js'

import {outputResult, outputValues} from './html/outputTable' 
 
/* ********************************************************************* */
/* Функции которые совмещают работу классов */  
let naturalLog = (start, final, step) => {
  return [...new Array(Math.ceil(Math.abs(final - start) / step)).fill(start)
    .map((item, index) => item + index * step), final]
    .map((point) => [point, Math.log(Math.pow(point, 2) + point + 1)])
}

let comparison = () => {
  // Get data from original function
  let naturalArray = naturalLog(0, 10, 0.1) 
  let data = [naturalArray[0], naturalArray[10], naturalArray[20], naturalArray[30], naturalArray[40]]

  // Get data for methods
  let lagrangeArray = new Lagrange(data).getLine(data[0][0], data[data.length - 1][0], 0.1)
  let diffLagrangeArray = lagrangeArray.map((item, index) => 
    [...item, Math.abs(item[1] - naturalArray[index][1])]) 

  let newtonArray = new Newton(data).getLine(data[0][0], data[data.length - 1][0], 0.1)
  let diffNewtonArray = newtonArray.map((item, index) => 
    [...item, Math.abs(item[1] - naturalArray[index][1])]) 

  let splineArray = new Spline(data).getLine(data[0][0], data[data.length - 1][0], 0.1)
  let diffSplineArray = splineArray.map((item, index) => 
    [...item, Math.abs(item[1] - naturalArray[index][1])]) 

  // Output arr in tables
  outputResult(diffLagrangeArray, document.querySelector('.output-table-lagrange'))
  outputResult(diffNewtonArray, document.querySelector('.output-table-newton'))
  outputResult(diffSplineArray, document.querySelector('.output-table-spline'))

  // Output values in tables  
  outputValues({
    'output-table-lagrange-values__max' : Math.max(...diffLagrangeArray.map(item => item[2])),
    'output-table-lagrange-values__min' : Math.min(...diffLagrangeArray.map(item => item[2])),
    'output-table-lagrange-values__avg' : diffLagrangeArray.map(item => item[2]).reduce((prev, item, index, arr) => prev + item / arr.length, 0)
  }, document.querySelector('.output-table-lagrange-values')) 
  outputValues({
    'output-table-newton-values__max' : Math.max(...diffNewtonArray.map(item => item[2])),
    'output-table-newton-values__min' : Math.min(...diffNewtonArray.map(item => item[2])),
    'output-table-newton-values__avg' : diffNewtonArray.map(item => item[2]).reduce((prev, item, index, arr) => prev + item / arr.length, 0)
  }, document.querySelector('.output-table-newton-values')) 
  outputValues({
    'output-table-spline-values__max' : Math.max(...diffSplineArray.map(item => item[2])),
    'output-table-spline-values__min' : Math.min(...diffSplineArray.map(item => item[2])),
    'output-table-spline-values__avg' : diffSplineArray.map(item => item[2]).reduce((prev, item, index, arr) => prev + item / arr.length, 0)
  }, document.querySelector('.output-table-spline-values'))

  // Draw functions
  let myCanvas = new Canvas(document.querySelector('canvas')) 
  myCanvas.grid([1, 1])  
  myCanvas.drawPoints(data, '#000000', [1, 1])
  myCanvas.drawLines(naturalArray, '#000000', [1, 1]) 
  myCanvas.drawLines(lagrangeArray, '#00ff00', [1, 1]) 
  myCanvas.drawLines(newtonArray, '#0000ff', [1, 1]) 
  myCanvas.drawLines(splineArray, '#ff0000', [1, 1]) 
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
  myCanvas.drawPoints(data, '#000000', [1, 1])
  myCanvas.drawLines(approximatedArray, '#ff0000', [1, 1]) 
}

/* ********************************************************************* */

let siteNameSpace = {
  home : {
    onload : () => {},
    start  : () => {}
  },
  comparison : {
    onload : () => { 
      comparison()
    } 
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