const sounds = {
    'w': 'crash',
    'a': 'kick-bass',
    's': 'snare',
    'd': 'tom-1',
    'j': 'tom-2',
    'k': 'tom-3',
    'l': 'tom-4'
};

function handle(key) {
    if (sounds[key]) {
        new Audio(`./sounds/${sounds[key]}.mp3`).play();
    } else {
        console.warn(`No sound mapped for key: ${key}`);
    }
}

document.querySelectorAll(".drum").forEach(button => {
    button.addEventListener("click", function () {
        const keypr = this.innerHTML;
        handle(keypr);
        buttonAnimation(keypr);
    });
});

document.addEventListener("keydown", function (event) {
    const keypr = event.key.toLowerCase();
    handle(keypr);
    buttonAnimation(keypr);
});

function buttonAnimation(keyy) {
    const act_button = document.querySelector("." + keyy);
    if (act_button) {
        act_button.classList.add("pressed");
        setTimeout(function () {
            act_button.classList.remove("pressed");
        }, 200);
    }
}
