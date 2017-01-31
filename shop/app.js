var xhr = new XMLHttpRequest();
xhr.open('GET', 'shop.JSON', false);
xhr.send();

var resultArr = [];
var resultDiv = document.getElementById('result');
var data = JSON.parse(xhr.responseText);
var index = 0;

console.log( data );
// console.log(typeof data[0].name);

function createItem() {
    var item = document.createElement('div');
    item.classList.add('item');
    return item;
}

function createRow() {
    var row = document.createElement('div');
    row.classList.add('row');
    return row;
}

function makePicture(src) {
    var img = document.createElement('img');
    img.src = src;
    img.width = 100;
    img.height = 100;
    return img;
}


/*function giveFiveItems() {
    var row = createRow();
    resultDiv.appendChild(row);
    for (var j = 0; j < 5; j++) {
        var item = createItem();
        var heading = document.createElement('p');
        var price = document.createElement('p');
        heading.innerHTML = data[j].name;
        price.innerHTML = data[j].price;
        row.appendChild(item);
        item.appendChild(makePicture(data[j].picture));
        item.appendChild(heading);
        item.appendChild(price);
    }
}*/

function defaultPage() {
    index = 0;
    for (var i = 0; i < 2; i++) {
        var row = createRow();
        resultDiv.appendChild(row);
        for (var j = 0; j < 5; j++, index++){
            var item = createItem();
            var heading = document.createElement('p');
            var price = document.createElement('p');
            heading.innerHTML = data[index].name;
            price.innerHTML = data[index].price;
            row.appendChild(item);
            item.appendChild(makePicture(data[index].picture));
            item.appendChild(heading);
            item.appendChild(price);
        }

    }
    document.getElementById('buttonMore').style.display = 'block';
}

function makeArrayOfSearched() {
    if (document.getElementById('input').value) {
        resultArr.length = 0;
        var searchedValue = document.getElementById('input').value;
        for (var i = 0; i < data.length; i++) {
            if (data[i].name && data[i].name.includes(searchedValue)) {
                resultArr.push(data[i]);
            }
        }
        if (resultArr.length > 10) {
            document.getElementById('buttonMore').style.display = 'block';
        }else {
            document.getElementById('buttonMore').style.display = 'none';
        }
    }
}

function giveTenItems() {
    if (document.getElementById('input').value) {
        resultDiv.innerHTML = '';
        var searchedValue = document.getElementById('input').value;
        index = 0;
        if (resultArr.length < 5) {
            var row = createRow();
            resultDiv.appendChild(row);
            for (var k = 0; k < resultArr.length; k++, index++){
                var item = createItem();
                var heading = document.createElement('p');
                var price = document.createElement('p');
                heading.innerHTML = resultArr[index].name;
                price.innerHTML = resultArr[index].price;
                row.appendChild(item);
                item.appendChild(makePicture(resultArr[index].picture));
                item.appendChild(heading);
                item.appendChild(price);
            }
        }else {
            for (var i = 0; i < 2; i++){
                row = createRow();
                resultDiv.appendChild(row);
                for (var j = 0; j < 5; j++, index++){
                    item = createItem();
                    heading = document.createElement('p');
                    price = document.createElement('p');
                    heading.innerHTML = resultArr[index].name;
                    price.innerHTML = resultArr[index].price;
                    row.appendChild(item);
                    item.appendChild(makePicture(resultArr[index].picture));
                    item.appendChild(heading);
                    item.appendChild(price);
                }
            }
        }




        console.log(index);
    }
}

/*function giveTenItems() {
    if (document.getElementById('input').value) {
        resultDiv.innerHTML = '';
        var searchedValue = document.getElementById('input').value;
        index = 0;
        for (var i = 0; i < 2; i++){
            var row = createRow();
            resultDiv.appendChild(row);
            for (var j = 0; j < 5; j++, index++){
                var item = createItem();
                var heading = document.createElement('p');
                var price = document.createElement('p');
                heading.innerHTML = resultArr[index].name;
                price.innerHTML = resultArr[index].price;
                row.appendChild(item);
                item.appendChild(makePicture(resultArr[index].picture));
                item.appendChild(heading);
                item.appendChild(price);
            }
        }
        console.log(index);
    }
}*/

/*function giveFiveItems() {
    if (document.getElementById('input').value) {
        resultDiv.innerHTML = '';
        var row = createRow();
        resultDiv.appendChild(row);

        let index = 0;
        var count = 0;
        var searchedValue = document.getElementById('input').value;

        while (data[index].name && count < 5) {
            var str = data[index].name;
            if (str.includes(searchedValue)) {
                var item = createItem();
                var heading = document.createElement('p');
                var price = document.createElement('p');
                heading.innerHTML = data[index].name;
                price.innerHTML = data[index].price;
                row.appendChild(item);
                item.appendChild(makePicture(data[index].picture));
                item.appendChild(heading);
                item.appendChild(price);
                count++;
            }
            index++;
        }
    }


    // for (var j = 0; j < 5; j++) {
    //     var item = createItem();
    //     var heading = document.createElement('p');
    //     var price = document.createElement('p');
    //     heading.innerHTML = data[j].name;
    //     price.innerHTML = data[j].price;
    //     row.appendChild(item);
    //     item.appendChild(makePicture(data[j].picture));
    //     item.appendChild(heading);
    //     item.appendChild(price);
    // }
}*/



function search(event) {
    event.preventDefault();
    // giveFiveItems();
    makeArrayOfSearched();
    giveTenItems();
    console.log(resultArr);
}

defaultPage();
// giveFiveItems();

