    var a = prompt("Enter the Starting Number");
    var b = prompt("Enter the second number");
    var N = prompt("Enter the num value");
    var apNth = (first, second, num) => { //Here apNth is a function for calculating the AP series
       var diff = second - first;
       var fact = (num - 1) * diff;
       var term = first + fact;
       return term;
    };
    console.log(apNth(a,b,N));