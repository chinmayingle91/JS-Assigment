let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let getElement = document.getElementById('item');

arr.forEach((nodes, i) => {
    let newElement = document.createElement('div');
    getElement.appendChild(newElement);
    newElement.classList.add("grid-item-" + (i + 1));
    newElement.classList.add("box");
    newElement.innerHTML = nodes;
})

function shuffleElements() {
   // let items = document.getElementById('item');
    for (let i = arr.length - 1; i > 0; i--) {
       // console.log(getElement.children[Math.floor(Math.random() * (i + 1))])
       getElement.appendChild(getElement.children[Math.floor(Math.random() * (i + 1))])
    }
}
function sortElements() {
    //let list = document.getElementById('item');

    [...getElement.children]
        .sort((a, b) => Number(a.innerText) > Number(b.innerText) ? 1 : -1)
        .forEach(node => getElement.appendChild(node));
}