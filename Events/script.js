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
//Squares variables
const greenDiv = document.querySelector('.green');
const violetDiv = document.querySelector('.violet');
const orangeDiv = document.querySelector('.orange');
const displayedWrapper = document.querySelector('.displayedsquare-wrapper');

//Create new squares + alert message
function createDiv(color){
  const newDiv = document.createElement('div');
  newDiv.classList.add("displayedsquare");
  newDiv.style.backgroundColor = color;
  displayedWrapper.append(newDiv);
  newDiv.addEventListener('click', function() {
  alert("Color: " + color);  
  })
};

//Add entry of created square
greenDiv.addEventListener('click', function() {
  createDiv('lime');
  logEntry();
});

violetDiv.addEventListener('click', function() {
  createDiv('magenta')
  logEntry();
});
orangeDiv.addEventListener('click', function() {
  createDiv('orange')
  logEntry();
});

//variables for log entries
const logSection = document.querySelectorAll('section')[2];
const squareWrapper = document.querySelector('.actionsquare-wrapper');

//Creating li log for new actions
function logEntry() {
  const newEntry = document.createElement('li');
  const entryTime = new Date();
  newEntry.textContent = "Square created at " + entryTime.toLocaleTimeString();
  logSection.append(newEntry);
}


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


//When the l key is pressed the log gets deleted (erases the generated <li>s).
document.body.addEventListener("keyup", (event) => {
  if (event.key === "l") {
    const logEntry = document.querySelectorAll('li');
    logEntry.forEach(entry => entry.remove());
  }
});


//When the s key is pressed the squares get deleted (erases the generated squares)
document.body.addEventListener("keyup", (event) => {
  if (event.key === "s") {
    const generatedSquares = document.querySelectorAll(".displayedsquare");
    generatedSquares.forEach(square => square.remove());
  }
});

