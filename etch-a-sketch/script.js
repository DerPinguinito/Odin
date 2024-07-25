const BODY = document.querySelector("body");
const TITLE_DIV = document.createElement("div");
TITLE_DIV.setAttribute("id", "title-container");

BODY.appendChild(TITLE_DIV);

const TITLE = document.createElement("h1");
TITLE.setAttribute("id", "title");
TITLE.textContent = "Etch-a-Sketch";

TITLE_DIV.appendChild(TITLE);

const MAIN = document.createElement("div");
MAIN.setAttribute("id", "main");

BODY.appendChild(MAIN);


function createRows(amountOfRows) {
    const ROWS = [];
    
    for (let i = 0; i < amountOfRows; i++) {
        const ROW = document.createElement('div');
        ROW.classList.toggle("row");
        ROWS.push(ROW);
    };

    return ROWS
};


function setMouseOverEvent(columnObject) {

    columnObject.addEventListener('mouseover', (e) => {
        e.target.classList.toggle("active");
    });
};


function createColumns(amountOfColumns, rowObject) {
    
    for (let i = 0; i < amountOfColumns; i++) {
        const COLUMN = document.createElement("div");
        COLUMN.classList.toggle("column");
        setMouseOverEvent(COLUMN);
        rowObject.appendChild(COLUMN);
    };

    return rowObject;
};


function createGrid(rows, columns) {
    const GRID_DIV = document.createElement("div");
    GRID_DIV.setAttribute("id", "grid-div");

    let ROWS = createRows(rows);

    ROWS.map((row) => {createColumns(columns, row)});
    ROWS.forEach(row => {GRID_DIV.appendChild(row)});

    BODY.appendChild(GRID_DIV);
};

createGrid(16, 16);