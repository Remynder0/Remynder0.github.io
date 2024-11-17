function init() {
    let list = document.querySelectorAll('img');
    console.log(list);
    list.forEach(element => {
        console.log(element);
        element.addEventListener('click',clicker)
    });
    
}

function clicker(event) {
    let list = document.querySelectorAll('img');
    console.log(list);
    list.forEach(element => {
        element.setAttribute('style','box-shadow: 0;')
    });


    let target = event.target;
    console.log(target);
    target.setAttribute('style', 'box-shadow: 15px 15px 8px grey;');
}