// Add Event
document.addEventListener("click",randomColor);

// Manupulate

function randomColor() {
    let firstrgbval = Math.floor( Math.random() * 2000 );
    let secondrgbval = Math.floor( Math.random() * 2000 );
    let thirdrgbval = Math.floor( Math.random() * 2000 );
    

    document.body.style.backgroundColor = `rgb(${firstrgbval}, ${secondrgbval}, ${thirdrgbval})`;
}