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