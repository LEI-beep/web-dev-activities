function sum() {
    calculate();
    document.getElementById('operator').value = "+";
}

function sub() {
    calculate();
    document.getElementById('operator').value = "-";
}

function mul() {
    calculate();
    document.getElementById('operator').value = "*";
}

function div() {
    calculate();
    document.getElementById('operator').value = "/";
}

function calculate() {
    const display1 = document.getElementById("display1").value;
    const display2 = document.getElementById("display2").value;
    const operator = document.getElementById("operator").value;

    if (operator && display2 !== "") {
        let answer;
        if (operator === "+") {
            answer = Number(display2) + Number(display1);
        } else if (operator === "-") {
            answer = Number(display2) - Number(display1);
        } else if (operator === "*") {
            answer = Number(display2) * Number(display1);
        } else if (operator === "/") {
            answer = Number(display2) / Number(display1);
        }

        document.getElementById('display1').value = answer;
        document.getElementById('display2').value = "0";
    } else {
        document.getElementById('display2').value = display1;
        document.getElementById('display1').value = "0";
    }
}

function equal() {
    calculate();
    document.getElementById('operator').value = "";
}
