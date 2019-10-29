export let controllInit = () => {
  document.querySelector('.btn-add-col').addEventListener('click', () => {  
    document.querySelectorAll('#inputData tr').forEach((item, index) => {
      item.innerHTML += (index == 0) ? `<th>a[${item.childElementCount}]</th>` 
        : (item.childElementCount < 6) ? '<td><input type="number" value="1" /></td>' : ''
    }) 
  })
  
  document.querySelector('.btn-rem-col').addEventListener('click', () => {
    document.querySelectorAll('#inputData tr').forEach((item) => {
      (item.childElementCount > 2) ? item.removeChild(item.lastChild) : ''
    })
  })
}

