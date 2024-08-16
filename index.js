// 1. Write a JavaScript function that takes a number as input. If the number is even, the function should return "Even." If the number is odd, the function should return "Odd."

function evenOrOdd(num) {
    if (num % 2 === 0) {
        return "Odd";
    } else {
        return "Even";
    }
};

// Result: "Odd"
console.log(evenOrOdd(10)); 
console.log(evenOrOdd(2)); 
// Result: "Even" 
console.log(evenOrOdd(3));  
