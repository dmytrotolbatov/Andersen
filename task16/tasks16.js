
function sequence(start, step) {
    start = start || 0;
    step = step || 1;
    start = start - step;
    return function() {
        return start = start + step;
    }
}

function take(fn, count) {
    var arr = [];
    for(var i = 0; i < count; i++){
        arr.push(fn());
    }
    return arr;
}

function map(fn, array) {
    var arr = array.slice();
    for(var i = 0; i < array.length; i++){
        arr.push( fn(arr[i]) );
    }
    arr.splice(0, array.length);
    return arr;
}

function fmap(a, gen) {
    return function () {
        return a(gen.apply(null, arguments));
    }
}

function partial(arg) {
    var newArguments = Array.prototype.slice.call(arguments, 1); // make array of arguments
    return function(){
        return arg.apply(null, newArguments.concat(Array.prototype.slice.call(arguments, 0)));
    }
}

function partialAny(arg) {
    var rootArguments = Array.prototype.slice.call(arguments, 1);
    return function () {
        var newArguments = arguments;
        var result = [];
        var j = 0;

        for (var i = 0; i < rootArguments.length; i++){
            var outerArg = rootArguments[i];
            if (typeof outerArg === 'undefined') {
                var innerArg = newArguments[j++];
                result.push(innerArg);
            } else {
                result.push(outerArg);
            }
        }

        while (j < newArguments.length) {
            innerArg = newArguments[j++];
            result.push(innerArg);
        }
        return arg.apply(this, result);
    };
}

function bind(fn, context) {
    return function () {
        return fn.apply(context, arguments);
    }
}

function pluck(objects, fieldName) {
    var arr = objects.slice();
    var result = [];
    for (var i = 0; i < arr.length; i++){
        for (key in arr[i]){
            if (key == fieldName){
                result.push(arr[i][key]);
            }
        }
    }
    return result;
}

function filter (arr, fn) {
    var newArray = arr.slice();
    var result = [];

    for (var i = 0; i < newArray.length; i++){
        if (fn.call(null, newArray[i]) == true){
            result.push(newArray[i]);
        }
    }

    return result;
}

function count (obj) {
    var counter = 0;
    for (key in obj){
        if (obj.hasOwnProperty(key)){
            counter++;
        }
    }
    return counter;
}

function task11(n) {
    var jsonFile = new XMLHttpRequest();
    jsonFile.open('GET', 'https://gist.githubusercontent.com/fayvlad/f89533efa1376468fcfd61f7ec3f544e/raw/e587cbbb2229c2e81f2d77a4be119f80dd52f024/task%2520%252311%2520js', false);
    jsonFile.send();
    var data = JSON.parse(jsonFile.responseText);
    //console.log(data);
    var result = [];
    var sortedResult = [];
    var allNumbers = [];
    var largestNumbers = [];

    for (var i = 0; i < data.length; i++){
        allNumbers.push(data[i].population);
    }
    //console.log(allNumbers);


    while (largestNumbers.length <= n){
        var maxNumber = Math.max.apply(null, allNumbers);
        largestNumbers.push( maxNumber );
        var index = allNumbers.indexOf(maxNumber);
        allNumbers.splice(index, 1);
    }
    //console.log(largestNumbers);

    for (var i = 0; i < data.length; i++){
        for (var j = 0; j < largestNumbers.length; j++){
            if (data[i].population == largestNumbers[j]){
                result.push(data[i]);
            }
        }
    }

    //result.sort(function (a, b){return b - a});
    console.log(result);

    /*for (var i = 0; i < largestNumbers.length; i++){
        for (var j = 0; j < largestNumbers.length; j++){
            if(largestNumbers[j] == result[i].population){
                sortedResult.push(result[i]);
            }
        }

    }*/
    //console.log(sortedResult);

    /*while (sortedResult.length <= result.length){

    }*/
    /*for (var i = 0; i < data.length; i++){
        if (data[i].population > testNumber){
            result.push(data[i]);
            testNumber = data[i].population;
        }
    }
    console.log(result);*/

    /*return function () {
        for (var i = 0; i < data.length; i++){
            if (data[i].population > data[i+1].population){
                result.push(data[i]);
            }
        }
        //Math.max.apply(null, data);
        console.log(result);
    };*/


}

function Hamburger(size, stuffing) {
    var price = 0;
    var calories = 0;
    var toppings = [];

    /*if (size == 'Hamburger.SIZE_SMALL'){
        price += 50;
        calories += 20;
    }*/

    Hamburger.SIZE_SMALL = (function () {
        if (size === Hamburger.SIZE_SMALL){
            price += 50;
            calories += 20;
        }
    })();
    Hamburger.SIZE_LARGE = (function () {
        if (size === Hamburger.SIZE_LARGE){
            price += 100;
            calories += 40;
        }

    })();
    Hamburger.STUFFING_CHEESE = (function () {
        if (stuffing == Hamburger.STUFFING_CHEESE){
            price += 10;
            calories += 20;
        }

    })();
    Hamburger.STUFFING_SALAD = (function () {
        if (stuffing == Hamburger.STUFFING_SALAD){
            price += 20;
            calories += 50;
        }

    })();
    Hamburger.STUFFING_POTATO = (function () {
        if (stuffing == Hamburger.STUFFING_POTATO){
            price += 15;
            calories += 10;
        }

    })();
    Hamburger.TOPPING_MAYO = function () {
        price += 20;
        calories += 50;
    };
    Hamburger.TOPPING_SPICE = function () {
        price += 15;
    };
    Hamburger.prototype.addTopping = function (topping) {
        if (topping == Hamburger.TOPPING_MAYO){
            Hamburger.TOPPING_MAYO();
            toppings.push("Hamburger.TOPPING_MAYO");
        }else if(topping == Hamburger.TOPPING_SPICE){
            Hamburger.TOPPING_SPICE();
            toppings.push('Hamburger.TOPPING_SPICE');
        }
    };
    Hamburger.prototype.removeTopping = function () {
        for (var i = 0; i < toppings.length; i++){
            if (toppings[i] == "Hamburger.TOPPING_MAYO"){
                price -= 20;
                calories -= 50;
                var index = toppings.indexOf(toppings[i]);
                toppings.splice(index, 1);
            }else if (toppings[i] == "Hamburger.TOPPING_SPICE"){
                price -= 15;
                index = toppings.indexOf(toppings[i]);
                toppings.splice(index, 1);
            }
        }
    };
    Hamburger.prototype.getToppings = function () {
        return toppings;
    };
    Hamburger.prototype.getSize = function () {
        return function () {
            if (size == Hamburger.SIZE_SMALL){
                return 'Hamburger.SIZE_SMALL';
            }else if (size == Hamburger.SIZE_LARGE){
                return 'Hamburger.SIZE_LARGE';
            }
        }
    };
    Hamburger.prototype.getStuffing = function () {
        return function () {
            if (stuffing == Hamburger.STUFFING_CHEESE){
                return 'Hamburger.STUFFING_CHEESE';
            }else if (stuffing == Hamburger.STUFFING_SALAD){
                return 'Hamburger.STUFFING_SALAD';
            }else if (stuffing == Hamburger.STUFFING_POTATO){
                return 'Hamburger.STUFFING_SALAD';
            }
        }
    };
    Hamburger.prototype.calculatePrice = function () {
        return price;
    };
    Hamburger.prototype.calculateCalories = function () {
        return calories;
    };

}

function task14(dataType) {
    var toString = Object.prototype.toString;
    switch ( toString.call(dataType) ) {
        case '[object Undefined]':
            console.log("undefined");
            break;
        case "[object Boolean]":
            console.log('boolean');
            break;
        case "[object Null]":
            console.log('null');
            break;
        case "[object Number]":
            console.log('number');
            break;
        case "[object String]":
            console.log('string');
            break;
        case "[object Function]":
            console.log('function');
            break;
        case "[object Array]":
            console.log('array');
            break;
        case "[object Object]":
            console.log('object');
            break;
        default:
            console.log('array-like');
            break;
    }
}

function task15(el) {
    var result;
    if (Object.prototype.toString.call(el) == "[object Array]"){
        result = el.slice();
    }else{
        result = Object.assign({}, el);
    }
    return result;
}

function task16(el) {
    var copy = {};
    for (var key in el) {
        copy[key] = el[key];
    }
    return copy;
}

function deepCopy(original) {
    return JSON.parse(JSON.stringify( original ));
}





