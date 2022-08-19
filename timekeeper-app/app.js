// let count = 5;

// console.log(count);

// setTimeout(() => {
//     count --;
//     console.log(count);
//     setTimeout(() => {
//         count --;
//         console.log(count);
//         setTimeout(()=> {
//             count --;
//             console.log(count);
//             setTimeout(() =>{
//                 count --;
//                 console.log(count);
//                 setTimeout(()=> {
//                     count--;
//                     console.log(count);
//                 },1000);
//             },1000);
//         }, 1000);
//     }, 1000);
// }, 1000);

let count = 5;

let countEl = document.getElementById('countdown');

setInterval(updateCountdown,1000);

function updateCountdown(){

    countEl.innerHTML = `${count}`;
    count --;
    if(count == 0){
        countEl.innerHTML = `${0}`;
    }

}