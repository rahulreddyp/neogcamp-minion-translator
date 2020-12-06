var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("textarea[name='txt-input']");


var outputBox = document.querySelector('#output');

var serverURL = "https://api.funtranslations.com/translate/minion.json";

function getTramslationURL(text) {
    return serverURL + "?" + "text=" + text;
}

function errorHandler(error) {
    console.log("Error Occured:", error);
    alert("Error occured! Possible too many requests, please try again after some time");
}

function clickHandler() {
    // outputBox.innerText = txtInput.value;
    const inputText = txtInput.value; //taking input
    // Calling server for processing
    fetch(getTramslationURL(inputText))
        .then(response => response.json())
        .then(json => {
                const translatedText = json.contents.translated;
                outputBox.innerText = translatedText // output
            })
        .catch(errorHandler)
}

btnTranslate.addEventListener("click", clickHandler);