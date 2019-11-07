export let outputResult = (arr, table) => {  
  arr.forEach(item => {
    try {
      [...table.children].find(item => item.tagName == 'TBODY').appendChild(document.createElement('tr'))
        .appendChild(document.createElement('td'))
          .appendChild(document.createTextNode(item[0].toFixed(1))) 
        .parentElement.parentElement
        .appendChild(document.createElement('td'))
          .appendChild(document.createTextNode(item[1].toFixed(5)))
        .parentElement.parentElement
        .appendChild(document.createElement('td'))
          .appendChild(document.createTextNode(item[2].toFixed(5)))  
    } catch (e) {} 
  })  
}

export let outputValues = (value, table) => {
  try {
    [...[...table.childNodes].find(item => item.tagName == 'TBODY').children]
      .forEach(tr => { [...tr.children] 
        .forEach(td => {
          Object.keys(value).forEach(key => {
            if ([...td.classList].includes(key))
              td.appendChild(document.createTextNode(value[key].toFixed(5)))
          }) 
        })
    })
  } catch (e) {} 
}