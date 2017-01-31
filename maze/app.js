var land = [];
var size = {width: 10, height: 10};

function createCell() {
    var cell = document.createElement('div');
    cell.classList.add('cell');
    return cell;
}

function createRow() {
    var row = document.createElement('div');
    row.classList.add('row');
    return row;
}

function initialize(size) {
    for (var i = 0; i < size.height; i++) {
        land.push([]);
        for (var j = 0; j < size.width; j++) {
            land[i].push(createCell());
        }
    }
}

function buildLand() {
    var landEl = document.getElementById('land');
    for (var i = 0; i < land.length; i++) {
        var row = createRow();
        landEl.appendChild(row);
        for (var j = 0; j < land[i].length; j++) {
            row.appendChild(land[i][j]);
        }
    }
}

function randomSide() {
    return Math.floor(Math.random() * 2);
}

/*function runMaze() {
    for (let i = 0; i < size.width; i++) {
        for (let j = 0; j < size.height; j++) {
            if (i < 1) {
                setTimeout(function () {
                    land[i][j].classList.add('noRightWall');
                }, 2000);
            }
            else {
                if (randomSide() === 0) {
                    setTimeout(function () {
                        land[i][j].classList.add('noRightWall');
                    }, 2000);
                }else {
                    setTimeout(function () {
                        land[i][j].classList.add('noTopWall');
                    }, 2000);
                }
            }
        }
    }
}*/


function runMaze() {
    for (var i = 0; i < size.width; i++) {
        for (var j = 0; j < size.height; j++) {
            if (i < 1) {
                land[i][j].classList.add('noRightWall');
            }
            else {
                if (randomSide() === 0) {
                    land[i][j].classList.add('noRightWall');
                }else {
                    land[i][j].classList.add('noTopWall');
                }
            }
        }
    }
}


/*function runMaze() {
    for (var i = 0; i < size.width; i++) {
        for (var j = 0; j < size.height; j++) {
            if (j == size.height - 1) {
                if (randomSide() === 0) {
                    land[i][j].classList.add('noTopWall');
                }
            }else {
                if (i < 1) {
                    land[i][j].classList.add('noRightWall');
                }
                else {
                    if (randomSide() === 0) {
                        land[i][j].classList.add('noRightWall');
                    }else {
                        land[i][j].classList.add('noTopWall');
                    }
                }
            }
        }
    }
}*/

function complete(event) {
    event.preventDefault();
    var width = document.getElementById('width').value;
    var height = document.getElementById('height').value;
    size.width = width;
    size.height = height;

    initialize(size);
    buildLand();
    runMaze();
}

// initialize(size);
// buildLand();
// runMaze();