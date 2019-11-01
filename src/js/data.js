export let readingData = () => {
  return [...document.querySelectorAll('.args tbody tr')].map((row) => { 
    return [...row.children].filter((item) => {
      return ([...item.children][0] != undefined) 
        ? [...item.children][0].tagName == 'INPUT' && [...item.children][0].getAttribute('type') == 'number'
        : false
    }).map((item) => {
      return [...item.children][0].value
    })
  }).reduce((prev, row, rowIndex) => { 
    return (rowIndex != 0) 
      ? prev.map((dot, index) => {
        return [dot, row[index]]
      })
      : row
  }, 0) 
}