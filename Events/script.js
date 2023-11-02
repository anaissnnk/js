const _initTime = Date.now()

const getElapsedTime = () => {
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's'
}

const clickOnSquare = (e) => {
  console.log(e.target.classList[1])
  console.log(getElapsedTime())
}

const actionSquares = document.querySelectorAll('.actionsquare')
for (let actionSquare of actionSquares) {
  actionSquare.addEventListener('click', clickOnSquare)
}

/*My Code*/

const greenDiv = document.querySelector('.green');
const violetDiv = document.querySelector('.violet');
const orangeDiv = document.querySelector('.orange');
const squareWrapper = document.querySelector('.displayedsquare-wrapper');

function createDiv(color){
  const newDiv = document.createElement('div');
  newDiv.classList.add("displayedsquare");
  newDiv.style.backgroundColor = color;
  squareWrapper.append(newDiv);
};

/*TODO: Create a new <div> with a class .displayedsquare and the corresponding clicked color in the div above
        (.displayedsquare-wrapper)*/

greenDiv.addEventListener('click', function(){
  createDiv('lime')
});
violetDiv.addEventListener('click', function(){
  createDiv('magenta')
});
orangeDiv.addEventListener('click', function(){
  createDiv('orange')
});


/*TODO: Create a new <li> in the log below to state when the action was done*/
  