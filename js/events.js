function makeRed() {
    document.body.style.backgroundColor = 'red';
}

// handle blue button click by setting function name 
const blueButton = document.getElementById('make-blue-button');
// just set the name of function 
blueButton.onclick = makeBlue;
function makeBlue() {
    document.body.style.backgroundColor = 'blue'
}


// handle event using anonymous function 
const greenButton = document.getElementById('make-green-button');
greenButton.onclick = function () {
    document.body.style.backgroundColor = 'green';
}

// handle by using  addEventListener
const goldenButton = document.getElementById('make-goldenrod-button');
goldenButton.addEventListener('click', makeGoldenRod);
function makeGoldenRod() {
    document.body.style.backgroundColor = 'goldenrod'
}

// add evenlistener 
const hotPink = document.getElementById('make-hotpink');
hotPink.addEventListener('click', function makePink() {
    document.body.style.backgroundColor = 'hotpink';
})

// direct shorcut 
document.getElementById('make-light-blue').addEventListener('click', function () {
    document.body.style.backgroundColor = 'lightblue'
})
