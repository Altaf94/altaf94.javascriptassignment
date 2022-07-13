//question1

var arr = [[],[],[]];

var arrr = [[0,1,2,3],[1,0,1,2],[2,1,0,1]];

document.write(arrr[0]);
document.write("<p>" + arrr[1]);
document.write("<p>" + arrr[2]);

//question2

for(i = 1; i <= 10; i++ ){
    document.write("<p>" + i)
}

var user1 =prompt("which table you want")
var user2=prompt("Tell us the limit")

for(i = 1; i <= user2; i++){
    document.write("<p>" + user1 + "X" + i + "=" + user1  * i)
}

var fruit = ["apple", "banana", "mango", "orange", "strawberry"]

for(i = 0; i < fruit.length; i++){
    document.write("<p>" + fruit[i]);
    

}

var fruitt = ["apple", "banana", "mango", "orange", "strawberry"]

for(i = 0; i < fruitt.length; i++){
    document.write(" <p> Element on index " + i + " is " + fruit[i]);
    

}

//question3

var count = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

document.write("<p>" + count);
document.write("<p>" + count.reverse());


//question4

var inputt = ["cake", "apple pie", "cookie", "chips", "patties"]


var userInput =prompt("welcome to bakery what you want to order")
userInput = userInput.toLowerCase();

for(i = 0; i < inputt.length; i++){
    if(userInput == inputt[i]){
        document.write( "<p>" + userInput +" is available at index " + i + " in our bakery ")
        break;
    }
    else{
        document.write(" <p> We are sorry. " + userInput + " is not available in our bakery ");
        break;
    }
    
}

//question5

var lar = [24, 53, 78, 91, 12];

for(i=0; i<lar.length; i++){
   document.write("<p>" + Math.max.apply(null, lar)) ;
   break;
}

var lar = [24, 53, 78, 91, 12];

for(i=0; i<lar.length; i++){
   document.write("<p>" + Math.min.apply(null, lar) + "<p>");
   break;
}

for(i=1; i <= 100; i++){
    if( i % 5 == 0){
        document.write("\n" + i)
    }
}
