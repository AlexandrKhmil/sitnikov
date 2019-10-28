let canvas = document.querySelector('canvas')
let ctx = canvas.getContext('2d')
canvas.width  = 5000
canvas.height = 5000 

export let draw = (arr, color, scale, lineWidth) => { 
  let height = canvas.height
  ctx.lineWidth = lineWidth

  ctx.beginPath()
  ctx.strokeStyle = color

  arr.forEach((item, index) => { 
    (index == 0) 
      ? ctx.moveTo(item[0] * scale[0], height - item[1] * scale[1]) 
      : ctx.lineTo(item[0] * scale[0], height - item[1] * scale[1])
    ctx.stroke();
  })

  ctx.closePath()
}