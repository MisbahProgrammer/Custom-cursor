let main = document.querySelector('body');
let cursor = document.querySelector('.cursor');


main.addEventListener('mousemove', function(para){
    cursor.style.left = para.x + "px"
    cursor.style.top = para.y + "px"
   
})
