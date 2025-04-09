function init(){
    // Get elements
    const alertDiv = document.getElementById('alertMe');
    const button = document.getElementById('alertButton');
    const input = document.getElementById('textInput');
    const header = document.getElementById('outputHeader');

    // Add click event to the "Alert Me" div
    alertDiv.addEventListener('click', function () {
        console.log("Alert Me div was clicked.");
    });

    // Add click event to the button
    button.addEventListener('click', function () {
        const textValue = input.value;

        // Show alert with name and input value
        alert("Lucas Callahan: " + textValue);

        // Update the h2 with input value (without name)
        header.textContent = textValue;
    });
}

window.addEventListener('load', init);
