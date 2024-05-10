//Magic Eight Ball 
let userName = 'Jane';
//the user will be able to input a question, then our program will output a random fortune.
userName ? console.log(`Hello, $ooo{userName}!`)
: console.log('Hello!');

const userQuestion = 'Will I marry the person I love?'
console.log(userQuestion + ' ' +  userName);

let randomNumber = Math.floor(Math.random() * 8 );
console.log(randomNumber)
//switch statement
/*
switch (randomNumber) 
{case 1:
  console.log('It is certain');
  break;
case 2:
  console.log('It is decidedly so');
  break;
case 3:
  console.log('Reply hazy try again');
  break;
case 4:
  console.log('Cannot predict now');
  break;
case 5:
  console.log('Do not count on it');
  break;
case 6:
  console.log('My sources say no');
  break;
case 7:
  console.log('Outlook not so good');
  break;
case 8:
  console.log('Signs point to yes');
  break;
default:
  console.log('Invalid question');
  break;
}
*/

//if/else if/else statement
if (randomNumber === 1) {
console.log('It is certain');
} else if (randomNumber === 2) {
  console.log('It is decidedly so');
} else if (randomNumber === 3) {
  console.log('Reply hazy try again');
} else if (randomNumber === 4) {
  console.log('Cannot predict now');
} else if (randomNumber === 5) {
  console.log('Do not count on it');
} else if (randomNumber === 6) {
   console.log('My sources say no');
} else if (randomNumber === 7) {
  console.log('Outlook not so good');
} else if (randomNumber === 8) {
  console.log('Signs point to yes');
} else {
  console.log('Invalid question');
}
