document.getElementById("leftButton").addEventListener("click", function() {
    let event = new KeyboardEvent("keydown", {
        key: "ArrowLeft",
        keyCode: 37,
        code: "ArrowLeft",
        which: 37,
        bubbles: true
    });

    document.getElementById("nutFrame").focus();
    document.getElementById("nutFrame").contentWindow.dispatchEvent(event);
});
