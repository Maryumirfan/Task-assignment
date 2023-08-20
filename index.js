var score = 8;
console.log("Multiskilled:" + (score>0 && score<10));
document.getElementById('T1').innerHTML = ('Multiskilled: true');
var timeremaining = 0;
var energy = 10;
console.log("Game over:" + (timeremaining==0 || energy==0 ));
document.getElementById('T2').innerHTML = ('Game over: true');
var num1 = 2;
var num2 = 5;
var test1 = num1 % 2;
var test2 = num2 % 2;
var result1 = test1==0;
var result2 = test2==0;
console.log("Is", num1, "is an even no?", result1);
console.log("Is", num2, "is an even no?", result2);
document.getElementById('T3').innerHTML = result1;
document.getElementById('T31').innerHTML = result2;
let x = 10;
let y = 5;
let z = x + y;
console.log("Sum:", z);
document.getElementById('T4').innerHTML = z;
var now = "Now in";
var three = "3";
var d = "D!";
console.log(now + three + d);
document.getElementById('T5').innerHTML = ('Now in 3D!');
var counter = 0;
counter += 5;
counter += 3;
console.log(counter);
document.getElementById('T6').innerHTML = counter;
var age = 10;
if (age >= 65) {
    console.log("you get your income from your pension");
} else if ( age<65 || age >= 18) {
    console.log("you can get your salary every month");
} else if (age < 18) {
    console.log("you get an allowance")
} else {
    console.log("The age variable is not numerical")
}
document.getElementById('T7').innerHTML= 'it depends upon the condition if we dont write age<65 the true answer will be "you get your allowance' 
var day = 'Sunday';
switch (day) {
    case 'Monday':
        console.log("Do something on monday")
         break;
    case 'Tuesday':
         console.log("Do something on tuesday")
             break;
    case 'Wednesday':
        console.log("Do something on wednesday")
         break;
    case 'Thursday':
        console.log("Do something on thursday")
         break;
    case 'Friday':
        console.log("Do something on friday")
         break;
    case 'Saturday':
        console.log("Do something on saturday")
         break;
    case 'Sunday':
        console.log("Do something on sunday")
         break;
        default:
            console.log("There is no such day")
        break;
}
document.getElementById('T8').innerHTML = 'Do something on sunday';
for( var i = 1; i<=5; i++){
    console.log(i);
}
console.log("Counting completed");
for( var i = 5; i>=1; i--){
    console.log(i);
}
console.log("Counting finished");
var  i = 1;
while(i<=5){
    console.log(i);
    i++;
}
console.log("Counting completed");
var i = 5;
while(i >= 1){
    console.log(i);
    i--;
}
console.log("Counting finished");
var  i = 2018;
while(i<=2022){
    console.log(i);
    i++;
}
for (var i = 1; i<=10; i++){
if(i==1){
    console.log("Golden medal");
} else if(i==2){
    console.log("Silver medal");
} else if(i==3){
    console.log("Bronze medal");
} else{
    console.log(i);
}
}

 



 



