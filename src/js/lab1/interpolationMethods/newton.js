import {Interpolation} from './interpolation'

export class Newton extends Interpolation {
  constructor(data) {
    super(data) 
    this.diff = this.getDiff(this.data.map((item) => item[1]))
      .filter((item, index) => index != 0)
  } 

  getDiff(arr) {
    return (arr.length > 1) 
      ? [arr[0], ...this.getDiff(arr.map((item, index, array) =>  
        (index != array.length - 1) 
          ? array[index + 1] - item
          : null
        ).filter((item) => item != null ))]
      : arr
  }

  getPoint(x) {
    return this.data[0][1] 
      + this.diff.reduce((prev, item, index) => 
        prev 
          + multWithDecrease((x - this.data[0][0]) / (this.data[1][0] - this.data[0][0]), index) 
          * item 
          / factorial(index + 1)
      , 0) 
  }  
}

let factorial = (n) =>
  (n >= 1) ? n * factorial(n - 1) : 1 

let multWithDecrease = (n, d) => 
  (d > 0) ? n * multWithDecrease(n - 1, d - 1) : n
