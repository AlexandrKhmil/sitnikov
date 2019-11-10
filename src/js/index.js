import {Canvas} from './canvas.js'
import {readingData} from './data.js'

import {Lagrange} from './lab1/interpolationMethods/lagrange'
import {Newton} from './lab1/interpolationMethods/newton' 
import {Spline} from './lab1/interpolationMethods/spline'  

import {getAllowedCheckboxes} from './html/input'
import {outputArrayInTable, outputInDocument} from './html/output' 
import {controllInit, comparisonInit} from './html/events'
 
/* ********************************************************************* */
/* Функции которые совмещают работу классов */   
let naturalLog = (start, final, step, forecasting) => {
  return [...new Array((!forecasting) ? Math.ceil(Math.abs(final - start) / step) : 101).fill(start)
    .map((item, index) => item + index * step), final]
    .map((point) => [point, Math.log(Math.pow(point, 2) + point + 1)])
}

let comparison = () => { 
  // Get to know use forecasting or not
  let forecasting = document.querySelector('.js-dots__further').checked

  // Get data from original function
  let naturalArray = naturalLog(0, 10, 0.1, forecasting) 
  let data = new Array(parseInt(document.querySelector('.js-dots__quantity').value)).fill(1)
    .map((item, index) => naturalArray[Math.floor(index * (document.querySelector('.js-dots__step').value)/0.1)])

  // Allowed methods
  let allowedMethods = getAllowedCheckboxes() 
  new Array('lagrange', 'newton', 'spline').map(method => { return { name : method, exists : allowedMethods.includes(method)}}).forEach(method =>
    document.querySelector(`.js-group-${method.name}`).style = (method.exists) ? '' : 'display: none' ) 

  // Get data for methods  
  let methods = Object.assign({}, 
    ...Object.entries({
      'lagrange' : { array : new Lagrange(data).getLine(data[0][0], data[data.length - 1][0], 0.1, forecasting).map(item => item.map(item => parseFloat(item.toFixed(5)))) },
      'newton' : { array : new Newton(data).getLine(data[0][0], data[data.length - 1][0], 0.1, forecasting).map(item => item.map(item => parseFloat(item.toFixed(5)))) }, 
      'spline' : { array : new Spline(data).getLine(data[0][0], data[data.length - 1][0], 0.1, forecasting).map(item => item.map(item => parseFloat(item.toFixed(5)))) }
    }).map(method => 
      Object({ [method[0]] : Object.assign(method[1], {'diff' : method[1].array.map((point, index) =>
          parseFloat((Math.abs(point[1] - naturalArray[index][1]).toFixed(5))))} 
        )
      })
    )
  ) 
    
  // Output arrays in tables
  allowedMethods.forEach(method =>
    outputArrayInTable(methods[method].array.map((item, index) => [...item, methods[method].diff[index]]),
      document.querySelector(`.output-table-${method}`), true)
  ) 

  // Output values  
  allowedMethods.forEach(method =>  
    outputInDocument({
      [`output-table-${method}-values__max`] : Math.max(...methods[method]['diff']),
      [`output-table-${method}-values__min`] : Math.min(...methods[method]['diff']),
      [`output-table-${method}-values__avg`] : parseFloat(methods[method]['diff'].reduce((prev, item, index, arr) => prev + item / arr.length, 0).toFixed(5))
    }) 
  ) 

  // Draw functions
  let myCanvas = new Canvas(document.querySelector('canvas')) 
  myCanvas.grid([1, 1])  
  myCanvas.drawPoints(data, '#000000', [1, 1])
  myCanvas.drawLines(naturalArray, '#000000', [1, 1]) 

  let colors = {'lagrange' : '#ff0000', 'newton' : '#00ff00', 'spline' : '#0000ff'} 
  allowedMethods.forEach((method, index) =>
    myCanvas.drawLines(methods[method]['array'], colors[method], [1, 1]) 
  )
}

let run = (method) => {
  // Get to know use forecasting or not
  let forecasting = document.querySelector('.js-dots__further').checked
  // Reading Data
  let data = readingData()

  // Calculating Array
  let approximatedArray;
  switch(method) {
    case 'Lagrange' : 
      approximatedArray = new Lagrange(data).getLine(data[0][0], data[data.length - 1][0], 0.1, forecasting)
      break 
    case 'Newton' : 
      approximatedArray = new Newton(data).getLine(data[0][0], data[data.length - 1][0], 0.1, forecasting)
      break 
    case 'Spline' : 
      approximatedArray = new Spline(data).getLine(data[0][0], data[data.length - 1][0], 0.1, forecasting)
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
      comparisonInit()
      comparison()
    },
    start : () => {
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

document.addEventListener('allowedMethodsChanged', (e) => {  
  siteNameSpace[ document.body.id ].start() 
})
 
document.addEventListener('comparisonPointsChanged', (e) => {   
  siteNameSpace[ document.body.id ].start() 
})