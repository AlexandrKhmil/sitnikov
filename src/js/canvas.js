export class Canvas {
  constructor(element) {
    this.canvas = element
    this.canvas.width = 500
    this.canvas.height = 500
    this.ctx = this.canvas.getContext('2d')
  }

  grid(scale) {
    // Setup Grid
    this.ctx.lineWidth = 1
    this.ctx.strokeStyle = '#000000'
    this.ctx.setLineDash([1,3])
    this.ctx.font = `16px Arial`  
    this.ctx.setTransform(scale[0], 0, 0, scale[1], 0, this.canvas.height * (1 - scale[1]))

    // Draw X's Lines
    for(let i = 50; i < this.canvas.width * (1/scale[0]); i += 50) {
      this.ctx.moveTo(i, 0 - this.canvas.height * (1/scale[1] - 1)) 
      this.ctx.lineTo(i, this.canvas.height )
      this.ctx.fillText(i / 50, i + 3, this.canvas.height - 5) 
      this.ctx.stroke()
    } 

    // Draw Y's Lines
    for(let i = 50 - this.canvas.height * (1/scale[1] - 1); i < this.canvas.height; i += 50) {
      this.ctx.moveTo(0, i) 
      this.ctx.lineTo(this.canvas.width * (1/scale[0]), i)
      this.ctx.fillText((this.canvas.width - i) / 50, 3, i - 3) 
      this.ctx.stroke()
    }  
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