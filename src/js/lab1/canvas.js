import {lagrange} from './lagrange.js'

export let lab1Canvas = () => {
  let canvas = document.querySelector('#lab1Canvas')
  let ctx = canvas.getContext('2d')

  canvas.width = 500
  canvas.height = 500

  let down = 500

  let xArr = [0, 2, 3, 5]
  let yArr = [1, 3, 2, 5] 
  let length = xArr.length

  ctx.beginPath();
  ctx.strokeStyle = "#0e9ed8";
  for (let i = 0; i < 10; i++) {
    let x = i * 50;
    let y = down - lagrange(xArr, yArr, i) * 20;
    (i === 0) ? ctx.moveTo(x,y) : ctx.lineTo(x,y)
    console.log('x=',x)
    console.log('y=',y)
    ctx.stroke();
  }

  ctx.closePath();
  ctx.beginPath();

  ctx.strokeStyle = "#d80200";
  for (let i = 0; i < length; i++) {
    let x = xArr[i] * 50;
    let y = down - lagrange(xArr, yArr, xArr[i]) * 20;
    (i === 0) ? ctx.moveTo(x,y) : ctx.lineTo(x,y)
    console.log('x=',x)
    console.log('y=',y)
    ctx.stroke();
  }
  
  console.log(canvas,ctx)

  console.log(canvas.width, canvas.height)
}