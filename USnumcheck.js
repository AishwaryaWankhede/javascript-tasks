
const userInput = document.getElementById('user-input');
const checkBtn = document.getElementById('check-btn');
const clearBtn = document.getElementById('clear-btn');
const resultsDiv = document.getElementById('results-div');

checkBtn.addEventListener('click', function() {
    const phoneNumber = userInput.value;
    if (!phoneNumber) {
        alert('Please provide a phone number');
        return;
    }
    const validUSPhonePattern = /^(1\s?)?(\(\d{3}\)|\d{3})([.\-]|\s)?\d{3}([.\-]|\s)?\d{4}$/;
    const isValid = validUSPhonePattern.test(phoneNumber);
    resultsDiv.textContent = isValid ? `Valid US number: ${phoneNumber}` : `Invalid US number: ${phoneNumber}`;
});

clearBtn.addEventListener('click', function() {
    userInput.value = '';
    resultsDiv.textContent = '';
});
