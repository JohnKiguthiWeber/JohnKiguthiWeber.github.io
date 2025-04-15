let color = "black";

document.addEventListener('DOMContentLoaded', () => {
    function makeBoard() {
        const heading = document.createElement('h2');
        heading.textContent = "Pixel Art Painter";
        document.body.prepend(heading)

        const table = document.createElement('table');

        for (let row = 0; row < 100; row++) {
            const tr = document.createElement('tr');
            for (let col = 0; col < 100; col++) {
                const td = document.createElement('td');
                td.addEventListener('click', function () {
                    colorChanger(this);
                });
                tr.appendChild(td);
            }
            table.appendChild(tr);
        }

        document.getElementById('drawingTable').appendChild(table);
    }

    function colorPalette() {
      const palette = document.getElementById('colorPalette');
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

    makeBoard();
    colorPalette();
});












