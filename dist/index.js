/**
 * Enable animation
 */
var animationIntervals = [];

const addAnimatedEllipsis = (el) => {
    var counter = 0;
    const renderEllipsis = () => {
        const inner = Array.from('...').map(
            (dot, i) => `<span class="${i === counter ? 'darken' : 'lighten'}">${dot}</span>`
        ).join('');
        el.innerHTML = inner;
        counter = (counter + 1) % 3;
    }
    return setInterval(renderEllipsis, 250);
}

for (el of document.getElementsByClassName("dotty")) {
    animationIntervals.push(addAnimatedEllipsis(el));
}

/**
 * Load hints
 */

const hints = ["[Space]", "[SpaceBar]"];

hints.forEach((hint, i) => {
    setTimeout(
        () => document.getElementById("spaceHint").innerHTML = hint,
        5000 * (i+1)
    )
});

/**
 * Display grafs
 */
const grafs = [
    "par1",
    "par2",
];
var grafIndex = 0;

addEventListener("keydown", (e) => {
    if ( (e.key == " " ||
        e.code == "Space" ||
        e.keyCode == 32
    ) && (
        grafIndex < grafs.length
    ) ) {
        /*
         * Stop animating current ellipses
         */
        for (el of document.getElementsByClassName("dotty")) {
            el.innerHTML = ".";
        }
        animationIntervals.forEach(clearTimeout);
        animationIntervals = [];

        /*
         * Display next graf while available
         */
        const nextGraf = document.createElement("p");
        nextGraf.innerHTML += grafs[grafIndex];
        document.getElementById("app").append(nextGraf)
        grafIndex += 1;
        if (grafIndex < grafs.length) {
            const ellipsis = document.createElement("span");
            ellipsis.classList.add("dotty");
            addAnimatedEllipsis(ellipsis);
            nextGraf.append(ellipsis);
        }
    }
});
