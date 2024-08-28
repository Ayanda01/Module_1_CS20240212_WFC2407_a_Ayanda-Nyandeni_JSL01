function validateSyntax() {
    let input = document.getElementById('petInput').value;
    let result = ''; // Placeholder for validation result

    // Check if input starts with 'pet_' and is followed by alphanumeric characters
    let regex = /^pet_[a-zA-Z0-9]+$/;

    if (regex.test(input)) {
        result = 'Valid Syntax';
        document.getElementById('result').className = 'valid emoji';
    } else {
        result = 'Invalid Syntax';
        document.getElementById('result').className = 'invalid emoji';
    }

    document.getElementById('result').innerText = result;
}
