//Write a program to find nth number of fibonacci series .

var n = prompt("Enter any range of numbers");
n=parseInt(n);
var a= 0;
var b= 1;
console.log(a);
console.log(b);
var c = 2;
    while(c<n){
    var c=a+b;
        console.log(c);
    a=b;
    b=c;
    c = c+1;
    }
