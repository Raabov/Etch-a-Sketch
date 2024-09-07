//Selected container and added style to the DOM
let container = document.querySelector('.container');

container.style.display = 'flex';
container.style.flexWrap = 'wrap';
container.style.width = '1600px';
container.style.heigh = '1600px';

// Loop to create grid of 16*16
// Appended to container

for (let i = 0 ; i < 256; i++) {
    let node = document.createElement("div");
    
    node.style.backgroundColor = 'pink';
    node.style.width = '50px';
    node.style.height = '50px';
    node.style.outline = '2px solid red';

    container.appendChild(node);
}