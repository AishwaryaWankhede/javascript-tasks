
document.getElementById('check-btn').addEventListener('click', function() {
    const userInput = document.getElementById('text-input').value;
    const resultElement = document.getElementById('result');

    if (!userInput) {
        alert('Please input a value');
        return;
    }

    // Clean up the input: remove non-alphanumeric characters and convert to lowercase
    const cleanedInput = userInput.replace(/[^a-z0-9]/gi, '').toLowerCase();
    const reversedInput = cleanedInput.split('').reverse().join('');

    if (cleanedInput === reversedInput) {
        resultElement.textContent = `${userInput} is a palindrome`;
    } else {
        resultElement.textContent = `${userInput} is not a palindrome`;
    }
});
