const textInput = document.querySelector("#input-text");
const outputDiv = document.querySelector("#output");



const maxLength = 30;

textInput.addEventListener('input', handleInput);

function handleInput(){
    console.log(outputDiv.innerText)
    console.log(textInput.textLength)
    
    let remChar = maxLength - textInput.textLength

    outputDiv.innerText = remChar;
    
    if (remChar < 0 ){
        outputDiv.style.color= 'red';
    }
    else{
        outputDiv.style.color = 'black';
    }
}