window.onload = function () {    
    var elems = Array.from(document.querySelectorAll("input[type=text]"));
    elems = elems.concat(Array.from(document.querySelectorAll("textarea")));
    for (var i = 0; i < elems.length; i++) {
        var elem = elems[i];
        elem.addEventListener("keyup", function (evt) {
            replaceChaiWord(evt.srcElement);
        });
        elem.addEventListener("change", function (evt) {
            replaceChaiWord(evt.srcElement);
        });
    }
}

function replaceChaiWord(elem) {
    var oldValue = elem.value;
    var newValue = "";
    for (var j = 0; j < oldValue.length; j++) {
        var chaiWord = findChaiWord(oldValue[j]);
        if (chaiWord) {
            newValue += chaiWord;
        } else {
            newValue += oldValue[j];
        }
    }
    elem.value = newValue;
}

function findChaiWord(word) {
    return chaiData[word];
}