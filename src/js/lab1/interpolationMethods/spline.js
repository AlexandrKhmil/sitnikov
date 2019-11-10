import {Interpolation} from './interpolation'

export class Spline extends Interpolation {
  constructor(data) {
    super(data) 
    this.h = (this.data[this.data.length - 1][0] - this.data[0][0]) / (this.data.length - 1)
    this.m = this.getDerivatives()
  } 
  
  getDerivatives() {
    return [
      (-3 * this.data[0][1]
        + 4 * this.data[1][1]
        - this.data[2][1])
        / (2 * this.h), 
      ...this.data.map((item, index, arr) =>  
        (index != 0 && index != (arr.length - 1)) 
          ? (arr[index + 1][1] - arr[index - 1][1]) 
          / (2 * this.h) 
          : null)
        .filter(item => item != null), 
      (3 * this.data[this.data.length - 1][1]
        - 4 * this.data[this.data.length - 2][1]
        + this.data[this.data.length - 3][1])
        / (2 * this.h)]
  }

  getPoint(x) { 
    let i = (x <= this.data[this.data.length - 1][0]) 
      ? this.data.findIndex((item,index, arr) => item[0] <= x && arr[index + 1][0] >= x) 
      : this.data.length - 2  
    return Math.pow(this.data[i + 1][0] - x, 2) * (2 * (x - this.data[i][0]) + this.h) * this.data[i][1] / Math.pow(this.h, 3)
      + Math.pow(x - this.data[i][0], 2) * (2 * (this.data[i + 1][0] - x) + this.h) * this.data[i + 1][1] / Math.pow(this.h, 3)
      + Math.pow(this.data[i + 1][0] - x, 2) * (x - this.data[i][0]) * this.m[i] / Math.pow(this.h, 2)
      + Math.pow(x - this.data[i][0], 2) * (x - this.data[i + 1][0]) * this.m[i + 1] / Math.pow(this.h, 2)  
  } 
}