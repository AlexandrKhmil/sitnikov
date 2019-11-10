export class Interpolation {
  constructor(data) {
    this.data = data
  }

  getPoint(x) {
    return x
  }
  
  getLine(start, final, step, forecasting) {
    return [...new Array((!forecasting) ? Math.ceil(Math.abs(final - start) / step) + 1 : 101).fill(start)
      .map((item, index) => item + index * step)]
      .map((point) => [point, this.getPoint(point)])
  }
}