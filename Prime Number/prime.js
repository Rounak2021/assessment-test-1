//Write a program to take input from user and check whether that is prime or not. 

var num = prompt("Enter any number");
var prime= true;
    
    for (var i = 2; i < num; i++) {
        if (num % i == 0) {   
            prime= false;
            break;
        }
    }
    if (prime){
        alert("It is a Prime number");
    } else {
        alert("It is not a prime number");
    }


  