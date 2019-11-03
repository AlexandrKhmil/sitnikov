export class Newton {
  constructor(data) {
    this.data = data
    this.diff = this.calculateDiff(this.data.map((item) => { return item[1]})).filter((item, index) => index != 0)
  } 

  calculateDiff(arr) {
    return (arr.length > 1) 
      ? [arr[0], ...this.calculateDiff(arr.map((item, index, array) =>  
        (index != array.length - 1) 
          ? array[index + 1] - item
          : null
        ).filter((item) => item != null ))]
      : arr
  }

  calculate(x) { 
    return this.data[0][1] 
      + this.diff.reduce((prev, item, index) => { 
        return prev 
          + multWithDecrease((x - this.data[0][0]) / (this.data[1][0] - this.data[0][0]), index) 
          * item 
          / factorial(index + 1)
      }, 0)  
  }

  approximation(startValue, finalValue, step) {
    return [...new Array(Math.ceil(Math.abs(finalValue - startValue) / step)).fill(startValue).map((item, index) => { 
      return item + index * step
    }), finalValue].map((item) => { 
      return [item, this.calculate(item)]
    })
  } 
}

let factorial = (n) => {
  return (n >= 1) ? n * factorial(n - 1) : 1
} 

let multWithDecrease = (n, d) => {
  return (d > 0) ? n * multWithDecrease(n - 1, d - 1) : n
}