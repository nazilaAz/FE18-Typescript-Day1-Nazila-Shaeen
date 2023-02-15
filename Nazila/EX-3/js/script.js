var newArray = ["Demetre", "Sanford", "Rhody", "Winston", "Malory"];
var resultId = document.getElementById("resultId");
for (var arrIndex in newArray) {
    resultId.innerHTML += "\n    <p>".concat(newArray[arrIndex], " Index is- ").concat(arrIndex, "<br></p>\n");
}
for (var _i = 0, newArray_1 = newArray; _i < newArray_1.length; _i++) {
    var arrValue = newArray_1[_i];
    resultId.innerHTML += "\n    <p>".concat(arrValue, "<br></p>\n");
}
var objArray = ["Demetre", "Sanford", "Rhody", "Winston", "Malory"];
var resultKeyValue = document.getElementById("resultKeyValue");
for (var _a = 0, _b = Object.entries(objArray); _a < _b.length; _a++) {
    var _c = _b[_a], key = _c[0], value = _c[1];
    resultKeyValue.innerHTML += "".concat(value, " is ").concat(key, "<br>");
}
