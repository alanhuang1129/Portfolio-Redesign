let cursor = document.getElementById("cursor");
//Detect touch device
function isTouchDevice() {
    try {
        document.createEvent("TouchEvent");
        return true;
    } catch (e) {
        return false;
    }
}

const move = (e) => {
    try {
        var x = !isTouchDevice() ? e.pageX : e.touches[0].pageX;
        var y = !isTouchDevice() ? e.pageY : e.touches[0].pageY;
    } catch (e) {}
    //set left and top of div based on mouse pos
    cursor.style.left = x + "px";
    cursor.style.top = y + "px";
}

document.addEventListener("mousemove", (e) => {
    move(e);
});
//For touch
document.addEventListener("touchmove", (e) => {
    move(e);
});