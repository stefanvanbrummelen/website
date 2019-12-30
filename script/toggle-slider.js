var toggleSliders = document.querySelectorAll(".toggle-slider");


function switchItem(e) {
    var element = e.target;
    if (element.tagName === "BUTTON") {
        var section = element.parentElement;
        section.classList.toggle("switched");
    }
}

for (var i = 0; i < toggleSliders.length; i++) {

    var toggleSlider = toggleSliders[i];

    toggleSlider.addEventListener("click", switchItem);
}
