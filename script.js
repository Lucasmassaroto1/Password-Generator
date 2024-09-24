const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+[]{}|;:,.<>?';
    let passwordInputType = 'password'; // Default input type

    function getRandomCharacter(str) {
        return str[Math.floor(Math.random() * str.length)];
    }

    function generatePassword() {
        const includeLowercase = document.getElementById('includeLowercase').checked;
        const includeUppercase = document.getElementById('includeUppercase').checked;
        const includeNumbers = document.getElementById('includeNumbers').checked;
        const includeSymbols = document.getElementById('includeSymbols').checked;

        let availableCharacters = '';
        if (includeLowercase) availableCharacters += lowercase;
        if (includeUppercase) availableCharacters += uppercase;
        if (includeNumbers) availableCharacters += numbers;
        if (includeSymbols) availableCharacters += symbols;

        let password = '';
        const passwordLength = parseInt(document.getElementById('passwordLength').value);

        for (let i = 0; i < passwordLength; i++) {
            password += getRandomCharacter(availableCharacters);
        }

        const passwordField = document.getElementById('password');
        passwordField.value = password;
        evaluatePasswordStrength(password);
    }

    function evaluatePasswordStrength(password) {
        const strengthDisplay = document.getElementById('passwordStrength');
        let strength = 0;

        if (/[a-z]/.test(password)) strength++;
        if (/[A-Z]/.test(password)) strength++;
        if (/[0-9]/.test(password)) strength++;
        if (/[^a-zA-Z0-9]/.test(password)) strength++;

        if (password.length < 8) {
            strengthDisplay.textContent = 'Nível de Segurança: Baixo';
            strengthDisplay.style.color = 'red';
        } else if (strength === 1 || strength === 2) {
            strengthDisplay.textContent = 'Nível de Segurança: Baixo';
            strengthDisplay.style.color = 'red';
        } else if (strength === 3) {
            strengthDisplay.textContent = 'Nível de Segurança: Médio';
            strengthDisplay.style.color = 'orange';
        } else if (strength === 4) {
            strengthDisplay.textContent = 'Nível de Segurança: Alto';
            strengthDisplay.style.color = 'green';
        }
    }

    function copyPassword() {
        const passwordField = document.getElementById('password');
        passwordField.select();
        document.execCommand('copy');
        alert('Senha copiada para a área de transferência!');
    }

    function togglePasswordVisibility() {
        const passwordField = document.getElementById('password');
        if (passwordInputType === 'password') {
            passwordField.type = 'text';
            passwordInputType = 'text';
        } else {
            passwordField.type = 'password';
            passwordInputType = 'password';
        }
    }
