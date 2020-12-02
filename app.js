var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("textarea[name='txt-input']")


var outputBox = document.querySelector('#output');
console.log(outputBox);
function clickHandler() {
    outputBox.innerText = txtInput.value;
}

btnTranslate.addEventListener("click", clickHandler);