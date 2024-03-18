function vowelsInString() {
    //set variables for input and output values from HTML
    var inputText = document.getElementById('vowelTextInput').value;
    var outputVowelDiv = document.getElementById('vowelOutput');
    var returnVal = [0, 0, 0]       //index values: 0: total char; 1: total vowels; 2: total consonants
    var VowelsCheck = "aAeEiIoOuU";
    for (const letter of inputText) {
        returnVal[0] += 1
        if ((letter >= "a" && letter <= "z") || (letter >= "A" && letter <= "Z")) {
            if (VowelsCheck.indexOf(letter) !== -1){
                returnVal[1] += 1
            } else {
                returnVal[2] += 1
            }
        }
    }

    //process string
    var returnStr = '<p>You entered: <br>' + inputText + '<br><br> total count: ' + returnVal[0] + '<br> total vowels: ' + returnVal[1] + '<br> total consonants: ' + returnVal[2] + '</p>';

    //output string to designated div
    outputVowelDiv.innerHTML = returnStr;
}

function isPalindrome(num) {
    //set variables for input and output values from HTML
    var inputNum = parseInt(document.getElementById('inputNumber').value);
    var outputResult = document.getElementById('numOutput');

    var returnStr = ''
    if (inputNum < 0 || isNaN(inputNum)) {
        returnStr = '<p> The value provided is not valid, please try again!</p>';
    } else {
        // Initialize variables
        let origNum = inputNum;
        let revNum = 0;

        // Reverse the number
        while (inputNum > 0) {
            const digit = inputNum % 10;
            revNum = revNum * 10 + digit;
            inputNum = Math.floor(inputNum / 10);
        }
        var isPal = origNum === revNum;
        returnStr = isPal ? '<p> The number provided is a palindrome </p>' : '<p> The number provided is not a palindrome </p>'
    }

    //output string to designated div
    outputResult.innerHTML = returnStr;
}

function tipCalculator() {
    //set variables for input and output values from HTML
    var billAmount = parseFloat(document.getElementById('billAmt').value);
    var tipPercent = parseFloat(document.getElementById('tipPerc').value);
    var totalBillDiv = document.getElementById('totalBillValue');
    var tipAmount = 0
    var returnStr = "";

    if ((billAmount > 0 && !isNaN(billAmount)) && (tipPercent > 0 && !isNaN(tipPercent))) {
        tipAmount = (billAmount*tipPercent)/100;
        var total = billAmount + tipAmount;
        total = total.toFixed(2)
        returnStr = '<p>Your total bill amount due is: $' + total + '</p>';
    } else {
        returnStr = '<p> The valued provided are not valid, please try again!</p>';
    }

    //output string to designated div
    totalBillDiv.innerHTML = returnStr;
}

function showPage(pageId) {
    // Hide all pages
    var pages = document.querySelectorAll('.page');
    pages.forEach(function(page) {
      page.classList.remove('active');
    });
    
    // Show the selected page
    var selectedPage = document.getElementById(pageId);
    selectedPage.classList.add('active');
}