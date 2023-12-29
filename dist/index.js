/**
 * Code for hinting
 */

const hints = ["[Space]", "[SpaceBar]"];

hints.forEach((hint, i) => {
    setTimeout(
        () => document.getElementById("spaceHint").innerHTML = hint,
        5000 * (i+1)
    )
});

/**
 * Code for displaying grafs
 */
const grafs = [
    "par1"
    "par2"
];
var parsShown = 0;

addEventListener("keydown", (e) => {
    if (e.key == " " ||
        e.code == "Space" ||
        e.keyCode == 32
    ) {
        console.log('ass');
    }
});
