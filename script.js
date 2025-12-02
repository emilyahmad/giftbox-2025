const tagBox = document.querySelector(".tag-box");

const tagBox = document.querySelector(".tag-box");
tagBox.addEventListener("click", fallingTag);
function fallingTag() {
    let y = tagBox.offsetTop;

    function fall() {
        y += 5;
        tagBox.style.top = y + "px";
        tagBox.style.transform = "translate(-50%, -50%) rotate(20deg)";

        const rect = tagBox.getBoundingClientRect();
        if (rect.top > window.innerHeight) {
            tagBox.style.display = "none";
            return;
        }

        requestAnimationFrame(fall);
    }

    fall();

}
