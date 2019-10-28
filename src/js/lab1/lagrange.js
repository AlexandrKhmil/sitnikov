export let lagrange = (arr, x) => {
	return arr.reduce((prev, item, index) => {
    return prev 
      + item[1] 
      * arr.reduce((inPrev, inItem, inIndex) => {
			    return (index != inIndex) ? inPrev * (x - inItem[0]) : inPrev 
        }, 1) 
      / arr.reduce((inPrev, inItem, inIndex) => {
          return (index != inIndex) ? inPrev * (item[0] - inItem[0]) : inPrev 
        }, 1) 
	}, 0) 
}