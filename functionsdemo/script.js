const output = document.getElementById("output");

// 1. Function Declaration
function functionDeclaration() {
    output.innerHTML = " This is a Function Declaration example!";
}

// 2. Function Expression
const functionExpression = function () {
    output.innerHTML = " This is a Function Expression example!";
};

// 3. Arrow Function
const arrowFunction = () => {
    output.innerHTML = " This is an Arrow Function example!";
};

// 4. Parameters Demo
function parametersDemo() {
    function greet(name) {
        output.innerHTML = " Hello, " + name + "! This is Parameters Demo.";
    }
    greet("Student");
}

// 5. Callback Demo
function callbackDemo() {
    function mainFunction(callback) {
        output.innerHTML = " Main function executed!";
        setTimeout(callback, 1000);
    }

    function callbackFunction() {
        output.innerHTML += "<br> Callback function executed!";
    }

    mainFunction(callbackFunction);
}