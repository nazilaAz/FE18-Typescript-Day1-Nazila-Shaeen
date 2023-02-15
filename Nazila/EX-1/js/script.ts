
let multiArray: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result=document.getElementById("result") as HTMLElement;

for (let i = 1; i <= multiArray.length; i++) {
    for (let j = 1; j <= 10; j++) {
        let multi: number = i * j;
        result.innerHTML +=`
        <p>${i} * ${j} = ${multi}</p><br>
        
        `;
        //console.log(multi);
    }
    result.innerHTML +=`<hr>`;
}
