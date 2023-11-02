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
// Generating new squares
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

//Creating li log for new actions
const logSection = document.querySelectorAll('section')[2];
const squareWrapper = document.querySelector('.actionsquare-wrapper');

function logEntry() {
  const newEntry = document.createElement('li');
  const entryTime = new Date();
  newEntry.textContent = "Square created at " + entryTime.toLocaleTimeString();
  logSection.append(newEntry);
}

squareWrapper.addEventListener('click', function() {
  logEntry()
}
)

//Body event listeners
//Space bar entry function
function spacebarEntry() {
  const newEntry = document.createElement('li');
  const entryTime = new Date();
  newEntry.textContent = "Spacebar pressed at " + entryTime.toLocaleTimeString();
  logSection.append(newEntry);
}

// When the spacebar is hit randomly change the background color of the whole page + log it
document.body.addEventListener("keyup", (event) => {
  if (event.key === " ") {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
    spacebarEntry();
  }
});





//TODO: When the l key is pressed the log gets deleted (erases the generated <li>s).
//Mind you: using a delete in a for loop might cause issues (as the amount of items to loop over changes),
//so a while loop might be a good choice instead.
//TODO: When the s key is pressed the squares get deleted (erases the generated squares)
//TODO: Create a system so that when a user clicks on a generated square an alert pops-up with the color of that square
