export class Canvas {
  constructor(element) {
    this.canvas = element
    this.canvas.width = 5000
    this.canvas.height = 5000
    this.ctx = element.getContext('2d')
  }

  draw(arr, color, scale, lineWidth) {
    this.ctx.lineWidth = lineWidth

    this.ctx.beginPath()
    this.ctx.strokeStyle = color
  
    arr.forEach((item, index) => { 
      (index == 0) 
        ? this.ctx.moveTo(item[0] * scale[0], this.canvas.height - item[1] * scale[1]) 
        : this.ctx.lineTo(item[0] * scale[0], this.canvas.height - item[1] * scale[1])
      this.ctx.stroke();
    })
  
    this.ctx.closePath()
  }
} 