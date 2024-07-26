
function getText(){
    // get the message from the textarea "message_box"
    let message = document.getElementById("message_box").value;
    console.log(` Text -->${message}<-- / Type of -->${typeof (message)}<-- / Length -->${message.length}<--`);

    return message;
}


function hideElementsOfResultArea(state = false){
    let img = document.getElementById("result-any-message-div");
    if(state){
        img.style.display = "none";
    }else{
        img.style.display = "block";
    }   
}

function enableCopyButton(state = false){
    let copyButton = document.getElementById("copy-button-divicion");
    if(state){
        copyButton.style.display = "flex";
    }else{
        copyButton.style.display = "none";
    }
}
function resizeResultArea(){
    let resultArea = document.getElementById("result-text-divicion");
    resultArea.style.height = '90%';
}

function enterTextToResultArea(text){
    let parraghap = document.getElementById("p1");
    parraghap.innerHTML=`${text}`
}

function encrypt(letter){
    if(letter == 'e'){
        return "enter"
    }
    else if(letter == 'i'){
        return "imes"
    }
    else if(letter == 'a'){
        return "ai"
    }
    else if(letter == 'o'){
        return "ober"
    }
    else if(letter == 'u'){
        return "ufat"
    }
    else{
        return String(letter);
    }
}

function decrypt(encryptedMessage){
    let index = 0;
    let decryptedMessage = "";
    let stringLen = encryptedMessage.length;
    
    while(index < stringLen ){
        //string.substring(startIndex, endIndex)

        if(encryptedMessage.substring(index, index+5) == "enter"){ // five letter of the string
            // console.log(encryptedMessage.substring(index, index+5));
            decryptedMessage += "e";
            index += 5;
        }
        else if(encryptedMessage.substring(index, index+4) == "imes" ){
            // console.log(encryptedMessage.substring(index, index+4));
            decryptedMessage += "i";
            index += 4;
        }
        else if(encryptedMessage.substring(index, index+4) == "ober" ){
            // console.log(encryptedMessage.substring(index, index+4));
            decryptedMessage += "o";
            index += 4;
        }
        else if(encryptedMessage.substring(index, index+4) == "ufat" ){
            // console.log(encryptedMessage.substring(index, index+4));
            decryptedMessage += "u";
            index += 4;
        }
        else if(encryptedMessage.substring(index, index+2) == "ai" ){
            // console.log(encryptedMessage.substring(index, index+2));
            decryptedMessage += "a";
            index += 2;
        }
        else{
            // console.log(encryptedMessage.substring(index, index+1));
            decryptedMessage += encryptedMessage.substring(index,index+1);
            index ++;
        }
        // console.log(`result --> ${decryptedMessage}`);
    }
    return decryptedMessage;
}

function encryptMessage(){
    let message = getText();
    // split string message into char array
    splitMessgeArray = message.split('');
    // variable to allocate the new encrypted messaje
    let encryptedMessage = "";
    for (let index = 0; index < splitMessgeArray.length; index++) {
        encryptedMessage += encrypt(splitMessgeArray[index]);
    }
    enterTextToResultArea(encryptedMessage);
    hideElementsOfResultArea(true);
    enableCopyButton(true);
    resizeResultArea();
}

function decryptMessage(){
    let messageDecrypted = decrypt(getText());
    enterTextToResultArea(messageDecrypted);
    hideElementsOfResultArea(true);
    enableCopyButton(true);
    resizeResultArea();
}

function copyToClipboard() {
    // Get the text field
    var copyText = document.getElementById("p1");

     // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.textContent);
  
    // // Alert the copied text
    alert("Copied the text: " + copyText.textContent);
  }