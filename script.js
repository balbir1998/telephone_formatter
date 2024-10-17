const input = document.querySelector("input");

function finalResult(value) {
    const number = value.split("").filter(num => Number.isInteger(parseInt(num))).join("");
    return number.length > 3 ? `+(${number.substring(0, 3)}) - ${number.substring(3)}` : number;
}

input.addEventListener("input", () => input.value = finalResult(input.value));