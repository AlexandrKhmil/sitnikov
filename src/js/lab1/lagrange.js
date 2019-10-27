export let lagrange = (xArr, yArr, x) => {
	let sum = 0
	let length = xArr.length
	for (let i = 0; i < length; i++) {
	  let top = xArr.reduce((prev, item, index) => { return (index != i) ? prev * (x - item) : prev}, 1)
  
	  let bottom = xArr.reduce((prev, item, index) => { return (index != i) ? prev * (xArr[i] - item) : prev}, 1)
  
	  let result = yArr[i]* top / bottom
  
	  sum += result
	}  
	return sum
}