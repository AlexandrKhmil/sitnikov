export class Newton {
  constructor(data) {
    this.data = data
    this.diff = this.calculateDiff()
    this.y0 = []
  }

  calculateDiff() {
    let result = [this.data.map((item) => { return item[1]})]
    for(let i = 0; i < result[0].length - 1; i++) {
      result.push(result[i].map((item, index, array) => { 
        return (index != array.length - 1) 
          ? array[index + 1] - item
          : null
      }).filter((item) => { return item != null } ))
    }
    return result
  }

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

    console.log('e = ', e)
    return e
  }

  qwerty(startValue, finalValue, step) {
    return [...new Array(Math.ceil(Math.abs(finalValue - startValue) / step)).fill(startValue).map((item, index) => { 
      return item + index * step
    }), finalValue].map((item) => { 
      return [item, this.work(item)]
    })
  }
}

let factorial = (n) => {
  return (n >= 1) ? n * factorial(n - 1) : 1
}