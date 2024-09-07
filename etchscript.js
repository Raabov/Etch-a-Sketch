let container = document.querySelector('.container');
container.style.display = 'flex';
container.style.flexWrap = 'wrap';
container.style.width = '1600px';
container.style.heigh = '1600px';

for (let i = 0 ; i < 16; i++) {
    let node = document.createElement("div");
    
    node.style.backgroundColor = 'pink';
    node.style.width = '50px';
    node.style.height = '50px';
    node.style.outline = '2px solid red';

    container.appendChild(node);
}