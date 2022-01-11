const moonPath = "M36 80.5C36 124.959 85 161 79.5 161C35.5934 161 0 124.959 0 80.5C0 36.0411 35.5934 0 79.5 0C94 0 36 36.0411 36 80.5Z"
fill = "#F3DC09";

const sunPath = "M169 80.5C169 124.959 131.168 161 84.5 161C37.8319 161 0 124.959 0 80.5C0 36.0411 37.8319 0 84.5 0C131.168 0 169 36.0411 169 80.5Z";

const darkMode = document.querySelector('#darkMode');
let toggle = false;

darkMode.addEventListener("click", () => {
    //anime.js
    //setup timeline
    const timeline = anime.timeline({
        duration: 800,
        easing: "easeOutExpo"
    });
    //diff animations to timeline
    timeline
        .add({
            targets: ".sun",
            d: [{
                value: toggle ? sunPath : moonPath
            }]
        })
        .add({
            targets: "#darkMode",
            rotate: toggle ? 220 : 320
        }, '-= 350')
        .add({
            targets: "section",
            backgroundColor: toggle ? "rbg(0,0,0)" : "rgb(8, 46, 46);",
            color: toggle ? "rgb(0,0,0)" : "rgb(255,255,255)"
        }, '-= 700')
        .add({
            targets: "h1",
            Text: "Light Mode"
        }, '-= 700');

    //turncoat
    if (!toggle) {
        toggle = true;
    } else {
        toggle = false;
    }

});