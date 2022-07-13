//Question1
var arr =[];

//Question2
var studentName = ["Altaf", "Karim", "Saad"];

//question3 

var str = [22, 33, 55, 66];

//question4

var bool = ["true", "flase"];

//question5

var mix = ["altaf", 55, "true"]


//question6

var qua = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.phil", "phD"]

document.write("Qualification")
document.write("<p>" + "1) " +qua[0]);
document.write("<p>" + "2) " +qua[1]);
document.write("<p>" + "3) " +qua[2]);
document.write("<p>" + "4) " +qua[3]);
document.write("<p>" + "5) " +qua[4]);
document.write("<p>" + "6) " +qua[5]);
document.write("<p>" + "7) " +qua[6]);
document.write("<p>" + "8) " +qua[7]);


//question7

var stu = ["karim", "Altaf", "Arsh"]
var scr = ["320", "230", "480"]
var totul = 500;
document.write("<p>" + "Score of " + stu[0] + " is " + scr[0] + " percentage: " + (scr[0]/totul)*100 +"%");
document.write("<p>" + "Score of " + stu[1] + " is " + scr[1] + " percentage: " + (scr[1]/totul)*100 +"%");
document.write("<p>" + "Score of " + stu[2] + " is " + scr[2] + " percentage: " + (scr[2]/totul)*100 +"%");


//question7

var col = [" yellow ", " green ", " blue "];
// var userr=prompt("Which color you want to add in last");
//  var userrr=prompt("Which color you want to add in first");
// var usee=prompt("At which index you want to add a color");
// var use=prompt("At which color");




// col.unshift(userrr)
// col.push(userr)
// col.unshift(col)
// col.pop(col)
// col[usee]= use;
// document.write("<p>" + col);



//question8

var scr = [320, 230, 480, 120]

scr.sort();
document.write("<p>" + scr)


//question9

var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
document.write(" <p> Cities List");
document.write("<p>" + cities);


cities.slice(2,4)

var selectedCities = cities.slice(2,4);
document.write("<p> Selected Cities");
document.write("<p>" + selectedCities);


//question10

var nme = ["This", "is", "my", "cat"];
document.write(" <p> Arrar");
document.write("<p>" + nme);




var selectedCities = nme.join(" ");
document.write("<p> String");
document.write("<p>" + selectedCities);


//question11

var nmee = ["Keyboard", "mouse", "printer", "monitor"];
document.write(" <p> Devices");
document.write("<p>" + nmee);



document.write("<p> Out: ");
document.write("<p>" + nmee[0]);
document.write("<p> Out: ");
document.write("<p>" + nmee[1]);
document.write("<p> Out: ");
document.write("<p>" + nmee[2]);
document.write("<p> Out: ");
document.write("<p>" + nmee[3]);


//question12

var nmee = ["Keyboard", "mouse", "printer", "monitor"];
document.write(" <p> Devices");
document.write("<p>" + nmee);



document.write("<p> Out: ");
document.write("<p>" + nmee[3]);
document.write("<p> Out: ");
document.write("<p>" + nmee[2]);
document.write("<p> Out: ");
document.write("<p>" + nmee[1]);
document.write("<p> Out: ");
document.write("<p>" + nmee[0]);


var com = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"]

document.write(Optn(com))