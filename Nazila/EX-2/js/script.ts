let arrayObj: { fName: string, lName: string }[] = [
    { fName: "Nazila", lName: "Azabdaftar" },
];
const resultName = document.getElementById("resultName") as HTMLElement;

for (let arrayValue of arrayObj) {
    resultName.innerHTML += `
    <p>Welcom ${arrayValue.fName} ${arrayValue.lName}</p>
    `;
}

let neuArrayObjs: Array<{ fName: String, lName: String }> = [
    { fName: "Nazila", lName: "Azabdaftar" },];

const resultRepeat = document.getElementById("resultFullName") as HTMLElement;

for (let i = 0; i < 10; i++) {
    neuArrayObjs.forEach(arrayObj => {
        resultRepeat.innerHTML += `
        ${i}-${arrayObj.fName} ${arrayObj.lName}<br>
        `;
    });
}


let printArrayObjs: Array<{ fName: String, lName: String }> = [
    { fName: "Nazila", lName: "Azabdaftar" },];



const resultPrint = document.getElementById("resultFunction") as HTMLElement;

for (let value of printArrayObjs) {
    for (let i = 0; i < 10; i++) {

        // resultPrint.innerHTML += printName(value.lName,i);
       let int: number=setInterval(function(){
        resultPrint.innerHTML+= printName(value.lName,i);
       },5000);
      
       
    }

}

function printName(lastName: String, no: number) {

    return `${no} - ${lastName}<br>`;

}

