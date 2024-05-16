const addButton = document.getElementById('add-one')
const giveResults = document.getElementById('results')

counter = 0;

addButton.addEventListener('click', () => {
    counter++;
    giveResults.textContent = counter
})