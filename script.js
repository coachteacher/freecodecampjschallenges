window.onload = function(){
//Palindrome Checker
const message = document.getElementById('message');
        const input = document.getElementById('enter');
        const submit = document.getElementById('submitButton1');
        
        submit.addEventListener('click', function(){
            const word = input.value;
            let wordStr = word.replaceAll(' ', '').replaceAll(/\W\s_/g,'').replaceAll("_",'').replaceAll('?','').replaceAll('.', '').replaceAll('!', '').replaceAll(',', '');
            let wordLow = wordStr.toLowerCase();
            let stringChange = wordLow.split("");
            let revArray = stringChange.reverse();
            let stringCheck = revArray.join('');
            
            if(wordLow == stringCheck){
                message.innerText = "Congratulations! That's a palindrome!";
                message.style.visibility = "visible";
            }else {
                message.innerText = "are you kidding me? no.";
                message.style.visibility = "visible";
            }
            input.value = "";
          });
            
            function hideText(){
                message.style.visibility = "hidden";
            }
            input.addEventListener('focus', hideText);
            input.addEventListener('keydown', hideText);

            //Roman Numeral converter
document.getElementById('submitButton2').addEventListener('click', function(){
    let numberIn = document.getElementById('numberIn');
    let romanNum = document.getElementById('numberOut');
    let isString = numberIn.value.replaceAll(/[a-z]/gi, '');
    let numArray = isString.split('');

    let romanNumeral = [];
    let arr1 = '';
    let arr2 = '';
    let arr3 = '';
    let arr4 = '';
    
        if(numArray.length == 0 || isString == ""){
            romanNum.innerText = "put a number in  \n silly pants";
            romanNum.style.display = "block";
            romanNum.style.fontSize = "7vw";
            return false
        }else if(numArray.length == 1 && numArray[0] == 0){
            romanNum.innerText = "that won't work \n because the Romans didn't use zero";
            romanNum.style.display = "block";
            romanNum.style.fontSize = "6vw";
            return false;
        }else if(numArray.length >= 4 && numArray[0] >= 4 || numArray.length > 4){
            romanNum.innerText = "that won't work\nRoman Numerals only go up to 3,999";
            romanNum.style.display = "block";
            romanNum.style.fontSize = "6vw";
            return false;
        }else if(numArray.length > 0){
        switch(numArray[numArray.length - 1]){
            case '1':
                arr1 = "I";
                break;
            case '2':
                arr1 = "II";
                break;
            case '3':
                arr1 = "III";
                break;
            case '4':
                arr1 = "IV";
                break;
            case '5':
                arr1 = "V";
                break;
            case '6':
                arr1 = "VI";
                break;
            case '7':
                arr1 = "VII";
                break;
            case '8':
                arr1 = "VIII";
                break;
            case '9':
                arr1 = "IX";
                break;
        }
        switch(numArray[numArray.length - 2]){
            case '1':
                arr2 = "X";
                break;
            case '2':
                arr2 = "XX";
                break;
            case '3':
                arr2 = "XXX";
                break;
            case '4':
                arr2 = "XL";
                break;
            case '5':
                arr2 = "L";
                break;
            case '6':
                arr2 = "LX";
                break;
            case '7':
                arr2 = "LXX";
                break;
            case '8':
                arr2 = "LXXX";
                break;
            case '9':
                arr2 = "XC";
                break;
        }
        switch(numArray[numArray.length - 3]){
            case '1':
                arr3 = "C";
                break;
            case '2':
                arr3 = "CC";
                break;
            case '3':
                arr3 = "CCC";
                break;
            case '4':
                arr3 = "CD";
                break;
            case '5':
                arr3 = "D";
                break;
            case '6':
                arr3 = "DC";
                break;
            case '7':
                arr3 = "DCC";
                break;
            case '8':
                arr3 = "DCCC";
                break;
            case '9':
                arr3 = "CM";
                break;
        }
        switch(numArray[numArray.length - 4]){
            case '1':
                arr4 = "M";
                break;
            case '2':
                arr4 = "MM";
                break;
            case '3':
                arr4 = "MMM";
                break;
        }   
      }else{
        romanNum.innerText = "please type a number";
        romanNum.style.display = "block";
        romanNum.style.fontSize = "7vw";
        return false;
      } 
    
        romanNumeral.push(arr4, arr3, arr2, arr1);
        romanNum.innerText = romanNumeral.join('');
        romanNum.style.display = "block";
        romanNum.style.fontSize = "10vw"; 
        numberIn.value = "";

        function hideText(){
            romanNum.style.display = "none";
        }

        numberIn.addEventListener('focus', hideText);
        numberIn.addEventListener('keydown', hideText);
});

//Caesar's Cipher
document.getElementById('submitButton3').addEventListener('click', function(){
    const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    const codedMessage = document.getElementById('codeInput');
    let str = codedMessage.value.toUpperCase().split('');
    let accumulator = "";

    for(let i = 0; i < str.length; i++){
        let char = str[i];
        let isALetter = alphabet.includes(char);

        if(isALetter === false){
            accumulator += char;
        }else {
            let charIndex = alphabet.findIndex((c) => c === char);
            accumulator += alphabet[charIndex + 13] || alphabet[charIndex - 13];

        let decodedMessage = document.getElementById('decodedMessage');
        decodedMessage.innerText = accumulator;
        decodedMessage.style.display = "block";
        }
    };

    function hideText(){
        decodedMessage.style.display = "none";
    }

    codedMessage.addEventListener('focus', hideText);
    codedMessage.addEventListener('keydown', hideText);
});

};
