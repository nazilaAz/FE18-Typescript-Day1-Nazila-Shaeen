var arrayObj = [
    { fName: "Nazila", lName: "Azabdaftar" },
];
var resultName = document.getElementById("resultName");
for (var _i = 0, arrayObj_1 = arrayObj; _i < arrayObj_1.length; _i++) {
    var arrayValue = arrayObj_1[_i];
    resultName.innerHTML += "\n    <p>Welcom ".concat(arrayValue.fName, " ").concat(arrayValue.lName, "</p>\n    ");
}
var neuArrayObjs = [
    { fName: "Nazila", lName: "Azabdaftar" },
];
var resultRepeat = document.getElementById("resultFullName");
var _loop_1 = function (i) {
    neuArrayObjs.forEach(function (arrayObj) {
        resultRepeat.innerHTML += "\n        ".concat(i, "-").concat(arrayObj.fName, " ").concat(arrayObj.lName, "<br>\n        ");
    });
};
for (var i = 0; i < 10; i++) {
    _loop_1(i);
}
