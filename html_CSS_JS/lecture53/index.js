

// function changeText(event) {
//     console.log(event);
//     let fpara = document.getElementById('fpara');
//     fpara.textContent = " Babbar"
// }

// let fpara = document.getElementById('fpara');

// fpara.addEventListener('click', changeText); 

//fpara.removeEventListener('click', changeText);

// let anchorElement = document.getElementById('fanchor');

// anchorElement.addEventListener('click', function(event) {
//     event.preventDefault();
//     anchorElement.textContent = "Click done bhai"
// });
// console.log("Hi");
// let paras = document.querySelectorAll('p');

function alertPara(event) {
    if(event.target.nodeName === 'SPAN') {
        alert("You have Clicked on para: " + event.target.textContent );
    }
    
}

// for(let i=0; i<paras.length; i++) {
//     let para = paras[i];
//     console.log("eventListener added");
//     para.addEventListener('click', alertPara);
// }

let mydiv = document.getElementById('wrapper');

document.addEventListener('click', alertPara);