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

//////////////////////////////////ELEVEN/////////////////////////////////////////

// function sum_sq(array) {
//     var result = 0;
//     array.forEach(function (el) {
//         result += Math.pow(el, 2);
//     });
//     return result;
// }
//
// console.log(sum_sq([0,1,2,3,4]));

/////////////////////////////////////TWELVE////////////////////////////////////////////////////

// function sumProduct(arr) {
//     var sum = 0;
//     var product = 1;
//     arr.forEach(function (el) {
//         sum += el;
//         product *= el;
//     });
//     return `Sum: ${sum} Product: ${product}`;
// }
//
// var array = [1, 2, 3, 4, 5, 6];
//
//
// console.log(sumProduct(array));

//////////////////////////////////////THIRTEEN///////////////////////////////////////////

// var arr = [];
//
// function createField() {
//     var body = document.body;
//     var input = document.createElement('input');
//     var addButton = document.createElement('button');
//     var displayButton = document.createElement('button');
//     var button1Text = document.createTextNode('Add');
//     var button2Text = document.createTextNode('Display');
//
//     addButton.appendChild(button1Text);
//     displayButton.appendChild(button2Text);
//     addButton.setAttribute('id', 'add');
//     displayButton.setAttribute('id', 'display');
//     input.setAttribute('id', 'input');
//
//     body.appendChild(input);
//     body.appendChild(addButton);
//     body.appendChild(displayButton);
// }
//
// function list() {
//     document.getElementById('add').onclick = function () {
//         var text = document.getElementById('input').value;
//         arr.push(text);
//         console.log(arr);
//     };
//
//     document.getElementById('display').onclick = function () {
//         var ul = document.createElement('ul');
//         document.body.appendChild(ul);
//
//         for (var i = 0; i < arr.length; i++){
//             var li = document.createElement('li');
//             ul.appendChild(li);
//             ul.lastChild.innerHTML = `Element ${i} = ${arr[i]}`;
//         }
//     }
// }
//
// createField();
// list();

//////////////////////////////////////FOURTEEN//////////////////////////////////////////////

// function removeDuplicates(num) {
//     var arr = [];
//     var obj = {};
//
//     num.forEach(function (el) {
//         obj[el] = 1;
//     });
//
//     for (var key in obj) {
//         arr.push(key)
//     }
//
//     return arr;
// }
//
// var Mynum = [1, 2, 2, 4, 5, 4, 7, 8, 7, 3, 6];
// var result = removeDuplicates(Mynum);
// console.log(Mynum);
// console.log(result);

/////////////////////////////////FIFTEEN//////////////////////////////////////////////////////

// o = ["th","st","nd","rd"];
// var color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
//
// function coloursInOrder(arr) {
//     console.log(`1${o[1]} choice is ${arr[0]}`);
//     console.log(`2${o[2]} choice is ${arr[1]}`);
//     console.log(`3${o[3]} choice is ${arr[2]}`);
//     for (var i = 3; i < arr.length; i++){
//         console.log(`${i + 1}${o[0]} choice is ${arr[i]}`);
//     }
// }
//
// coloursInOrder(color);

/////////////////////////////////////SIXTEEN////////////////////////////////////////////////////////

// function leap_year_range(start, end) {
//     var arrOfYears = [];
//     for (var i = start; i <= end; i++){
//         if (testYear(i)){
//             arrOfYears.push(i);
//         }
//
//     }
//     return arrOfYears;
// }
//
// function testYear(year) {
//     if ((year % 4 === 0 && year % 100 !== 0) || (year % 100 === 0 && year % 400 === 0)) {
//         return true;
//     }
// }
//
// console.log(leap_year_range(2000,2012));

//////////////////////////////////////////SEVENTEEN////////////////////////////////////////

// function shuffle(arr) {
//     var helper;
//     var randomIndex = Math.floor(Math.random() * (arr.length - 1));
//
//     for (var i = 0; i < arr.length; i++){
//         helper = arr[i];
//         arr[i] = arr[randomIndex];
//         arr[randomIndex] = helper;
//     }
//     return arr;
// }
// var myArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(shuffle(myArray));

/////////////////////////////////////////EIGHTEEN//////////////////////////////////////////////////////

// function binarySearch(arr, el) {
//     return arr.indexOf(el);
// }
//
// var items = [1, 2, 3, 4, 5, 7, 8, 9];
//
// console.log(binarySearch(items, 1)); //0
// console.log(binarySearch(items, 5)); //4

//////////////////////////////////NINETEEN/////////////////////////////////////////////////

// function sunOfArr(arr1, arr2) {
//     var result = [];
//     var max = Math.max(arr1.length, arr2.length);
//
//     for (var i = 0; i < max; i++){
//         if (arr1[i] != null && arr2[i] != null){
//             result.push(arr1[i] + arr2[i]);
//         }
//     }
//
//     if (result.length < arr1.length){
//         result = result.concat(arr1.slice(result.length, arr1.length));
//     }else if (result.length < arr2.length){
//         result = result.concat(arr2.slice(result.length, arr2.length));
//     }
//     return result;
// }
//
// array1 = [1,0,2,3,4];
// array2 = [3,5,6,7,8,13];
//
// console.log(sunOfArr(array1, array2));

//////////////////////////////////////TWENTY//////////////////////////////////////////////////

// function find_duplicate_in_array(array) {
//
//     var arr = [];
//     var obj = {};
//
//     array.forEach(function (el) {
//         obj[el] = 1;
//     });
//
//     for (var key in obj) {
//         arr.push(key)
//     }
//
//     return arr;
// }
// var arr = [1, 2, -2, 4, 5, 4, 7, 8, 7, 7, 71, 3, 6];
// console.log(find_duplicate_in_array(arr));

///////////////////////////////////////TWENTY ONE////////////////////////////////////////////

// function diveInArray(arr, flag, result) {
//     if (!result){
//         result = [];
//     }
//
//     if (flag) {
//         return result.concat(...arr);
//     }
//
//     for (var i = 0; i < arr.length; i++){
//         if (Array.isArray(arr[i])){
//             diveInArray(arr[i], flag, result);
//         }else {
//             result.push(arr[i]);
//         }
//     }
//     return result;
// }
//
// console.log(diveInArray([1, [2], [3, [[4]]],[5,6]]));
//
// console.log(diveInArray([1, [2], [3, [[4]]],[5,6]], true));

///////////////////////////////////tWENTY TWO//////////////////////////////////

// /*
// function union(arr1, arr2) {
//     var obj = {};
//     var result = [];
//
//     for (var i = 0; i < arr1.length; i++){
//         obj[arr1[i]] = 1;
//     }
//
//     for (var i = 0; i < arr2.length; i++){
//         obj[arr2[i]] = 1;
//     }
//
//     for (var key in obj){
//         result.push(+key);
//     }
//     return result;
//
// }
//
// console.log(union([1, 2, 3], [100, 2, 1, 10]));*/

///////////////////////////////////////////TWENTY THREE//////////////////////////////////

// function diveInArray(arr, flag, result) {
//     if (!result){
//         result = [];
//     }
//
//     if (flag) {
//         return result.concat(...arr);
//     }
//
//     for (var i = 0; i < arr.length; i++){
//         if (Array.isArray(arr[i])){
//             diveInArray(arr[i], flag, result);
//         }else {
//             result.push(arr[i]);
//         }
//     }
//     return result;
// }
//
// function difference(arr1, arr2) {
//     var result = [];
//
//     var num1 = diveInArray(arr1, true);
//     var num2 = diveInArray(arr2, true);
//
//     var obj = {};
//     for (var i = 0; i < num1.length; i++){
//         obj[num1[i]] = false;
//     }
//     for (i = 0; i < num2.length; i++){
//         if (obj[num2[i]] === false) {
//             delete obj[num2[i]];
//         }
//         else {
//             obj[num2[i]] = true;
//         }
//     }
//
//     for (var key in obj)
//         result.push(key);
//     return result;
// }
//
// console.log(difference([1, 2, 3], [100, 2, 1, 10])); // ["3", "10", "100"]
// console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]])); // ["6"]
// console.log(difference([1, 2, 3], [100, 2, 1, 10])); // ["3", "10", "100"]

//////////////////////////////////////////TWENTY FOUR//////////////////////////////////////

// function clean(arr) {
//     var index = 0,
//         index2 = 0,
//         result = [];
//
//     while (index++ < arr.length) {
//         if (arr[index]) {
//             result[index2++] = arr[index];
//         }
//     }
//
//     return result;
// }
//
// var test = [NaN, 0, 15, false, -22, '', undefined, 47, null];
//
// console.log(clean(test));

/////////////////////////////////////TWENTY FIVE//////////////////////////////////////////

// function sortBooks(a, b) {
//     if (a.title < b.title)
//         return -1;
//     if (a.title > b.title)
//         return 1;
//     return 0;
// }
//
// var library = [
//     { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
//     { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
//     { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
// ];
//
// console.log(library.sort(sortBooks));

/////////////////////////////////////////////TWENTY SIX//////////////////////////////////////////////////////////////

// function twoSum(numbers, target) {
//     var result = [];
//     for (var i = 0; i < numbers.length; i++){
//         for (var j = 1; j < numbers.length; j++){
//             if (numbers[i] + numbers[j] == target){
//                 result.push(numbers.indexOf(numbers[i]));
//                 result.push(numbers.indexOf(numbers[j]));
//                 return result;
//             }
//         }
//     }
//     return undefined;
// }
// console.log(twoSum([10,20,10,40,50,60,70],50));

////////////////////////////////////////////////TWENTY SEVEN///////////////////////////////////////////////////////////

// function clean(arr) {
//     var index = 0,
//         index2 = 0,
//         result = [];
//
//     while (index++ < arr.length) {
//         if (arr[index]) {
//             result[index2++] = arr[index];
//         }
//     }
//
//     return result;
// }
//
// var test = [NaN, 0, 15, false, -22, '', undefined, 47, null];
//
// console.log(clean(test));

/////////////////////////////////////////////////////TWENTY EIGHT///////////////////////////////////////////////////

// function maxCommonString(arr) {
//     var word1 = arr[0].length;
//     var word2 = arr[1].length;
//     var max = Math.max(word1, word2);
//     var result = [];
//     for (var i = 0; i < max; i++){
//         if (arr[0][i] === arr[1][i]) {
//             result.push(arr[0][i]);
//         }else if(arr[0][i] != arr[1][i] && result.length > 0){
//             return result.join('');
//         }
//     }
//     return result.join('');
// }
//
// console.log(maxCommonString(['go', 'google']));

/////////////////////////////////////////////////////////TWENTY NINE//////////////////////////////////////////////////

// function num_string_range(start, end, step) {
//     var result = [];
//
//     if (end < start) {
//         step = -step;
//     }
//
//     if (typeof start == "number") {
//         while (step > 0 ? end >= start : end <= start) {
//             result.push(start);
//             start += step;
//         }
//     }else if (typeof start == "string") {
//         start = start.charCodeAt(0);
//         end = end.charCodeAt(0);
//
//         while (step > 0 ? end >= start : end <= start) {
//             result.push(String.fromCharCode(start));
//             start += step;
//         }
//     }
//
//     return result;
// }
// console.log(num_string_range('a', "z", 2));
// console.log(num_string_range("Z", "A", 2));
// console.log(num_string_range(0, -5, 1));
// console.log(num_string_range(0, 25, 5));
// console.log(num_string_range(20, 5, 5));

////////////////////////////////////////////////////THIRTY//////////////////////////////////////////////////

// function merge_array(arr1, arr2) {
//     var newArr1 = arr1.slice();
//     arr1.forEach(function (el) {
//         for (var i = 0; i < arr2.length; i++){
//             if (el === arr2[i]) {
//                 var index = newArr1.indexOf(el);
//                 newArr1.splice(index, 1);
//             }
//         }
//     });
//     return newArr1.concat(arr2);
// }
//
// var array1 = [1, 2, 3];
// var array2 = [2, 30, 1];
// console.log(merge_array(array1, array2));

////////////////////////////////////////////////THIRTY ONE//////////////////////////////////////////////////////////

// function remove_array_element(arr, el) {
//     var index = arr.indexOf(el);
//     arr.splice(index, 1);
//     return arr;
// }
//
// console.log(remove_array_element([2, 5, 9, 6], 5));

/////////////////////////////////////////////////THIRTY TWO//////////////////////////////////////////////////////////

// function hasElement(arr, el) {
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] == el) {
//             return true;
//         }else if (i == arr.length - 1){
//             return false;
//         }
//     }
// }
//
// console.log(hasElement([2, 5, 9, 6], 5));

///////////////////////////////////////////////THIRTY THREE////////////////////////////////////////////////////////////

// function empty(arr) {
//     var result = arr.slice();
//     result.splice(0, result.length);
//     return result;
// }
//
// arr = [1, 3, 6, 3, -5];
// console.log(empty(arr));
// console.log(arr);

//////////////////////////////////////////////////THIRTY FOUR/////////////////////////////////////////////////////////

function nthlargest(arr, el) {
    var array = arr.slice(0, el);
    return Math.max(...array);
}

console.log(nthlargest([ 43, 56, 23, 89, 88, 90, 99, 652], 4));

//////////////////////////////////////////////////THIRTY FIVE////////////////////////////////////////////////////

// function getRandom(arr) {
//     var index = Math.floor(Math.random() * arr.length);
//     return arr[index];
// }
//
// var items = [254, 45, 212, 365, 2543];
// console.log(getRandom(items));

