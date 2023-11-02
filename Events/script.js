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
const displayedWrapper = document.querySelector('.displayedsquare-wrapper');

function createDiv(color){
  const newDiv = document.createElement('div');
  newDiv.classList.add("displayedsquare");
  newDiv.style.backgroundColor = color;
  displayedWrapper.append(newDiv);
};

greenDiv.addEventListener('click', function() {
  createDiv('lime')
});
violetDiv.addEventListener('click', function() {
  createDiv('magenta')
});
orangeDiv.addEventListener('click', function() {
  createDiv('orange')
});

/*TODO: Create a new <li> in the log below to state when the action was done*/
const logSection = document.querySelectorAll('section')[2];
const squareWrapper = document.querySelector('.actionsquare-wrapper');

function logEntry() {
  const newEntry = document.createElement('li');
  const entryTime = new Date();
  newEntry.textContent = "Action done at " + entryTime.toLocaleTimeString();
  logSection.append(newEntry);
}

squareWrapper.addEventListener('click', function() {
  logEntry()
}
)
