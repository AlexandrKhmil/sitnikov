export let outputArrayInTable = (arr, table, doClear) => { 
  try {
    if (doClear)
      [...table.children].find(item => item.tagName == 'TBODY').innerHTML = ''
  } catch (e) {}
  arr.forEach(tr => {
    try {
      let element = [...table.children].find(item => item.tagName == 'TBODY').appendChild(document.createElement('tr'))
      tr.forEach(td => 
        element.appendChild(document.createElement('td'))
          .appendChild(document.createTextNode(td))
      ) 
    } catch (e) {} 
  })  
}

// That function finds elements in document and inputs in them
export let outputInDocument = (values) => {
  try {
    Object.keys(values).forEach(key => 
      [...document.querySelectorAll(`.${key}`)].forEach(element => 
        element.innerHTML = values[key]
      )
    )
  } catch (e) {}
}

// That function finds fields in table and inputs in them
export let outputInTable = (values, table) => { 
  try {
    [...[...table.childNodes].find(item => item.tagName == 'TBODY').children]
      .forEach(tr => 
        [...tr.children].forEach(td => {
          Object.keys(values).forEach(key => {
            if ([...td.classList].includes(key))
              td.appendChild(document.createTextNode(values[key]))
          }) 
        })
    )
  } catch (e) {} 
} 