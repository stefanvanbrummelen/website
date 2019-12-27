var rating = document.querySelector("#beoordeling footer");
var ratingButtons = document.querySelectorAll(".beoordeling")
console.log(ratingButtons)
ratingButtons.forEach(button => {
    console.log(button)
    button.addEventListener("click",()=>{
    overlay.classList.remove("hidden")
})})
var rating_buttons = document.querySelectorAll("#beoordeling footer button");

var overlay = document.getElementById("beoordeling");

console.log(rating_buttons);

rating.addEventListener("click", function (e) {
    var element = e.target;
    if (element.tagName === "BUTTON") {
        var value = element.value;
        console.log("if element is button ", rating_buttons.length)

        for (var i = 0; i < rating_buttons.length; i++) {
            var button = rating_buttons[i];
            if (i <= value) {
                button.classList.add("selected");
            } else {
                button.classList.remove("selected");
            }


        }
        setTimeout(function () {
            overlay.classList.add("hidden");
        }, 1000)
    }

});



overlay.addEventListener("click", function (e) {
    var element = e.target;
    if (element == overlay) {
        element.classList.add("hidden");
    }
});


document.querySelector("#beoordeling article > button").addEventListener("click", function (e) {
    overlay.classList.add("hidden");
});