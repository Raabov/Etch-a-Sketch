    //Selected container and added style to the DOM
    let container = document.querySelector('.container');
    let choice = document.querySelector('.choice');
    let size = 0;

    function userChoice(){
        //Clear existing grid items
        container.innerHTML = '';

        size = prompt(`Enter grid size less than 16:`);
        
        let itemSize = 320 / size;  

        container.style.width = `${itemSize * size}px`;
        container.style.height = `${itemSize * size}px`;

        for (let i = 0 ; i < size*size; i++) {
            let node = document.createElement("div");
            node.className = 'container-item';
            
            node.style.backgroundColor = 'pink';
            node.style.width = `${itemSize}px`;
            node.style.height = `${itemSize}px`;
            node.style.outline = '2px solid red';
        
            node.addEventListener('mouseover', function() {
                this.style.backgroundColor = 'blue';
            });
        
            node.addEventListener('mouseout', function() {
                this.style.backgroundColor = 'lightblue'
            });
        
            container.appendChild(node);
        }
    }
    choice.addEventListener('click', userChoice);

container.style.display = 'flex';
container.style.flexWrap = 'wrap';
