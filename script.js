
function generateRandomNumbers() {
    const min = parseInt(document.getElementById('min').value, 10);
    const max = parseInt(document.getElementById('max').value, 10);
    const iterations = parseInt(document.getElementById('iterations').value, 10);
    if (!isNaN(min) && !isNaN(max) && min < max 
            && !isNaN(iterations) && iterations > 0) {
        document.getElementById('result').innerHTML = 'Your lucky numbers are:<br>';
        const generatedNumbers = new Set();
        while (generatedNumbers.size < iterations) {
            const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
            generatedNumbers.add(randomNumber);
        }
        generatedNumbers.forEach(number => {
            console.log(number);
            document.getElementById('result').innerHTML += number + '<br>';
        });
    } else {
        console.log('Invalid range');
        document.getElementById('result').innerText = 'Invalid range';
    }
}
