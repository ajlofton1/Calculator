"use strict"

const input = document.querySelector('.input')
const result = document.querySelector('.result')
const deleteBtn = document.querySelector('.delete')
const keys = document.querySelectorAll('.bottom span')

let operations=""
let answer
let decimalAdded=false

const operators=['+', '-', 'x', '/']

function handleKeyPress(e){
<<<<<<< HEAD
    const key = e.target.dataset.key
    const lastchar = operation[operation.length - 1]
    
    if(key === '='){
        return
    }

    if(key === '.' && decimalAdded){
        return
    }

    if(operators.indexOf(key) !== -1){
        decimalAdded = false
    }

    if (operation.length === 0 && key === '-'){
        operation += key
        input.innerHTML = operation 
        return
    }

    if (operation.length === 0 && operators.indexOf(key) !== -1){
        innput.innerHTML = operation 
        return
    }

    if (operators.indexOf(lastchar) !== -1 && operators.indexOf(key)!==-1){

    }

    
    if (key) {
        if (key === '.') decimalAdded = true
        operation += key
        input.innerHTML = operation
        return
    }

}

    keys.forEach(key =>{
        key.addEventListener ('click , handlekey press')
    })
=======
  const key = e.target.dataset.key
  const lastChar = operation[operation.lenngth -1]

  if(key === "="){
    return
  }
    if (key === '.' && decimalAdded){
      return
    }
      if(operators.indexof(key) !== -1){
        decimalAdded = false
}

if(operation.length == 0 && key ==='-'){
   operation += key
  input.innerHTML = operation
  return
}
  if(opperation.length === 0 && operators .index.Of(key) !== -1){
    operation = operation.replace(/.$/,key)
    input.innterHTML = operation
    return 
  }
  operators.indexOf(lastChar) !== -1 && operators.indexxOf(key) !== -1){
  operation =operation.replace(/.$/, key)
  input.innerHTML = operation
  return
}
     
>>>>>>> f57cd513b346db351aaff27343f9df4af8f6af00
