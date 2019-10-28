export let lagrange = (arr, x) => {
	console.log(arr,x)

	let sum = 0		// [ [], [], []]
	for (let i = 0; i < arr.length; i++) {
	  let top = arr.reduce((prev, item, index) => { 
		  return (index != i) ? prev * (x - item[0]) : prev }, 1)
	  let bottom = arr.reduce((prev, item, index) => { 
		  return (index != i) ? prev * (arr[i][0] - item[0]) : prev}, 1)
	  let result = arr[i][1]* top / bottom 
	  sum += result
	}  
	return sum
}