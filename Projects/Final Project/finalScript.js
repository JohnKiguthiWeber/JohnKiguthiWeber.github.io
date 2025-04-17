let color = "black";
let isMouseDown = false;
let brushSize = 1;
let isEraser = false;

document.addEventListener('DOMContentLoaded', () => {
  document.addEventListener('mousedown', () => {
    isMouseDown = true;
  })
  document.addEventListener('mouseup', () => {
    isMouseDown = false;
  })

  function makeBoard() {
    const heading = document.createElement('h2');
    heading.textContent = "Pixel Art Painter";
    heading.style.textAlign = "center";
    document.body.prepend(heading);

    const container = document.createElement('div');
    container.style.display = "flex";
    container.style.justifyContent = "center";
    container.style.alignItems = "flex-start";

    const canvasContainer = document.createElement('div');
    canvasContainer.id = "canvasContainer";
    canvasContainer.style.marginLeft = "100px";
    container.appendChild(canvasContainer);

    document.body.appendChild(container);

    const table = document.createElement('table');

    for (let row = 0; row < 100; row++) {
        const tr = document.createElement('tr');
        for (let col = 0; col < 100; col++) {
            const td = document.createElement('td');
            td.addEventListener('mouseover', function () {
                if (isMouseDown){
                    colorChanger(this);
                  }
                  
            });
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }

    document.getElementById('drawingTable').appendChild(table);
  }

  function colorChanger(element){
      element.style.backgroundColor = color;
      let el = element;
      let el2 = element
      for (let i = 0; i < (brushSize - 1)/2; i++){
          el = el.previousElementSibling;
          el2 = el2.nextElementSibling;
          el.style.backgroundColor = color;
          el2.style.backgroundColor = color;
      }
  }

  function changeBrushColor(col){
      if (isEraser) {
        color = 'white';
        return;
      }
      color = col;
  }

  function colorPalette() {
    const palette = document.getElementById('colorPalette');
    palette.style.position = "fixed";
    palette.style.display = "flex";
    palette.style.right = "10px";
    palette.style.top = "150px";
    palette.style.flexDirection = "column";
    const colors = ["black", "red", "blue", "green", "yellow", "purple", "orange", "pink", "white"];

    colors.forEach(color_cell => {
        const button_color = document.createElement('button');
        button_color.style.width = "40px";
        button_color.style.height = "20px";
        button_color.classList.add('color-button');
        button_color.style.backgroundColor = color_cell;
        //button_color.title = color_cell;

        button_color.onclick = () => {
          changeBrushColor(color_cell);
        }
        palette.appendChild(button_color);
    });


    // Need to work on this. Focus on making the eraser button.
    const eraser = document.createElement('button');
    eraser.textContent = "Eraser";
    eraser.style.width = "40px";
    eraser.style.height = "40px";
    eraser.onclick = () => {
      changeBrushColor("white");
    }
  }

  function eraser() {
    isEraser = true;
  }

  function saveBoard() {
    let savedColors = [];
    const rows = document.querySelectorAll('#drawingTable tr')
    rows.forEach((tr, rowIndex) => {
        let rowColors = [];
        tr.querySelectorAll('td').forEach((td) => {
            rowColors.push(td.style.backgroundColor || 'white');
        });
        savedColors.push(rowColors);
    });
    localStorage.setItem("pixelArt", JSON.stringify(savedColors));
  }

  function loadBoard() {

  }

  makeBoard();
  colorPalette();
});

function clearBoard() {
    const table = document.querySelector('table');
    const cells = table.querySelectorAll('td');
    cells.forEach(cell => {
        cell.style.backgroundColor = "white";
    });
}

function changeBrush() {
  brushSize = document.getElementById('brushThing').value;
}

clearBoard();


