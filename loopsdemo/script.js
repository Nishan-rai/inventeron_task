const output = document.getElementById("output");

function forLoop() {
    let result = "";
    for (let i = 1; i <= 5; i++) {
        result += i + " ";
    }
    output.innerHTML = "For Loop Output: " + result;
}

function whileLoop() {
    let i = 1;
    let result = "";
    while (i <= 5) {
        result += i + " ";
        i++;
    }
    output.innerHTML = "While Loop Output: " + result;
}

function doWhileLoop() {
    let i = 1;
    let result = "";
    do {
        result += i + " ";
        i++;
    } while (i <= 5);
    output.innerHTML = "Do While Output: " + result;
}

function forOfLoop() {
    let arr = ["A", "B", "C"];
    let result = "";
    for (let value of arr) {
        result += value + " ";
    }
    output.innerHTML = "For...of Output: " + result;
}

function forInLoop() {
    let obj = {name: "JS", type: "Language", level: "Easy"};
    let result = "";
    for (let key in obj) {
        result += key + ": " + obj[key] + " | ";
    }
    output.innerHTML = "For...in Output: " + result;
}

function breakDemo() {
    let result = "";
    for (let i = 1; i <= 5; i++) {
        if (i === 3) break;
        result += i + " ";
    }
    output.innerHTML = "Break Demo (Stops at 3): " + result;
}

function continueDemo() {
    let result = "";
    for (let i = 1; i <= 5; i++) {
        if (i === 3) continue;
        result += i + " ";
    }
    output.innerHTML = "Continue Demo (Skips 3): " + result;
}

function nestedLoop() {
    let result = "";
    for (let i = 1; i <= 3; i++) {
        for (let j = 1; j <= 3; j++) {
            result += `(${i},${j}) `;
        }
        result += "<br>";
    }
    output.innerHTML = "Nested Loop Output:<br>" + result;
}