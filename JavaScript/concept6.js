let image = document.querySelector('img');
let page = document.querySelector('html');
page.onclick = function () {
 let imgSrc = image.getAttribute ('src')
 if (imgSrc == 'test.png') { 
    imgSrc = image.setAttribute ('src', 'test2.jpg');
 }
 else {
    imgSrc = image.setAttribute ('src', 'test.png');
 }
}