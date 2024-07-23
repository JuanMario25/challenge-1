
function getText(){
    // get the message from the textarea "message_box"
    let message = document.getElementById("message_box").value;
    console.log(` Text -->${message}<-- / Type of -->${typeof (message)}<-- / Length -->${message.length}<--`);

    return message;
}


function hideElementsOfResultArea(state=false){
    let img = document.getElementById("result-any-message-div");
    if(state){
        img.style.display = "none";
    }else{
        img.style.display = "block";
    }   
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
            decryptedMessage += "e";
            index += 5;
        }
        else if(encryptedMessage.substring(index, index+5) == "imes" ){
            decryptedMessage += "i";
            index += 4;
        }
        else if(encryptedMessage.substring(index, index+4) == "ober" ){
            decryptedMessage += "o";
            index += 4;
        }
        else if(encryptedMessage.substring(index, index+4) == "ufat" ){
            decryptedMessage += "u";
            index += 4;
        }
        else if(encryptedMessage.substring(index, index+2) == "ai" ){
            decryptedMessage += "a";
            index += 2;
        }
        else{
            decryptedMessage += encryptedMessage.substring(index,index+1);
            index ++;
        }
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
    console.log(encryptedMessage);
    hideElementsOfResultArea(true);
}

function decryptMessage(){
    let messageDecrypted = decrypt(getText());
    console.log(messageDecrypted);
    hideElementsOfResultArea(true);
}