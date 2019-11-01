export class Lagrange {
  constructor(data) {
    this.data = data
  }

  calculate(x) {
    return this.data.reduce((previousSum, item, index, array) => {
      return previousSum 
        + item[1]
        * array.reduce((inPrev, inItem, inIndex) => {
			    return (index != inIndex) ? inPrev * (x - inItem[0]) : inPrev 
        }, 1) 
        / array.reduce((inPrev, inItem, inIndex) => {
          return (index != inIndex) ? inPrev * (item[0] - inItem[0]) : inPrev 
        }, 1) 
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