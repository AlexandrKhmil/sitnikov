export let controllInit = () => {
  document.querySelector('.args-count__add').addEventListener('click', () => {  
    document.querySelectorAll('.args-table tr').forEach((item, index) => {
      item.innerHTML += (item.childElementCount < 8) 
        ? (index == 0) 
          ? `<th>${item.childElementCount}</th>` 
          : '<td><input type="number" value="1" /></td>'
        : '' 
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
 