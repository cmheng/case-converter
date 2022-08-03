document.getElementById("upper-case").addEventListener("click", function() {
    let textarea = document.querySelector("textarea");
    let value = textarea.value;
    textarea.value = value.toUpperCase();
});

document.getElementById("lower-case").addEventListener("click", function() {
    let textarea = document.querySelector("textarea");
    let value = textarea.value;
    textarea.value = value.toLowerCase();
});

document.getElementById("proper-case").addEventListener("click", function() {
    let textarea = document.querySelector("textarea");
    let value = textarea.value.toLowerCase();
    let words = value.split(" ");
    let newText = "";
    for (let i = 0; i < words.length; i++) {
        newText = newText + toProperCase(words[i]) + " ";
    }
    textarea.value = newText.trim();
});

document.getElementById("sentence-case").addEventListener("click", function() {
    let textarea = document.querySelector("textarea");
    let value = textarea.value.toLowerCase();
    let words = value.split(" ");
    let newText = toProperCase(words[0]) + " ";
    let isNewSentence = false;
    for (let i = 1; i < words.length; i++) {
        if (isNewSentence) {
            newText = newText + toProperCase(words[i]) + " ";
            isNewSentence = false;
        } else {
            newText = newText + words[i].toLowerCase();
            if (newText.charAt(newText.length - 1) === '.') {
                isNewSentence = true;
            }
            newText = newText + " ";
        }
    }
    textarea.value = newText.trim();
});

document.getElementById("save-text-file").addEventListener("click", function() {
    let text = document.querySelector("textarea").value;
    download("text.txt", text);
});

function toProperCase(text) {
    let newText =  text.substring(0, 1).toUpperCase();
    return newText.concat(text.substring(1));
}

function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}