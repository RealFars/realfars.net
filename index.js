//:^3

let clickCount = 0;

document.getElementById("RatImage").addEventListener("click", function() {
    clickCount++;

    document.getElementById("header").textContent = "Counter:";
        document.getElementById("header2").textContent = clickCount.toString()
});
