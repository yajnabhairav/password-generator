const passwordInput = document.getElementById('password');
const copyButton = document.getElementById('copy');
const generateButton = document.getElementById('generate');
const uppercaseCheckbox = document.getElementById('uppercase');
const lowercaseCheckbox = document.getElementById('lowercase');
const numbersCheckbox = document.getElementById('numbers');
const symbolsCheckbox = document.getElementById('symbols');
const lengthInput = document.getElementById('length');

const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const symbols = '!@#$%^&*()_+[]{}|;:,.<>?';

function generatePassword() {
    let charset = '';
    let password = '';
    const length = parseInt(lengthInput.value);

    if (uppercaseCheckbox.checked) charset += uppercaseLetters;
    if (lowercaseCheckbox.checked) charset += lowercaseLetters;
    if (numbersCheckbox.checked) charset += numbers;
    if (symbolsCheckbox.checked) charset += symbols;

    if (charset === '') {
        alert('Please select at least one option.');
        return;
    }

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }

    passwordInput.value = password;
}

function copyToClipboard() {
    passwordInput.select();
    document.execCommand('copy');
    alert('Password copied to clipboard!');
}

generateButton.addEventListener('click', generatePassword);
copyButton.addEventListener('click', copyToClipboard);

generatePassword();
