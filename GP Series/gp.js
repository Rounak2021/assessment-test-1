//Write a program to find nth number of geometric progression(GP).


var a = prompt("Enter the starting number"); 
a=parseInt(a);
var r = prompt("Enter the difference"); 
r=parseInt(r);
var n = prompt("Enter the range of the number");
n=parseInt(n);

var curr_term;
    for (var i = 0; i < n; i++) {
        curr_term = a * Math.pow(r, i);
        console.log(curr_term + " ");
    }