import {Canvas} from './canvas.js'
import {lagrange} from './lab1/lagrange.js'

import {controllInit} from './input/sizeButtons.js'

let siteNameSpace = {
  home : {
    onload : {}
  },
  lab1 : {
    onload : () => {
      controllInit() 
      let myCanvas = new Canvas(document.querySelector('canvas'))

      myCanvas.grid([750, 750])

      myCanvas.draw([[0,1], [2,3], [3,2], [5,5]], '#000000', [750, 750], 10)
      let xArr = [0, 2, 3 ,5]
      let yArr = [1, 3, 2, 5]

      let myArr = xArr.map((item, index) => {
        return [item, yArr[index]]
      })

      let arr = []
      for (let i = 0; i < 100; i+=0.1) {
        arr.push([i, lagrange(myArr, i)]   )
      }

      myCanvas.draw(arr, '#ff0000', [750, 750], 10)  
    }
  }
} 

document.addEventListener("DOMContentLoaded", () => {
  siteNameSpace[ document.body.id ].onload() 
})

/* */

document.addEventListener('argsInputed', () => { 
  // Считывание данных
  let arr = [...document.querySelectorAll('.args tbody tr')].map((row) => { 
    return [...row.children].filter((item) => {
      return ([...item.children][0] != undefined) 
        ? [...item.children][0].tagName == 'INPUT' && [...item.children][0].getAttribute('type') == 'number'
        : false
    }).map((item) => {
      return [...item.children][0].value
    })
  }).reduce((prev, row, rowIndex) => { 
    return (rowIndex != 0) 
      ? prev.map((dot, index) => {
        return [dot, row[index]]
      })
      : row
  }, 0) 

  // Рисование
  let myCanvas = new Canvas(document.querySelector('canvas'))
  myCanvas.grid([750, 750])
  myCanvas.draw(arr, '#000000', [750, 750], 10)

  // Лагранж
  let marr = []
  for (let i = 0; i < 100; i+=0.1) {
    marr.push([i, lagrange(arr, i)]   )
  }

  myCanvas.draw(marr, '#ff0000', [750, 750], 10)  
}) 