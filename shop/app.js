var xhr = new XMLHttpRequest();
xhr.open('GET', 'shop.JSON', false);
xhr.send();

var resultArr = [];
var clickedId = [];
var watchedArr = [];
var biggestSales = [];
var shop = document.getElementById('shop');
var biggestSalesDiv = document.getElementById('biggestSales');
var watchedDiv = document.getElementById('watched');
var resultDiv = document.getElementById('result');
var data = JSON.parse(xhr.responseText);
var index = 0;
var buttonMore = document.getElementById('buttonMore');
var buttonSale = document.getElementById('buttonSale');
var buttonWatched = document.getElementById('buttonWatched');

function compare(a,b) {
    if (a.sale > b.sale)
        return -1;
    if (a.sale < b.sale)
        return 1;
    return 0;
}

function findBiggestSales() {
    for (var i = 0; i < data.length; i++) {
        if (data[i].isActiveSale) {
            biggestSales.push(data[i]);
        }
    }
    return biggestSales.sort(compare);
}
findBiggestSales();


function makeSale(text) {
    var sale = document.createElement('div');
    sale.classList.add('sale');
    sale.innerHTML = `-${text}%`;
    return sale;
}




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



function defaultPage() {
    resultDiv.innerHTML = '';
    index = 0;
    var defaultFunction =  function () {
        for (var i = 0; i < 2; i++) {
            var row = createRow();
            resultDiv.appendChild(row);
            for (var j = 0; j < 5; j++, index++){
                if (data[index]) {
                    var item = createItem();
                    var heading = document.createElement('p');
                    var price = document.createElement('h3');
                    var hiddenId = document.createElement('h5');
                    if (data[index].name && data[index].picture) {
                        hiddenId.innerHTML = data[index].id;
                        heading.innerHTML = data[index].name;
                        price.innerHTML = data[index].price;
                        if (data[index].isActiveSale) {
                            var sale = makeSale(data[index].sale);
                            item.appendChild(sale);
                        }
                        row.appendChild(item);
                        item.appendChild(makePicture(data[index].picture));
                        item.appendChild(heading);
                        item.appendChild(price);
                        item.appendChild(hiddenId);
                    }else {
                        heading.innerHTML = 'Товара больше нет';
                        row.appendChild(item);
                        item.appendChild(heading);
                        item.appendChild(hiddenId);
                    }
                }
            }
        }
    };
    defaultFunction();

    buttonMore.style.display = 'block';
    buttonMore.onclick = function () {
        defaultFunction();
        if (index >= 32) {
            buttonMore.style.display = 'none';
        }
    }
}

function makeArrayOfSearched() {
    if (document.getElementById('input').value) {
        resultArr.length = 0;
        var searchedValue = document.getElementById('input').value.toLowerCase();
        for (var i = 0; i < data.length; i++) {
            if (data[i].name && data[i].name.toLowerCase().includes(searchedValue)) {
                resultArr.push(data[i]);
            }
        }
        if (resultArr.length > 10) {
            buttonMore.style.display = 'block';
        }else {
            buttonMore.style.display = 'none';
        }
    }
}

function giveTenItems() {
    document.getElementById('input').value == '' ? defaultPage() : null; // maybe extra

    if (document.getElementById('input').value) {
        resultDiv.innerHTML = '';
        index = 0;
        var makeTenItems = function () {
            for (var i = 0; i < 2; i++){
                row = createRow();
                resultDiv.appendChild(row);
                for (var j = 0; j < 5; j++, index++){
                    if (resultArr[index]) {
                        var item = createItem();
                        var heading = document.createElement('p');
                        var price = document.createElement('h3');
                        var hiddenId = document.createElement('h5');
                        hiddenId.innerHTML = resultArr[index].id;
                        heading.innerHTML = resultArr[index].name;
                        price.innerHTML = resultArr[index].price;
                        if (resultArr[index].isActiveSale) {
                            var sale = makeSale(resultArr[index].sale);
                            item.appendChild(sale);
                        }
                        row.appendChild(item);
                        item.appendChild(makePicture(resultArr[index].picture));
                        item.appendChild(heading);
                        item.appendChild(price);
                        item.appendChild(hiddenId);
                    }

                }
            }
        };
        if (resultArr.length < 5) {
            var row = createRow();
            resultDiv.appendChild(row);
            for (var k = 0; k < resultArr.length; k++, index++){
                var item = createItem();
                var heading = document.createElement('p');
                var price = document.createElement('h3');
                var hiddenId = document.createElement('h5');
                hiddenId.innerHTML = resultArr[index].id;
                heading.innerHTML = resultArr[index].name;
                price.innerHTML = resultArr[index].price;
                if (resultArr[index].isActiveSale) {
                    var sale = makeSale(resultArr[index].sale);
                    item.appendChild(sale);
                }
                row.appendChild(item);
                item.appendChild(makePicture(resultArr[index].picture));
                item.appendChild(heading);
                item.appendChild(price);
                item.appendChild(hiddenId);
            }
        }else {
            makeTenItems();
            buttonMore.onclick = function () {
                makeTenItems();
                console.log(index);
                if (index >= resultArr.length) {
                    buttonMore.style.display = 'none';
                }
            };

        }
    }
}



function makeSalesField() {
    var index = 0;
    var row = createRow();
    biggestSalesDiv.appendChild(row);
    var defaultSales =  function () {
        for (var j = 0; j < 3; j++, index++){
            if (biggestSales[index]) {
                var item = createItem();
                var heading = document.createElement('p');
                var price = document.createElement('h3');
                var hiddenId = document.createElement('h5');
                hiddenId.innerHTML = biggestSales[index].id;
                heading.innerHTML = biggestSales[index].name;
                price.innerHTML = biggestSales[index].price;
                var sale = makeSale(biggestSales[index].sale);
                item.appendChild(sale);
                row.appendChild(item);
                item.appendChild(makePicture(biggestSales[index].picture));
                item.appendChild(heading);
                item.appendChild(price);
                item.appendChild(hiddenId);
            }
        }

    };
    defaultSales();
}

makeSalesField();

function search(event) {
    event.preventDefault();
    makeArrayOfSearched();
    giveTenItems();
}

defaultPage();


shop.onclick = function (event) {
    var target = event.target;
    var clickedItem = target.closest('.item');
    if (clickedItem) {
        var childNodesLength = clickedItem.childNodes.length;
        var itemId = clickedItem.childNodes[childNodesLength - 1].innerText;
        alert( `Вы посмотрели товар: ${clickedItem.childNodes[childNodesLength - 3].innerText}, с ценой: ${clickedItem.childNodes[childNodesLength - 2].innerText}` );
        if ( clickedId.indexOf(itemId) == -1 ) {
            clickedId.push(itemId);
            if (clickedId.length > 3) {
                clickedId.splice(0, clickedId.length - 3);
            }

            makeWatchedArr();

        }
        makeWatched();
    }
    storing();
};

buttonSale.onclick = function () {
    biggestSalesDiv.style.display = 'block';
    watchedDiv.style.display = 'none';
};

buttonWatched.onclick = function () {
    biggestSalesDiv.style.display = 'none';
    watchedDiv.style.display = 'block';
};

var makeWatchedArr = function () {
    for (var i = 0; i < data.length; i++) {
        for (var j = 0; j < clickedId.length; j++){
            if (data[i].id == clickedId[j]) {
                if (!watchedArr.includes(data[i])) {
                    watchedArr.push(data[i]);
                }
                if (watchedArr.length > 3) {
                    watchedArr.splice(0, watchedArr.length - 3);
                }
            }
        }
    }
};

var makeWatched = function () {
    watchedDiv.innerHTML = '';
    var row = createRow();
    watchedDiv.appendChild(row);
    for (var j = 0; j < 3; j++){
        if (watchedArr[j]) {
            var item = createItem();
            var heading = document.createElement('p');
            var price = document.createElement('h3');
            var hiddenId = document.createElement('h5');
            hiddenId.innerHTML = watchedArr[j].id;
            heading.innerHTML = watchedArr[j].name;
            price.innerHTML = watchedArr[j].price;
            var sale = makeSale(watchedArr[j].sale);
            item.appendChild(sale);
            row.appendChild(item);
            item.appendChild(makePicture(watchedArr[j].picture));
            item.appendChild(heading);
            item.appendChild(price);
            item.appendChild(hiddenId);
        }
    }
};

function storing() {
    localStorage.setItem('clickedId', JSON.stringify(clickedId));
}

var retrievedData = localStorage.getItem('clickedId');
var newClickedId = JSON.parse(retrievedData);
if(newClickedId){
    for(var i = 0; i < newClickedId.length; i++){
        clickedId.push(newClickedId[i])
    }
}

makeWatchedArr();
makeWatched();