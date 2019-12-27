document.addEventListener("DOMContentLoaded",()=>{
var downloadButtons = document.querySelectorAll(".downloadbutton");
downloadButtons.forEach(downloadButton => {
downloadButton.addEventListener("click", function (e) {
    var element = e.target;
    if (!element.classList.contains("downloading")) {
        element.classList.add("downloading");



        var duration = 8000;
        var interval = 100;
        var updates = duration / interval // 80 (MAX amount of updates)
        var currentUpdate = 0; // gaat van 0 t/m 80

        // timer
        var intervalTimer;
        intervalTimer = setInterval(function (element) {

            if (currentUpdate < updates) { // percentage is groter dan 0 en nog geen 100.
                currentUpdate++; // +1 elke keer

                var percentage = Math.floor(currentUpdate / 80 * 100)
                if (percentage != 100) {
                    element.textContent = "Downloading: " + percentage + "%";
                } else {
                    element.textContent = "Gedownload ✓";
                }
            } else {
                clearInterval(intervalTimer); // stopt de timer
            }

        }, interval, element);

    }
});    
})
    
})
