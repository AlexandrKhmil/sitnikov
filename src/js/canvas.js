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
    for(let i = 0; i < this.canvas.width; i += scale[0]) {
      this.ctx.moveTo(i, 0) 
      this.ctx.lineTo(i, this.canvas.height)
      this.ctx.fillText(i/scale[0], i + 75, this.canvas.height - scale[1] / 10)

      this.ctx.stroke()
    } 

    // Draw Y's Lines
    this.ctx.setLineDash([scale[1]/40, scale[1]/10])
    for(let i = this.canvas.height; i > 0; i -= scale[1]) {
      this.ctx.moveTo(0, i) 
      this.ctx.lineTo(this.canvas.width, i)
      if (Math.floor(this.canvas.height/scale[1]) - Math.floor(i/scale[1]) != 0) 
        this.ctx.fillText(Math.floor(this.canvas.height/scale[1]) - Math.floor(i/scale[1]), scale[0] / 10, i - 25 )
      this.ctx.stroke()
    } 
    this.ctx.closePath()
  }

  drawLines(arr, color, scale, lineWidth) {
    // Drawing settings
    this.ctx.lineWidth = lineWidth
    this.ctx.setLineDash([])
    this.ctx.strokeStyle = color 

    // Drawing
    this.ctx.beginPath()  
    arr.forEach((item, index) => { 
      (index == 0) 
        ? this.ctx.moveTo(item[0] * scale[0], this.canvas.height - item[1] * scale[1]) 
        : this.ctx.lineTo(item[0] * scale[0], this.canvas.height - item[1] * scale[1])
      this.ctx.stroke()
    }) 
    this.ctx.closePath()
  }

  drawDots(arr, color, scale){
    // Drawing settings
    //this.ctx.lineWidth = lineWidth
    this.ctx.setLineDash([])
    this.ctx.strokeStyle = color 
    this.ctx.fillStyle = color  
    
    arr.forEach((item, index) => { 
      this.ctx.beginPath()   
      this.ctx.arc(item[0] * scale[0], this.canvas.height - item[1] * scale[1], 25, 0, 2 * Math.PI)
      this.ctx.fill()
      this.ctx.stroke()
      this.ctx.closePath()
    }) 
    
  } 
}  