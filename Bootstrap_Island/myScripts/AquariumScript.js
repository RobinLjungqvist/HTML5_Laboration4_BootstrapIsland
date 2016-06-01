$(document).ready(function () {
    console.log("ready");
    DrawAquarium();
});

function DrawAquarium() {
    var ctx = document.getElementById('aquarium').getContext('2d');
    var gradient = ctx.createLinearGradient(100, 50, 100, 400);
    gradient.addColorStop(0, "#0a65f3");
    gradient.addColorStop(0.75, "#10356f");
    gradient.addColorStop(1, "#00245b");

    var gradientFG = ctx.createLinearGradient(0, 0, 0, 500);
    gradientFG.addColorStop(0, "#004e27");
    gradientFG.addColorStop(0.75, "#03331b");
    gradientFG.addColorStop(1, "#051f12");

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 800, 500);

    ctx.fillStyle = gradientFG;
    ctx.fillRect(0, 400, 800, 500);

}