export class Newton {
  constructor(data) {
    this.data = data
    this.diff = this.calculateDiff(this.data.map((item) => { return item[1]}))
    this.y0 = []
  } 

  calculateDiff(arr) {
    return (arr.length > 1) 
      ? [arr[0], ...this.calculateDiff(arr.map((item, index, array) => { 
        return (index != array.length - 1) 
          ? array[index + 1] - item
          : null
        }).filter((item) => { return item != null } ))]
      : arr;
  }

  /*
    [1,2,3,4,5] => [1,1,1,1]

    .map((item, index, array) => { 
      return (index != array.length - 1) 
        ? array[index + 1] - item
        : null
    }).filter((item) => { return item != null } ))
  */

  calculate(x) {}

  approximation(startValue, finalValue, step) {}

  work(x) { 
    this.diff.forEach((item, index) => { (index != 0) ? this.y0.push(item[0]) : null})  

    let q = (x - this.data[0][0]) / (this.data[1][0] - this.data[0][0])  
    let e = this.data[0][1] 
      + this.y0.reduce((prev, item, index) => {  
        let multQ = 1
        for(let i = 0; i <= index; i++) {  
          multQ *= (q - i)
        } 
        return prev 
          + multQ * item / factorial(index + 1)
      }, 0) 
 
    return e
  }

  qwerty(startValue, finalValue, step) {
    /*
    return [...new Array(Math.ceil(Math.abs(finalValue - startValue) / step)).fill(startValue).map((item, index) => { 
      return item + index * step
    }), finalValue].map((item) => { 
      return [item, this.work(item)]
    })
    */
  }
}

let factorial = (n) => {
  return (n >= 1) ? n * factorial(n - 1) : 1
}