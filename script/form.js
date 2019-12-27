var formElement = document.querySelector("form");

console.log(formElement);

formElement.addEventListener("focusin", function (e) {
    var element = e.target;
    if (element.tagName === "INPUT") {
        setTimeout(function () { // na 1000 ms set feedback aan.
            element.classList.add("used");
        }, 1000);
    }
});