export let getAllowedCheckboxes = () => {
  return [...document.querySelector('.js-checkboxs-methods').children]
    .filter(element => element.tagName == "LABEL")
    .map(label => ([...label.children].find(element => element.tagName == "INPUT").checked) 
      ? [...label.classList].find(className => /(js-checkboxs-methods)/g.test(className)).split('-').pop()
      : null 
    ).filter(item => item != null)
} 