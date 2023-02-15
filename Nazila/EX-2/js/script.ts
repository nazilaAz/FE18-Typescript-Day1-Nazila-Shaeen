let arrayObj: { fName: string, lName: string }[] = [
    { fName: "Nazila", lName: "Azabdaftar" },
];
const resultName = document.getElementById("resultName") as HTMLElement;

for (let arrayValue of arrayObj) {
    resultName.innerHTML += `
    <p>Welcom ${arrayValue.fName} ${arrayValue.lName}</p>
    `;
}

let neuArrayObjs: Array<{ fName: String, lName: string }> = [
    { fName: "Nazila", lName: "Azabdaftar" },];

const resultRepeat = document.getElementById("resultFullName") as HTMLElement;

for (let i = 0; i < 10; i++) {
    neuArrayObjs.forEach(arrayObj => {
        resultRepeat.innerHTML +=`
        ${i}-${arrayObj.fName} ${arrayObj.lName}<br>
        `;
    });
}
