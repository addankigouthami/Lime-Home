class GenericFunctions {
    calculateResult(value1, value2, operator) {
       if (typeof value1 !== 'number' || typeof value2 !== 'number' ) {
       return 'NaN';
     }
     if (operator === '+') {
       return value1 + value2;
     } else if (operator === '-') {
       return value1 - value2;
     } else if (operator === '*') {
       return value1 * value2;
     } else if (operator === '/') {
       return value1 / value2;
     } else if (operator === '%') {
       return value1 % value2;
     } else {
       return 'Invalid operator';
     }
   }
   
   getRandomNumbersofLength(length) {
       var result = "";
       const characters = "123456789";
       const charactersLength = characters.length;
       for (var i = 0; i < length; i++) {
         result += characters.charAt(Math.floor(Math.random() * charactersLength));
       }
       return result;
     }
   }
   export default GenericFunctions