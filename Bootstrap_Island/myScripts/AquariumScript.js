$(document).ready(function () {
    console.log("ready");
    DrawAquarium();
    DrawCloud(50, 50);
    DrawCloud(300, 25);
    DrawCloud(635, 45);
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

    var sky = ctx.createLinearGradient(0, 0, 0, 50);
    sky.addColorStop(0, "#05b4f6");
    sky.addColorStop(1, "#77d3f6");

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 800, 500);

    ctx.fillStyle = gradientFG;
    ctx.fillRect(0, 450, 800, 500);

    ctx.fillStyle = sky;
    ctx.fillRect(0, 0, 800, 100);





}
function DrawCloud(xCoord, yCoord) {
    var ctx = document.getElementById('aquarium').getContext('2d');

    var x = xCoord;
    var y = yCoord;
    var count = 13;

    for (i = 0; i < count; i++) {

        ctx.moveTo(xCoord, yCoord);
        ctx.beginPath
        ctx.arc(x, y, 10, 0, 2 * Math.PI, false);
        ctx.fillStyle = "white";
        ctx.fill();

        if (i < 3) {
            x = x + 10;
            y = y + 5;
        }
        if (i > 3 && i < 5) {
            x = x + 5;
            y = y - 5;

        }
        if (i > 5 && i < 8) {
            x = x + 5;
            y = y - 5;

        }
        if (i > 8) {
            x = x - 10;
            y = y;
        }

    }
}