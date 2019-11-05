export let naturalLog = (startValue, finalValue, step) => {
  return [...new Array(Math.ceil(Math.abs(finalValue - startValue) / step)).fill(startValue).map((item, index) => { 
    return item + index * step
  }), finalValue].map((item) => { 
    return [item, Math.log(Math.pow(item,2) + item + 1)]
  })
}