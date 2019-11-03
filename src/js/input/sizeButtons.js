export let controllInit = () => {
  document.querySelector('.args-count__add').addEventListener('click', () => {  
    document.querySelectorAll('.args-table tr').forEach((item, index) => {
      if (item.childElementCount < 11)
        (index == 0)
          ? item.appendChild(document.createElement('th')).appendChild(
            document.createTextNode(item.childElementCount - 1)) 
          : item.appendChild(document.createElement('td')).appendChild(
            Object.assign(document.createElement('input'), {type : 'number', value : 1, step : 'any'}))
    }) 
  })
  
  document.querySelector('.args-count__rem').addEventListener('click', () => {
    document.querySelectorAll('.args-table tr').forEach((item) => {
      (item.childElementCount > 2) ? item.removeChild(item.lastChild) : ''
    })
  })

  document.querySelector('.args__play').addEventListener('click', () => { 
    document.dispatchEvent(new Event('argsInputed')) 
  })
}
 