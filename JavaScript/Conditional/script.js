// if (6 > 4) {
    // console.log('yeah, higher higher everyday');
// }


// console.log(6 > 4)

var seriousStudent = 'Favour'
if (seriousStudent == 'Mariam') {
    console.log('yess');
}
// seriousStudent == 'Mariam'
// 'Favour' == 'Mariam'


var swallow = 'fufu'
var drink = 'freshyo'
// var isThereSwallow = true


if (swallow == 'Iyan') {
    console.log('Buy 4 wraps');
}else {
    console.log('Buy anything you see');
}


var isThereSwallow = true
var food = 'fufu'
var water = 'pure water'
if (isThereSwallow = true) {
    if(food == 'fufu'){
    console.log('Buy banga');
    } else if (food == 'amala') {
        console.log('ewedu')
    } else if(food == 'eba'){
    console.log('efo')
    } else{
        console.log('abacha')
    }
} else{
    console.log('Buy indomie, hungryman size 1');
}
    // var Name = true
    
    // var displayInner = document.getElementById('displayInner')
    function check() {
        var myName = document.getElementById('named').value
        if (myName == 'Favour') {
            console.log('correct') 
            document.getElementById('displayInner').innerText = "correct"
        } else{
            console.log('try again')
            document.getElementById('displayInner').innerText = "try again"
        }
    }
    // var palinDrome = input.value.toLowerCase();
    // var reversedWord = palinDrome.split('').reverse().join('');
    // var displayInnerText = document.getElementById('displayInnerText')
    function checkPalindrome() {
        var word = input.value.toLowerCase();
        var reversedWord = palinDrome.split('').reverse().join('');
        
        if (word === reversedWord && word !== "" ) {
            display.innerText = 'True - Accurate.'
        } else{
            display.innerText = 'False - Incorrect'
        }
    }