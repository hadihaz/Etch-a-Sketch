const sketch = document.querySelector(".Sketch");
const colorPicker = document.querySelector('#colorPicker');
const buttons = document.querySelectorAll('button')

let etch = false;
let color = "black";
let inputColorPicker = "black";
let RandomColorFlag = false;

for (let i = 0; i < 400; i++) {
    const cell = document.createElement("div");
    cell.classList.add('cell');
    sketch.appendChild(cell);

    cell.addEventListener("mousedown", (event) => {
        coloring(event)
        event.currentTarget.style.backgroundColor = color;
    });

    cell.addEventListener("mouseover", (event) => {
        coloring(event)
    });
}

document.body.onmousedown=()=>{etch = true}
document.body.onmouseup=()=>{etch = false}

colorPicker.addEventListener("input", (e) => {
    inputColorPicker = e.target.value;
    color = inputColorPicker;
    RandomColorFlag = false;
});

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        switch (button.id) {
            case 'Randomcolor':
                RandomColorFlag = true;
                break;
            case 'Eraser':
                RandomColorFlag = false;
                color = "white";
                break;
            case 'Clear':
                RandomColorFlag = false;
                const cells = document.querySelectorAll('.cell')
                cells.forEach((div) => { div.style.backgroundColor = "white"; })
                color = inputColorPicker;
                break;
        }
    })
})

function RandomColor() {
    return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`
}

function coloring(event){
    if (RandomColorFlag) {
        RandomColor()
        color = RandomColor()
    }
    if (etch && event.buttons === 1) {
        event.currentTarget.style.backgroundColor = color;
    }
}
