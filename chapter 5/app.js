// // // Question1

// var input1 =prompt("Tell first number");
// var input2 =prompt("Tell Second number");

// var finalResult = input1 * input2;

// document.write(" <p> Multiplication of   " + "  " + input1 + "  and   " + input2 + "  " + "is   " + finalResult);

// var input1 =prompt("Tell first number");
// var input2 =prompt("Tell Second number");

//  var finalResult = input1 - input2;

//  document.write("<p> Subtraction from   " + "  " + input1 + "  and   " + input2 + "  " + "is   " + finalResult);

// var input1 =+prompt("Tell first number");
// var input2 =+prompt("Tell Second number");

// var finalResult = input1 + input2;

// document.write(" <p> sum of   " + "  " + input1 + "  and   " + input2 + "  " + "is   " + finalResult);

// var input1 =prompt("Tell first number");
// var input2 =prompt("Tell Second number");

// var finalResult = input1 % input2;

// document.write(" <p> Sum Reminder of   " + "  " + input1 + "  and   " + input2 + "  " + "is   " + finalResult);





// Question3

document.write("Value of variable declaration is undefine");
 var num1 = "5"
 document.write("<p> Initial value: " + num1);

 var num1 = ++num1;

 document.write("<p> value after increment: " + num1);

 var newNum = 7;

 var addi = num1 + newNum;

 document.write("<p> value after addition: " + addi);

 var addi = --addi;

 document.write("<p> value after decrement: " + addi);

 var newAddi = addi % 3;

 document.write("<p> The reminder is: " + newAddi);


// Question4

var ticketPrice = 600;
var ticketPeople = 5;

var ticketTotal = ticketPrice * ticketPeople;

document.write("<p> Total cost to buy " + ticketPeople + " Tickets to a movie is " + ticketTotal +"PKR");




// Question5
document.write("<p> Table of 4") 
for(i = 1; i <= 10; i++){
    document.write ("<p> 4 X " + i + "=" + i * 4);
}


// Question6

var cel = 40;
var far = 90;

var cell = cel = (far-32) * 5 / 9;
var farr = far = (cel - 9 / 5) + 32;

document.write ("<p>" + cell + " C is " + farr + "F");


// Question8

var totalmarks = 980;
var markobtain = 804;
var Percentage = (markobtain / totalmarks)*100;

document.write("<p> Total marks: " + totalmarks);
document.write("<p> Marks obtained: " + markobtain);
document.write("<p> Percentage: " + Percentage + "%");


// Question9

var usDollar = 104.80;
var saudi = 28;

var myUsDollar = 10;
var mySaudi = 25;

var totalCurrency= (usDollar * myUsDollar) + (saudi * mySaudi);

document.write("<p> Total currency in PKR: " + totalCurrency);

// Question10

var arth =  5 * 10 / 2;
 
document.write("<p> Total value is: " + arth);


// Question11

var currentYear = 2022;
var birthYear = 1992;
var yourAge = currentYear - birthYear;

document.write("<p> Current Year: " + currentYear);
document.write("<p> Birth Year: " + birthYear);
document.write("<p> Your Age: " + yourAge);

// Question12

var radius = 20
var Cir = 2 * 3.12 * radius;
var area = radius * Cir;

document.write("<p> Radius of a Circle: " + radius);
document.write("<p> The circumference is: " + Cir);
document.write("<p> The area is: " + area);


// Question13

document.write("<p> The Lifetime Supply Calculator");

var Snack = "Chocolate chip";
var productAge = 15;
var estiAge = 65;
var perDay = 3;

var chocoremain = estiAge - productAge;

var telly = chocoremain * perDay;

document.write("<p> Favourite Snack: " + Snack);
document.write("<p> Current age: " + productAge);
document.write("<p> Estimate Maximum Age: " + estiAge);
document.write("<p> Amount of snacks per day: " + productAge);
document.write("<p> you will need " + telly + " " + Snack + " to last you until the ripe old age of " + estiAge );


