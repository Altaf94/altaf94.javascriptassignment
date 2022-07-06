// Question1

// document.write("Result:");

// var num = 10;

// document.write("<p> The Value of a is " + num);
// document.write("<p> ....................................");

// var num = ++num; //num ki value hogai 11
// document.write("<p> The Value of a is " + num);

// var num1 = num++; //num ki value hogai 11
// document.write("<p> The Value of a is " + num);

// var num = --num; //num ki value hogai 11
// document.write("<p> The Value of a is " + num);

// var num1 = num--; //num ki value hogai 11
// document.write("<p> The Value of a is " + num);



// Question2

// Question3

// var userName = prompt("Please tell your good name");
// alert("hello " + userName);

// Question3

// var tableNumber =prompt("Which multiplication you want");

// for(i = 1; i <= 10; i++){
//     if ( tableNumber <= 10){
//         document.write("<p>" + i * tableNumber);
//     }
//     else if (tableNumber == "ok"){
//         document.write("<p>" + i * 3);

//     }
// }

// Question4

var subject1 = +prompt("Marks in english");
var subject2 = +prompt("Marks in Urdu");
var subject3 = +prompt("Marks in Math");
var total1 = subject1 + subject2 + subject3;


document.write("<tr><th> Subject   ");
document.write("<tr><th> Total marks    ");
document.write("<tr><th> obtain marks  ");
document.write("<tr><th> Percentage  ");

document.write("<p><tr><td> English    ");
document.write("<tr><td>  " + "&nbsp" + "&nbsp" + "&nbsp" + " 100");
document.write("<tr><td>  " + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp"  + subject1 );
document.write("<tr><td>" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + (subject1 / 100)*100 +"%" );

document.write("<p><tr><td> urdu");
document.write("<tr><td>  " + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + " 100");
document.write("<tr><td>  " + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp"  + subject2 );
document.write("<tr><td>" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" +  (subject2 / 100)*100 +"%" );


document.write("<p><tr><td> Math");
document.write("<tr><td>  " + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + " 100");
document.write("<tr><td>  " + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp"  + subject3 );
document.write("<tr><td>" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + (subject3 / 100)*100 +"%" );


document.write("<p>" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "300" );
document.write("&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + total1);
document.write("&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + (total1/300)*100 + "%");









