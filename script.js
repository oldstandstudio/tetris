const canvas = document.querySelector("canvas");
const draw = canvas.getContext("2d");

draw.scale(20, 20);

draw.fillStyle = "#9BC1BC";
draw.fillRect(0, 0, canvas.width, canvas.height);

const pieces = [
    [0, 0, 0],
    [1, 1, 1],
    [0, 1, 0]
]

game = () => {
    drawPieces(player.pieces, player.pos);
}

update = () => {
    game();
    requestAnimationFrame(update);
}

drawPieces = (pieces, offset) => {
    pieces.forEach((row, y) => {
        row.forEach ((value, x) => {
            if (value !== 0) {
                draw.fillStyle = "#ED6A5A";
                draw.fillRect(x + offset.x, y + offset.y, 1, 1);
            }
        });
    });
}

const player = {
    pos: {x: 5, y: 5},
    pieces
}

update();