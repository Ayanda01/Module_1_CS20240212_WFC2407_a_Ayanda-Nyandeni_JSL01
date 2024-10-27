function validateSyntax() {
    let input = document.getElementById('petInput').value;
    let result = '';
    
    // Regular expression to match the pattern "pet_" followed by a 4-digit year and pet name
    const regex = /^pet_\d{4}[A-Za-z]+$/;

    // Check if the input matches the regex pattern
    if (regex.test(input)) {
        result = "Valid Syntax";
        document.getElementById('result').className = 'valid';
    } else {
        result = "Invalid Syntax";
        document.getElementById('result').className = 'invalid';
    }

    document.getElementById('result').innerText = result;
}
