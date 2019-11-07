export class Interpolation {
  constructor(data) {
    this.data = data
  }

  getPoint(x) {
    return x
  }
  
  getLine(start, final, step) {
    return [...new Array(Math.ceil(Math.abs(final - start) / step)).fill(start)
      .map((item, index) => item + index * step), final]
      .map((point) => [point, this.getPoint(point)])
  }
}