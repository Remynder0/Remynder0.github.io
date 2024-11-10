function init() {
    let list = document.querySelectorAll('li');
    console.log(list);
    list.forEach(element => {
        element.addEventListener('click',clicker)
    });
    
}

function clicker(event) {
    let target = event.target;
    console.log(target);
    target.setAttribute('style', 'box-shadow: 10px 5px 5px red;');
}