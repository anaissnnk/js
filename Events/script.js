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

/*my code*/

const actionSquare = document.querySelectorAll(".actionsquare");

function createDiv(){
  const newDiv = document.createElement('div');
  newDiv.classList.add("displayedsquare");
/*TODO: Create a new <div> with a class .displayedsquare and the corresponding clicked color in the div above
        (.displayedsquare-wrapper)*/
  newDiv.style.backgroundColor = "red";
  document.body.appendChild(newDiv);
};

actionSquares.forEach(function (actionSquare) {
  actionSquare.addEventListener('click', createDiv);
});


/*TODO: Create a new <li> in the log below to state when the action was done*/
  