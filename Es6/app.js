// ////////////////////////CLASSES/////////////////////
//
// class Point {
//     constructor(x, y){
//         this.x = x;
//         this.y = y;
//     }
//
//     plus(point){
//         return {
//             x: this.x + point.x,
//             y: this.y + point.y
//         }
//     }
// }
//
// console.log(new Point(1, 2).plus(new Point(2, 1)));
//
// //////////////////////////////////////////////////////////////////
//
// class Speaker {
//     constructor(name, verb){
//         this.name = name;
//         this.verb = verb || 'says'
//     }
//     speak(text){
//         console.log(`${this.name} ${this.verb} '${text}'`);
//     }
// }
//
// class Shouter extends Speaker{
//     constructor(name){
//         super(name, "shouts");
//     }
//     speak(text){
//         super.speak(text.toUpperCase());
//     }
// }
//
// new Shouter("Dr. Loudmouth").speak("hello there");
// new Speaker("Dr. Loudmouth").speak("hello there");
//
// ////////////////////////////////////////////////////////////////////
//
// class Speaker2 {
//     constructor(name, verb){
//         this.name = name;
//         this._verb = verb || 'says'
//     }
//
//     get verb(){
//         return this._verb || 'says';
//     }
//
//     set verb(value){
//         this._verb = value;
//     }
//
//     speak(text){
//         console.log(`${this.name} ${this.verb} '${text}'`);
//     }
// }
//
// class Shouter2 extends Speaker2{
//     constructor(name){
//         super(name, "shouts");
//     }
//     speak(text){
//         super.speak(text.toUpperCase());
//     }
// }
//
// ///////////////////////////////////////OBJECT LITERALS//////////////////////////////////
//
// class Point {
//     constructor(x, y) {
//         this.x = x;
//         this.y = y;
//     }
//     add(other) {
//         return new Point(this.x + other.x, this.y + other.y)
//     }
// }
//
// var test = new Point(2, 3);
// console.log(test);
//
// var fakePoint = {
//
//     constructor: function (x, y) {
//         this.x = x;
//         this.y = y;
//     },
//     add: function (other) {
//         return function () {
//             return {0: sumX, 1: sumY}
//         }
//     }
// };
// console.log(fakePoint);
//
// console.log(fakePoint instanceof Point);
//
// /////////////////////////////////////////////////////////////////////////
//
// function startNode(type, value, options) {
//     return {
//         type,
//         value,
//         [options.sourceProperty]: options.sourceValue
//     }
// }
//
// console.log(startNode("Identifier", "foo", {
//     sourceProperty: "src",
//     sourceValue: "bar.js"
// }));

// → {type: "Identifier",
//    value: "foo",
//    src: "bar.js"}

////////////////////////////////////////////////////////////////////////////////////

// var ids = {
//     next: 0,
//     get(){
//         return this.next++;
//     }
// };
//
// console.log(ids.get());
// // → 0
// console.log(ids.get());
// // → 1

//////////////////////////////////////BLOCK SCOPE///////////////////////////////

// var callbacks = [];
// for (let i = 0; i < 10; i++) {
//     callbacks.push(function() { console.log(i) });
// }
//
// callbacks[2]();

//////////////////////////////////////////////////////////////////////////////

// const account = {
//     username: "marijn",
//     password: "xyzzy"
// };
//
// Object.defineProperties(account, {
//     username: {
//         value: "marijn",
//         configurable: false,
//         writable: false
//     },
//     password: {
//         value: "xyzzy",
//         configurable: false,
//         writable: false
//     }
// });
//
// account.password = "s3cret"; // (*much* more secure)
//
// console.log(account.password); // doesn't change

//////////////////////////////////////////////////////////////

// class Something {}
//
// let s = new Something();  // swapped two lines, because class doesn't hoist

////////////////////////////////ARROW FUNCTIONS///////////////////////////////////



// const inventory = [
//     {type:   "machine", value: 5000},
//     {type:   "machine", value:  650},
//     {type:      "duck", value:   10},
//     {type: "furniture", value: 1200},
//     {type:   "machine", value:   77}
// ];

// let totalMachineValue = arr => {
//     arr = inventory;
//     let result = 0;
//     for (let val of arr) {
//         result += val.value;
//     }
//     return result;
// };
//
// console.log(totalMachineValue());

///////////////////////////////////////////////////////////////


// class SortedArray {        // takes numbers and then returns sorted array
//     constructor () {
//         this._content = [];
//     }
//     set content (el) {
//         this._content.push(el);
//     }
//     get content () {
//         let compare = (a, b) => {
//             return a - b;
//         };
//
//         return this._content.sort(compare);
//     }
//
// }
//
// var sorted = new SortedArray();
// sorted.content = 5;
// sorted.content = 3;
// sorted.content = 2;
// sorted.content = 4;
// sorted.content = 1;
//
// console.log(sorted.content);


///////////////////////////////////////DESTRUCTURING///////////////////////////////////////////////

// function go(options) {
//     let {
//         speed = 4,
//         enable = {hyperdrive: false,
//                 frobnifier: true}
//     } = options || {};
//     console.log("speed=", speed,
//         "hyperdrive:", enable.hyperdrive,
//         "frobnifier:", enable.frobnifier)
// }
//
// go({speed: 5});

/////////////////////////////////////////////////////////////////////////////////////

// function lastIndexOf(arr, elt, start = 2) {
//     for (let i = start - 1; i >= 0; i--)
//         if (arr[i] === elt) return i;
//     return -1
// }
//
// console.log(lastIndexOf([1, 2, 1, 2], 2));

/////////////////////////////////////////////////////////////////////////////////////

// function detectCollision(objects, point) {
//     return objects.find(function (object) {
//         if (point.x >= object.x && point.x <= object.x + object.width &&
//         point.y >= object.y && point.y <= object.y + object.height) return true;
//     });
// }
//
// const myObjects = [
//     {x:  10, y: 20, width: 30, height: 30},
//     {x: -40, y: 20, width: 30, height: 30},
//     {x:   0, y:  0, width: 10, height:  5}
// ];
//
// console.log(detectCollision(myObjects, {x: 4, y: 2}));

/////////////////////////////////////SPREAD///////////////////////////////////////////////////////

// function replace(array, from, to, elements) {
//     array.splice(from, to - from, ...elements)
// }
//
// let testArray = [1, 2, 100, 100, 6];
// replace(testArray, 2, 4, [3, 4, 5]);
// console.log(testArray);
//
// function copyReplace(array, from, to, elements) {
//     var arr = array.slice();
//     arr.splice(from, to - from, ...elements);
//     return arr;
//     //return array.slice().splice(from, to - from, ...elements);
// }
//
// console.log(copyReplace([1, 2, 100, 200, 6], 2, 4, [3, 4, 5]));
//
// let birdsSeen = [];
// function recordBirds(time, ...birds) {
//     birdsSeen.push({time, birds: birds})
// }
//
// recordBirds(new Date, "sparrow", "robin", "pterodactyl");
// console.log(birdsSeen);

//////////////////////////////////////////////////////////////////////////////////