// These are your event handlers
const clickCounterHandler = (event) => {
  let numOfClicks = Number(event.target.dataset.clicks)
  numOfClicks += 1
  event.target.dataset.clicks = numOfClicks
  if (numOfClicks === 1) {
    event.target.textContent = `I've been clicked ${numOfClicks} time.`
  } else event.target.textContent = `I've been clicked ${numOfClicks} times!`
}



const handleKeydown = (event) => {
  console.log(event)
  const PresedKey = document.getElementById('keydown-tracker')
  PresedKey.textContent = `You pressed ${event.code}`
};

// We've started this one for you
const handleDelegation = (event) => {
  const resultSpan = document.querySelector('#delegation-result');
  if (event.target.matches('.grid-item')) {
    resultSpan.textContent = event.target.textContent
  }

};

const addNewRandomNumber = () => {
  const unorderedList = document.getElementById('random-numbers')
  const li = document.createElement('li')
  const randomNuber = Math.random()
  li.textContent = randomNuber
  unorderedList.append(li)
};


// Select the elements and attach your event handlers inside main
const main = () => {
  const delegationContainer = document.querySelector('#delegation');
  delegationContainer.addEventListener('click', handleDelegation,);

  const button = document.querySelector("#click-button");
  button.addEventListener('click', clickCounterHandler);

  const inlineButton = document.querySelector('#inline-example');
  inlineButton.addEventListener('click', clickCounterHandler);

  document.body.addEventListener('keydown', handleKeydown);

  const updatedResults = document.querySelector('#delegation')
  updatedResults.addEventListener('click', handleDelegation)

  const addButton = document.querySelector('#add-random-num')
  addButton.addEventListener("click", addNewRandomNumber)

  document.querySelector('#remove').addEventListener('click', () => {
    const delegationContainer = document.getElementById('delegation')
    delegationContainer.removeEventListener('click', handleDelegation)
  });

};
main();
