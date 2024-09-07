//Selected container and added style to the DOM
let container = document.querySelector('.container');

container.style.display = 'flex';
container.style.flexWrap = 'wrap';
container.style.width = '320px';
container.style.heigh = '32 0px';

// Loop to create grid of 16*16
// Appended to container

for (let i = 0 ; i < 256; i++) {
    let node = document.createElement("div");
    node.className = 'container-item';
    
    node.style.backgroundColor = 'pink';
    node.style.width = '20px';
    node.style.height = '20px';
    node.style.outline = '2px solid red';

    node.addEventListener('mouseover', function() {
        this.style.backgroundColor = 'blue';
    });

    node.addEventListener('mouseout', function(){
        this.style.backgroundColor = 'lightblue';
    });

    container.appendChild(node);
}

