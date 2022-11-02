console.log('Gioco del tris');

let board = [
    ['-', '-', '-'],
    ['-', '-', '-'],
    ['-', '-', '-']
];

$.ajax({
    type: "PUT",
    url: "/board",
    contentType: "application/json",
    data: JSON.stringify(board)
});

let play = function (r, c) {
    console.log(`Hai premuto sulla casella: ${r} ${c}`);
    if (board[r][c] === '-') {
        board[r][c] = 'O';
        console.log("Prima di inviare al server...");
        console.log(board);
        // send the board to the server
        $.ajax({
            type: "PUT",
            url: "/board",
            contentType: "application/json",
            data: JSON.stringify(board)
        });
        // update the web board on the client after receiving the response
        $.getJSON("/board").done(updateBoard);
    }
}

let updateBoard = function(boardResponse) {
    board = boardResponse;
    for (r in board) {
        for (c in board) {
            let symbol = board[r][c];
            if (symbol === 'O') {
                let tile = document.getElementById(`item-${r}-${c}`);
                tile.innerHTML = '<span class="circle"></span>';
            } else if (symbol === 'X') {
                let tile = document.getElementById(`item-${r}-${c}`);
                tile.innerHTML = '<span class="cross"><div class="cross-line cross-line-a"></div><div class="cross-line cross-line-b"></div></span>';
            }
        }
    }
}
// VEDI /Users/claudio/Documents/notes/prjs/scuola-classi/4Cinf/tris
