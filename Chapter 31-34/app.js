//question1

var datee = new Date();
document.write(datee);

var month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
var namee = month[datee.getMonth()];
document.write("<p>" +namee)


var day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ]
var dayy = day[datee.getDay()];
document.write("<p>" + dayy)

if(dayy == "Sunday" || dayy == "Saturday" ){
    document.write("<p> It is Fun day")
}
else{
    document.write("<p> It is not a Fun day")
  
}

var time =datee.getHours();



if(time > 12){
    document.write("<p> It is PM"); 
}
else{
    document.write("<p> It is AM"); 

}

var laterdate = new Date('12-31-2020 00:00:00');
document.write("<p> Later date: " + laterdate)


var ram = new Date("6-18-2015"); //Thu Jun 18 2015 00:00:00 GMT+0500 (Pakistan Standard Time)
var now = new Date();           // Thu Jul 14 2022 16:32:32 GMT+0500 (Pakistan Standard Time)


var cal = now - ram
document.write( "<p>" + Math.floor(cal/ (1000*60*60*24))+ " days have passed since 1st Ramadan, 2015 ")


var due = new Date("12-05-2015 22:50:16")
var dueNow = new Date();

var ne = dueNow - due
document.write( "<p>" + " On reference date " + due+ " " + Math.floor(ne/ (1000*60))+ " second has been passed since beginning of 2015")

var hour1 = new Date("12-05-2015 23:08:16");
var hour2 = new Date("12-05-2015 22:08:16");

var call = hour1 - hour2;
document.write("<p> Current date: " + hour1 + " " + Math.ceil(call/ (1000*60*60*24)) + " Hour ago, it was " + hour2 )


var hour11 = new Date("12-05-2015 23:09:37");
var hour22 = new Date("12-05-1915 22:09:37");

var call = hour11 - hour22;
document.write("<p> Current date: " + hour1 + " " + Math.floor(call/ (1000*60*60*24*365  )) + " year back, it was " + hour2 )