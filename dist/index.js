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
    `Dearest Jackoweentern (Bernice),\n
    Happy hoeliday`,
    `When u requested that you receive no physical gifts, I laughed once or twice. \
    But later on, when I became your santo, I cried a hundred tears`,
    'I am not an intelligent person, and creativity eludes me at every turn',
    `I tried to write a haunting and mysterious song for you, but I ended up with a loop \
    that kinda sucked, and less respect for Abletone. Then I tried to write a poem you would \
    enjoy, but they all came out as either conveyor buffets of human anatomy, or existential \
    laments which even I couldn't interpret post-facto`,
    `Eventually I realized that I could make you a cool puzzle adventeur`,
    `Then I realized it would suck to have to do a long puzzle adventoro on video, \
    in front of people. So I made it a shorter and less cool adventurd`,
    `In the end, I realized that one thing I have enough of is money, \
    and two things you like are philanthropy and pets, \
    so I'm going to make a donation to Animal Friends in Pittsburgh. \
    It's the best-reviewed no-kill shelter I can find in your area`,
    `I will donate $40 with a match of $40 from me. \
    Please let me know if you want the gift in your name \
    (so you can receive photos of happy shelter animals), \
    or my name (so I can get the photos)`,
    `- James Whong`,
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
        animationIntervals.forEach(clearTimeout);
        animationIntervals = [];
        for (el of document.getElementsByClassName("dotty")) {
            el.innerHTML = ".";
        }

        /*
         * Display next graf while available
         */
        const nextGraf = document.createElement("p");
        nextGraf.innerText = grafs[grafIndex];
        grafIndex += 1;
        if (grafIndex < grafs.length) {
            const ellipsis = document.createElement("span");
            ellipsis.classList.add("dotty");
            animationIntervals.push(addAnimatedEllipsis(ellipsis));
            nextGraf.appendChild(ellipsis);
        }
        document.getElementById("app").append(nextGraf);
    }
});
