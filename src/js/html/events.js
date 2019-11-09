export let controllInit = () => {
  // Add column to table
  document.querySelector('.args-count__add').addEventListener('click', () =>   
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
  )
   
  // Remove column in table
  document.querySelector('.args-count__rem').addEventListener('click', () =>  
    document.querySelectorAll('.args-table tr').forEach((item) => {
      if (item.childElementCount > 2) 
        item.removeChild([...item.children].pop())
    }) 
  ) 
 
  // Increase and decrease value in input
  document.addEventListener('click', (e) => { 
    if ([...e.target.classList].includes('args-value__more')) 
      [...e.target.parentElement.parentElement.children].find((item) => [...item.classList].includes('args__input')).value++ 

    if ([...e.target.classList].includes('args-value__less')) 
      [...e.target.parentElement.parentElement.children].find((item) => [...item.classList].includes('args__input')).value--
  })

  // Play
  document.querySelector('.args__play').addEventListener('click', () => 
    document.dispatchEvent(new Event('argsInputed')) 
  )
} 

export let comparisonInit = () => { 
  // Checkboxes for set allowed methods
  new Array(...document.querySelectorAll('.js-checkboxs-methods label input[type="checkbox"]')).forEach(checkbox => 
    checkbox.addEventListener('click', () => 
      document.dispatchEvent(new Event('allowedMethodsChanged')) 
    )
  ) 

  // Clicked
  document.querySelector('.js-dots input[type="submit"]').addEventListener('click', () => 
    document.dispatchEvent(new Event('comparisonPointsChanged')) 
  ) 
}

