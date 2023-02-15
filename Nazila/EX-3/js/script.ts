let newArray: Array<String> =
    ["Demetre", "Sanford", "Rhody", "Winston", "Malory"];

const resultId = document.getElementById("resultId") as HTMLElement;

for (let arrIndex in newArray) {
    resultId.innerHTML += `
    <p>${newArray[arrIndex]} Index is- ${arrIndex}<br></p>
`;
}

for (let arrValue of newArray) {
    resultId.innerHTML += `
    <p>${arrValue}<br></p>
`;
}


let objArray: Array<String> =
    ["Demetre", "Sanford", "Rhody", "Winston", "Malory"];
const resultKeyValue = document.getElementById("resultKeyValue") as HTMLElement;

for (let [key, value] of Object.entries(objArray)) {
    resultKeyValue.innerHTML += `${value} is ${key}<br>`;
}