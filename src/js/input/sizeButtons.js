export let controllInit = () => {
  document.querySelector('.args-count__add').addEventListener('click', () => {  
    document.querySelectorAll('.args-table tr').forEach((item, index) => {
      if (item.childElementCount < 11)
        (index == 0)
          ? item.appendChild(document.createElement('th'))
              .appendChild(document.createTextNode(item.childElementCount - 1)) 
          : item.appendChild(document.createElement('td'))
              .appendChild(Object.assign(document.createElement('div'), { className : 'args__td'}))
                .appendChild(Object.assign(document.createElement('input'), { className : 'args__input', type : 'number', value : 1, step : 'any'}))
              .parentElement
                .appendChild(Object.assign(document.createElement('div'), { className : 'args-value'}))
                  .appendChild(Object.assign(document.createElement('input'), { className : 'blue-btn args-value__more', type : 'submit', value : ""})) 
                .parentElement
                  .appendChild(Object.assign(document.createElement('input'), { className : 'blue-btn args-value__less', type : 'submit', value : ""})) 
    }) 
  })
   
  document.querySelector('.args-count__rem').addEventListener('click', () => {  
    document.querySelectorAll('.args-table tr').forEach((item) => {
      (item.childElementCount > 2) ? item.removeChild([...item.children].pop()) : '' 
    }) 
  })

  document.querySelector('.args__play').addEventListener('click', () => { 
    document.dispatchEvent(new Event('argsInputed')) 
  })
 
  document.addEventListener('click', (e) => { 
    ([...e.target.classList].includes('args-value__more')) 
      ? [...e.target.parentElement.parentElement.children].find((item) => [...item.classList].includes('args__input')).value++ 
      : ''
    ([...e.target.classList].includes('args-value__less')) 
      ? [...e.target.parentElement.parentElement.children].find((item) => [...item.classList].includes('args__input')).value--
      : ''
  })
}
 