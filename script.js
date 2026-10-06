const button = document.querySelector("#startButton");
const timeline = document.querySelector("#timeline");

button.addEventListener("click", function () {

    timeline.scrollIntoView({
        behavior: "smooth"
    });

});