export class Canvas {
  constructor(element) {
    this.canvas = element
    this.canvas.width = 5000
    this.canvas.height = 5000
    this.ctx = this.canvas.getContext('2d')
  }

  grid(scale) {
    this.ctx.lineWidth = 10
    this.ctx.strokeStyle = '#000000'   
    this.ctx.font = `${(scale[0] + scale[1]) / 8}px Arial`
    this.ctx.beginPath() 

    // Draw X's Lines
    this.ctx.setLineDash([scale[0]/40, scale[0]/10])
    for(let i = 0; i < 5000; i += scale[0]) {
      this.ctx.moveTo(i, 0) 
      this.ctx.lineTo(i, 5000)
      this.ctx.fillText(i/scale[0], i + 75, 5000 - scale[1] / 10)
      this.ctx.stroke()
    } 

    // Draw Y's Lines
    this.ctx.setLineDash([scale[1]/40, scale[1]/10])
    for(let i = 5000; i > 0; i -= scale[1]) {
      this.ctx.moveTo(0, i) 
      this.ctx.lineTo(5000, i)
      if (Math.floor(5000/scale[1]) - Math.floor(i/scale[1]) != 0) 
        this.ctx.fillText(Math.floor(5000/scale[1]) - Math.floor(i/scale[1]), scale[0] / 10, i - 25 )
      this.ctx.stroke()
    } 
    this.ctx.closePath()
  }

  draw(arr, color, scale, lineWidth) {
    this.ctx.lineWidth = lineWidth
    this.ctx.setLineDash([])

    this.ctx.beginPath()
    this.ctx.strokeStyle = color
  
    arr.forEach((item, index) => { 
      (index == 0) 
        ? this.ctx.moveTo(item[0] * scale[0], this.canvas.height - item[1] * scale[1]) 
        : this.ctx.lineTo(item[0] * scale[0], this.canvas.height - item[1] * scale[1])
      this.ctx.stroke()
    })
  
    this.ctx.closePath()
  }
} 