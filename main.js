const equalsButton = document.getElementById("equalsButton");
const resultDiv = document.getElementById("resultDiv");


function calculateResult() {
    const a = Number(document.getElementById("firstOperand").value);
    const b = Number(document.getElementById("secondOperand").value);
    const operator = document.getElementById("action").value;
    const result = document.getElementById("result").textContent;

    if (isNaN(a) || isNaN(b)) {
        alert("Ошибка");
        return;
    } else if (operator === "+") {
        document.getElementById("result").textContent = a + b;
    } else if (operator === "-") {
        document.getElementById("result").textContent = a - b;
    } else if (operator === "*") {
        document.getElementById("result").textContent = a * b;
    } else if (operator === "/") {
        document.getElementById("result").textContent = a / b;
    }

    const newSpan = document.createElement("span");
    newSpan.textContent = result;
    resultDiv.appendChild(newSpan);

    newSpan.addEventListener("click",() => {
        resultDiv.removeChild(newSpan);
    });
    
}

equalsButton.addEventListener("click", calculateResult);
