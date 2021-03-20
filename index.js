function add (num1, num2){
   return num1+num2;
}
function subtract (num1, num2){
    return num1-num2;
}
function multiply (num1,num2){
    return num1*num2;
}
function divide (num1,num2){
    return num1/num2;
}
function increment (num1){
    return ++num1;
}
function decrement (num1){
    return --num1;
}
function makeInt(string){
    return parseInt(string,10);
}
function preserveDecimal(string){
    return parseFloat(string, '2.222'); // 2.222
}