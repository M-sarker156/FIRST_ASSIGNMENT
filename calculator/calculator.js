function calculate() {
    let num1 = parseFloat(document.getElementById("number1").value);
    let num2 = parseFloat(document.getElementById("number2").value);
    let operation = document.getElementById("operation").value;
    let resultDiv = document.getElementById("result-div");

   
    resultDiv.classList.remove("alert-danger");
    resultDiv.classList.add("alert-primary");

    if (isNaN(num1) || isNaN(num2)) {
        resultDiv.innerHTML = "Please enter a valid number";
        resultDiv.classList.remove("alert-primary");
        resultDiv.classList.add("alert-danger");
        return;
    }
    if (operation === "add") {
        resultDiv.innerHTML = `Result: ${num1 + num2}`;
    } else if (operation === "subtract") {
        resultDiv.innerHTML = `Result: ${num1 - num2}`;
    } else if (operation === "multiply") {
        resultDiv.innerHTML = `Result: ${num1 * num2}`;
    } else if (operation === "divide") {
        if (num2 === 0) { 
            resultDiv.innerHTML = "Cannot divide by zero";
            resultDiv.classList.remove("alert-primary");
            resultDiv.classList.add("alert-danger");
        } else {
            resultDiv.innerHTML = `Result: ${num1 / num2}`;
        }
    } else {
        resultDiv.innerHTML = "Invalid Operation";
        resultDiv.classList.remove("alert-primary");
        resultDiv.classList.add("alert-danger");
    }
}
