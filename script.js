const input = document.querySelector("input");

function finalResult() {
    const number = input.value.split("").filter(num => Number.isInteger(parseInt(num))).join("");
    return input.value = number.length > 3 ? `+(${number.substring(0, 3)}) - ${number.substring(3)}` : number;
}

input.addEventListener("input", finalResult);