//////////////////////////////////ONE//////////////////////
// function is_array(input) {
//    return Array.isArray(input);
// }
//
// console.log(is_array('w3resource'));
// console.log(is_array([1, 2, 4, 0]));
//
// /////////////////////////////////TWO/////////////////////////////////////////
//
// function array_Clone(arr) {
//     return arr.slice();
// }
//
// console.log(array_Clone([1, 2, 4, 0]));
// console.log(array_Clone([1, 2, [4, 0]]));

/////////////////////////////////////THREE/////////////////////////////////

// function first(arr, n) {
//     if (arr == null)
//         return undefined;
//     else if (n == null)
//         return arr[0];
//     else if (n < 0)
//         return [];
//     return arr.slice(0, n);
// }
//
// console.log(first([7, 9, 0, -2]));
// console.log(first([],3));
// console.log(first([7, 9, 0, -2],3));
// console.log(first([7, 9, 0, -2],6));
// console.log(first([7, 9, 0, -2],-3));

//////////////////////////////////////FOUR//////////////////////////////////////

// function last(arr, n) {
//     if (n == null) {
//         return arr[arr.length - 1];
//     }else if (arr == null) {
//         return undefined;
//     }
//     return arr.length - n > 0 ? arr.slice(arr.length - n) : arr.slice(0);
// }
//
// console.log(last([7, 9, 0, -2]));
// console.log(last([7, 9, 0, -2],3));
// console.log(last([7, 9, 0, -2],6));

///////////////////////////////////////FIVE/////////////////////////////////////

// function intoString(arr, separator) {
//    return arr.join(separator)
// }
//
// myColor = ["Red", "Green", "White", "Black"];
// console.log(intoString(myColor, '+'));

/////////////////////////////////////////SIX//////////////////////////////

// function numberDash(n) {
//     var result = '';
//     for (var i = 0; i < n.length; i++){
//         if (Number(n.charAt(i)) % 2 == 0 && Number(n.charAt(i - 1) % 2 == 0) && i != 0){
//             result += "-" + n.charAt(i);
//         }else {
//             result += n.charAt(i);
//         }
//     }
//     return result;
// }
//
// console.log(numberDash('025468'));

///////////////////////////////////SEVEN///////////////////////////////////

// var arr1 = [ 3, 8, 7, 6, 5, -4, 3, 2, 1 ];
//
// console.log(arr1.sort());

///////////////////////////////EIGHT/////////////////////////////////////////

// function mostFrequent(arr) {
//     var counter = 0;
//     var result;
//     var obj = {};
//     for (var i = 0; i < arr.length; i++){
//         if (!(arr[i] in obj)) {
//             obj[arr[i]] = 1;
//         }else if(arr[i] in obj) {
//             obj[arr[i]] = obj[arr[i]] + 1;
//         }
//     }
//     var arrOfVal = [];
//     for (var key in obj){
//         arrOfVal.push(obj[key]);
//     }
//     for (var key1 in obj){
//         if (obj[key1] === Math.max(...arrOfVal)){
//             counter = obj[key1];
//             result = key1;
//         }
//     }
//     return `${result} (${counter} times)`;
// }
//
// var arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// console.log(mostFrequent(arr1));

//////////////////////////////////NINE///////////////////////////////////////

// function swapCase(str) {
//     var result = '';
//     for (var i = 0; i < str.length; i++){
//         if (str[i].toUpperCase() == str[i]){
//             result += str[i].toLowerCase();
//         }else {
//             result += str[i].toUpperCase();
//         }
//     }
//     return result;
// }
//
// console.log(swapCase('The Quick Brown Fox'));

/////////////////////////////////////////TEN//////////////////////////////////

// function printer(arr) {
//     var counter = 0;
//     for (var i = 0; i < arr.length; i++){
//         console.log(`row ${counter}`);
//         counter++;
//         for (var j = 0; j < arr[i].length; j++){
//             console.log(arr[i][j]);
//         }
//     }
// }
//
// var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
//
// printer(a);

///////////////////////////////////////////////////////////////////////////