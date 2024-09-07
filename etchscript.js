let container = document.querySelector('.container');

for (let i = 0 ; i < 16; i++) {
    let node = document.createElement("div");
    
    node.style.backgroundColor = 'pink';
    node.style.width = '50px';
    node.style.height = '50px';
    node.style.outline = '2px solid red';

    container.appendChild(node);
}