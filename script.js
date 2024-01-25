let currentBoard = ["r","n","b","q","k","b","n","r","p","p","p","p","p","p","p","p","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","P","P","P","P","P","P","P","P","R","N","B","Q","K","B","N","R"];
let puzzleBoards = [["x","k","x","x","x","x","x","x","x","p","p","x","x","x","x","x","p","x","x","b","x","x","x","x","x","x","x","p","x","x","x","R","x","x","x","B","p","P","x","P","x","x","x","x","x","x","r","x","P","P","x","x","x","x","x","x","K","x","x","x","x","x","x", "x"],
["r", "x", "b", "x", "x", "x", "x", "x", "p", "x", "x", "x", "x", "x", "x", "R", "x", "x", "x", "x", "x", "k", "p", "x", "x", "x", "x", "x", "p", "x", "N", "x", "x", "x", "x", "x", "x", "P", "x", "x", "q", "p", "x", "x", "x", "x", "x", "P", "x", "x", "x", "x", "x", "x", "K", "x", "x", "x", "x", "x", "x", "x", "x", "x"],
["k", "x", "x", "x", "x", "x", "n", "r", "p", "x", "B", "r", "x", "p", "p", "p", "b", "x", "x", "x", "p", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "P", "x", "P", "x", "x", "x", "x", "x", "x", "x", "x", "x", "K", "x", "x", "x", "x", "x", "x", "x", "x", "P", "P", "P", "x", "R", "x", "x", "x", "x", "x", "x"],
["N", "n", "x", "x", "k", "x", "x", "r", "x", "x", "x", "x", "n", "p", "p", "p", "p", "x", "x", "x", "p", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "P", "x", "x", "P", "x", "P", "x", "B", "x", "x", "R", "x", "P", "x", "x", "b", "x", "x", "P", "x", "x", "x", "x", "b", "x", "x", "x", "K", "x", "x", "x"],
["x", "x","x","x","x","x", "k", "x", "x", "x", "x", "x", "x", "x", "p", "p", "x", "p", "x", "N", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "p", "x", "x", "x", "x", "x", "x", "x", "x", "P", "R", "x", "x", "x", "x", "P", "x", "n", "x", "x", "x", "x", "r", "x", "x", "x", "K", "x", "x", "x", "x", "x"],
["x", "x", "x", "r", "x", "x", "k", "x", "x", "x", "p", "x", "x", "p", "p", "p", "p", "b", "x", "p", "x", "x", "x", "x", "x", "x", "p", "Q", "q", "x", "x", "P", "x", "x", "x", "x", "x", "x", "x", "x", "x", "P", "P", "x", "x", "R", "x", "x", "P", "x", "x", "K", "x", "P", "P", "x", "x", "x", "x", "x", "x", "x", "x", "x"],
["r","n","b","k","q","b","x","r","p","p","p","x","p","p","x","p","x","x","x","x","x","x","x","x","x","x","x","N","x","x","n","x","x","x","x","P","x","x","x","x","x","x","Q","x","x","x","x","x","P","P","P","x","P","P","P","P","R","x","x","K","x","B","N","R"],
["r", "x", "x", "q", "k", "x", "n", "r", "p", "p", "p", "x", "x", "p", "p", "x", "x", "x", "n", "p", "x", "x", "x", "p", "x", "x", "b", "x", "p", "x", "x", "x", "x", "x", "B", "x", "P", "x", "x", "x", "x", "x", "x", "P", "B", "Q", "x", "x", "P", "P", "P", "N", "x", "P", "P", "P", "R", "x", "x", "x", "x", "R", "K", "x"],
["r", "n", "x", "x", "x", "x", "k", "r", "x", "x", "R", "x", "x", "x", "x", "x", "p", "x", "x", "x", "x", "x", "B", "p", "q", "p", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "P", "P", "P", "x", "x", "x", "x", "R", "x", "K", "x"],
["x", "k", "x", "x", "x", "x", "x", "r", "p", "p", "x", "r", "x", "p", "p", "x", "x", "x", "x", "x", "x", "n", "x", "x", "x", "N", "x", "x", "x", "x", "x", "x", "x", "x", "x", "Q", "x", "x", "x", "p", "x", "P", "x", "x", "x", "x", "x", "x", "P", "K", "P", "x", "x", "P", "x", "x", "x", "x", "x", "x", "x", "x", "x", "q"],
["R", "x", "x", "x", "x", "r", "k", "x", "x", "x", "x", "x", "x", "p", "x", "p", "x", "x", "x", "p", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "K", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "r", "R", "x", "x", "x", "x", "x", "x", "x"],
["x", "x", "x", "x", "x", "x", "R", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "K", "x", "k", "x", "x", "x", "x", "x", "x", "p", "x", "x", "x", "x", "x", "x", "x", "x", "p", "x", "x", "x", "x", "x", "p", "r", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x"],
["x", "x", "k", "r", "x", "x", "n", "r", "Q", "b", "x", "x", "p", "x", "b", "p", "P", "x", "x", "x", "p", "p", "p", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "p", "P", "x", "x", "x", "x", "x", "x", "K", "x", "x", "x", "x", "x", "N", "x", "P", "x", "x", "x", "P", "P", "P", "q", "x", "x", "x", "x", "q", "x", "R"],
["x", "r", "x", "x", "x", "x", "x", "x", "x", "x", "R", "x", "x", "x", "p", "x", "p", "x", "x", "k", "p", "x", "x", "p", "B", "x", "x", "x", "p", "x", "x", "n", "x", "x", "x", "x", "P", "x", "x", "x", "x", "x", "x", "r", "x", "x", "x", "x", "P", "x", "x", "x", "x", "b", "P", "P", "K", "x", "R", "x", "x", "x", "x", "x"],
["r", "x", "x", "q", "x", "r", "k", "x", "p", "p", "p", "x", "n", "p", "x", "p", "x", "x", "n", "p", "x", "x", "p", "Q", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "P", "x", "b", "x", "x", "x", "N", "B", "x", "N", "x", "x", "P", "P", "P", "x", "x", "P", "P", "P", "R", "x", "x", "x", "x", "R", "K", "x"],
["x", "r", "x", "x", "x", "x", "x", "x", "x", "P", "R", "x", "x", "x", "x", "x", "x", "P", "x", "x", "x", "x", "p", "k", "x", "P", "x", "p", "P", "p", "x", "p", "x", "x", "x", "x", "x", "x", "x", "P", "x", "x", "x", "x", "x", "x", "P", "x", "p", "x", "x", "x", "q", "x", "x", "x", "Q", "x", "x", "x", "x", "x", "x", "K"],
["r", "x", "x", "q", "k", "b", "x", "r", "p", "p", "x", "n", "n", "p", "p", "p", "x", "x", "x", "p", "x", "x", "x", "x", "x", "x", "x", "x", "p", "N", "x", "x", "x", "x", "x", "x", "P", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "P", "P", "P", "x", "x", "P", "P", "P", "R", "N", "B", "Q", "K", "x", "x", "R"],
["r", "q", "x", "x", "x", "b", "k", "x", "x", "x", "x", "x", "x", "p", "p", "p", "x", "x", "x", "x", "p", "x", "x", "x", "x", "x", "x", "p", "x", "x", "x", "N", "p", "x", "p", "P", "x", "x", "x", "x", "x", "r", "P", "x", "x", "x", "R", "P", "x", "P", "Q", "x", "x", "P", "P", "x", "x", "R", "x", "x", "x", "x", "x", "K"],
["x", "r", "r", "x", "x", "x", "x", "k", "p", "x", "x", "x", "x", "x", "p", "p", "x", "x", "x", "R", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "Q", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "P", "P", "P", "x", "x", "x", "q", "P", "x", "x", "K", "R", "x", "x", "x", "x"],
["x", "x", "x", "x", "x", "x", "x", "r", "x", "x", "x", "x", "x", "p", "p", "x", "x", "x", "x", "p", "x", "x", "x", "p", "x", "x", "x", "q", "p", "x", "x", "x", "n", "x", "k", "x", "x", "x", "x", "x", "P", "x", "x", "x", "x", "x", "x", "P", "x", "Q", "P", "x", "x", "P", "x", "P", "R", "x", "x", "x", "x", "K", "x", "x"],
["r", "x", "x", "q", "k", "b", "x", "r", "p", "p", "x", "n", "p", "p", "p", "x", "x", "x", "p", "x", "x", "n", "x", "p", "x", "x", "x", "x", "x", "x", "N", "x", "x", "x", "x", "P", "N", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "P", "P", "P", "x", "Q", "P", "P", "P", "R", "x", "B", "x", "K", "x", "x", "R"],
["r", "x", "b", "q", "x", "r", "k", "x", "p", "x", "p", "x", "x", "p", "p", "R", "x", "x", "x", "x", "x", "x", "P", "x", "x", "N", "x", "x", "n", "x", "x", "x", "x", "x", "p", "x", "P", "x", "x", "x", "x", "x", "x", "P", "x", "x", "x", "x", "P", "P", "P", "x", "x", "K", "P", "x", "R", "x", "x", "Q", "x", "x", "x", "x"],
["r", "x", "x", "x", "x", "k", "x", "r", "p", "p", "N", "x", "x", "p", "x", "p", "x", "x", "n", "x", "x", "x", "p", "x", "x", "p", "x", "x", "R", "x", "x", "x", "x", "x", "b", "x", "x", "x", "x", "x", "x", "x", "x", "x", "B", "P", "K", "x", "x", "x", "x", "x", "x", "x", "P", "P", "x", "x", "x", "q", "R", "x", "x", "x"],
["r", "x", "x", "q", "x", "x", "x", "x", "x", "p", "p", "x", "x", "R", "x", "x", "x", "x", "n", "p", "p", "x", "k", "P", "x", "x", "x", "x", "p", "x", "x", "x", "p", "x", "x", "x", "P", "x", "x", "x", "x", "x", "N", "P", "x", "x", "x", "x", "P", "P", "P", "x", "x", "x", "r", "x", "x", "x", "K", "x", "x", "x", "x", "R"]
];
const puzzleInfo = [[173, 230, 275, 333, 370, 440, 474, 505, 595, 611, 682, 712, 779, 826, 882, 1080, 1195, 1227, 1351, 1376, 1588, 1617, 1762, 1961], ["Backrank Mate In 1", "Rook and Knight", "Rook and Bishop", "Mate In 2", "Backrank Mate With Knight", "Mate In 3", "Protection From Knight", "Protection From Bishop", "Two Rooks", "Queen and Knight", "Rook Mate In 2", "Kings Control Squares", "Protection From Pawn", "Doubled Rooks", "Unstoppable Attack", "Use The Diagonal", "Knight Smothered Mate", "Pinned Pawn", "Sacrificial Mate", "Mate in 1", "Pinned and Smothered", "Sacrifice THE ROOK", "4 Piece Checkmate", "Rook Mate In 3"], [["h5→h8"], ["h7→f7"], ["b1→b8"], ["a8→c7", "d3→d8"], ["c3→c8"], ["d5→f7", "f7→f8", "f3→f8"], ["f6→f2"], ["f3→f7"], ["e1→e8"], ["d4→a7", "a7→a8"], ["a1→g1", "a8→f8"], ["g8→h8"], ["a7→b7"], ["c1→c6"], ["f3→g5", "h6→h7"], ["a1→c1", "c1→d2"], ["f5→d6"], ["h5→f6", "c2→h7"], ["c4→c8", "d6→d8", "d1→d8"], ["b2→b4"], ["e4→d6", "b2→b4", "b2→b4"], ["h7→h8", "d1→h5", "h5→h7"], ["e3→h6", "e5→e8", "e1→e8"], ["f7→g7", "h1→f1", "f1→f2"]]];
//[[ratings], [descriptions], [hints]]
let puzzleCount = 24;
let randomPuzzle = 0;
let allSolutionsResponses = [[[[32], [16], [58], [1, 44], [43], [28, 14, 46], [43], [46], [61], [36, 9], [57, 1], [7], [9], [59], [46, 24], [57, 59], [30], [32, 51], [35, 20, 60], [50], [37], [16, 60, 32], [45, 29, 61], [14, 64, 62]], [[8], [14], [2], [11, 4], [3], [14, 6, 6], [11], [14], [5], [9, 1], [63, 6], [8], [10], [19], [31, 16], [59, 52], [20], [22, 16], [3, 4, 4], [34], [20], [8, 32, 16], [24, 5, 5], [15, 62, 54]], [[], [], [], [5], [], [7, 4], [], [], [], [2], [7], [], [], [], [14], [53], [], [7], [2, 3], [], [], [7, 8], [6, 1], [23, 55]], [[], [], [], [6], [], [8, 6], [], [], [], [3], [8], [], [], [], [22], [52], [], [8], [3, 4], [], [], [8, 7], [7, 5], [22, 54]]], [[32], [8], [5], [6]]];
//[[[all puzzles first solutions], [all puzzles second solutions], [all puzzles first responses], [all puzzles second responses]], [[current first solutions], [current second solutions], [current first responses], [current second responses]]];
let hintShown = false;
let move = 0;
let correct = true;
let playerRating = 100;
let prevRating = 100;
let turn = "b";
let p1 = 0;
let p2 = 0;
let currentPiece = "r"; 
let boardMoves = true;
let totalBoardPositions = 0;
let currentBoardPosition = 0;
let boardPositions = [];
let puzzleCompleted = false;
let moveCount = 0;
let prevMovesStr = "";
let letter = 0;
let letterStr = "";
let prevMovesPadding = 0;
let lines = 1;
let prevPosition = 0;
let kingCheck = false;

function hintRequested(){
    document.getElementById("hintDisplayContent").innerHTML = puzzleInfo[2][randomPuzzle-1][move-1];
} 

function puzzleSetup(){
    hideDots();
    p1 = 0;
    p2 = 0;
    currentBoardPosition = 0;
    totalBoardPositions = 0;
    boardPositions = [];
    prevMovesStr = "";
    boardMoves = true;
    puzzleCompleted = false;
    prevRating = playerRating;
    randomPuzzle = Math.ceil(Math.random() * puzzleCount);
    currentBoard = puzzleBoards[randomPuzzle-1].slice();
    for(let i=0;i<4;i++){
        allSolutionsResponses[1][i] = allSolutionsResponses[0][i][randomPuzzle-1].slice();
    }
    correct = true;
    boardSetup();
    document.getElementById("ratingContent").innerHTML = "Puzzle Rating:<br>" + puzzleInfo[0][randomPuzzle-1];
    document.getElementById("puzzleID").innerHTML = puzzleInfo[1][randomPuzzle-1] + " | Moves Correct: " + "0/" + allSolutionsResponses[0][0][randomPuzzle-1].length;
    document.getElementById("pRatingContent").innerHTML = "Player Rating:<br>" + playerRating;
    document.getElementById("hintDisplayContent").innerHTML = "Hint Will Display Here";
    document.getElementById("puzzleStatusContent").innerHTML = "Puzzle Status:<br>In Progress";
    document.getElementById("hintButtonBoxRight").style.backgroundColor = "black";
    document.getElementById("prevMovesContent").innerHTML = "Previous Moves Will Display Here";
    lines = 1;
    prevMovesPadding = 68 - 12 * lines;
    let paddingString = "";
    paddingString = prevMovesPadding.toString();
    document.getElementById("prevMovesContent").style.marginTop = paddingString + "px";
    document.getElementById("skipContentText").innerHTML = "Skip<br>Puzzle";
    document.getElementById("hintDisplayContent").innerHTML = "Hint Will Display Here";
    document.getElementById("hintButtonContent").value = "Click To Show Hint";
    lines = 0;
    move = 1;
    moveCount = 0;
    hintShown = false;
    playerRating = prevRating;
    document.getElementById("pRatingContent").innerHTML = "Player Rating:<br>" + playerRating;
    turn = "w";
    p1 = 0;
    p2 = 0;
}

function puzzleComplete(){
    document.getElementById("skipContentText").innerHTML = "Next<br>Puzzle";
    document.getElementById("hintDisplayContent").innerHTML = "Solution Will Display Here";
    document.getElementById("hintButtonContent").value = "Click To Show Solution";
    puzzleCompleted = true;
    if(correct == true){
        boardMoves = false;
        let difference = puzzleInfo[0][randomPuzzle-1]-playerRating;
        let change = 10+Math.round(difference/10);
        if(change<5){
            change = 5;
        }
        playerRating += parseInt(change);
    }
    else if(correct == false){
        playerRating -=Math.round((Math.max(playerRating, puzzleInfo[0][randomPuzzle-1])-Math.min(playerRating, puzzleInfo[0][randomPuzzle-1]))/10);
        boardMoves = false;
        document.getElementById("puzzleStatusContent").innerHTML = "Puzzle Status:<br>Illegal Or Incorrect Move";
        document.getElementById("hintButtonBoxRight").style.backgroundColor = "red";
    }
    if(playerRating < 100){
        playerRating = 100;
    }
    document.getElementById("pRatingContent").innerHTML = "Player Rating:<br>" + playerRating;
}

function boardSetup(){
    if(p1 == allSolutionsResponses[1][0][move-1] && p2 == allSolutionsResponses[1][1][move-1] && move>0){
        if(move == allSolutionsResponses[1][0].length){
            puzzleComplete();
            document.getElementById("puzzleStatusContent").innerHTML = "Puzzle Status:<br>Puzzle Correct";
            document.getElementById("hintButtonBoxRight").style.backgroundColor = "green";
            moveCount += 1;
            prevMovesStr += puzzleInfo[2][randomPuzzle-1][move-1] + "<br>";
            lines += 1;
            document.getElementById("prevMovesContent").innerHTML = prevMovesStr;
            prevMovesPadding = 68 - 12 * lines;
            let paddingString = "";
            paddingString = prevMovesPadding.toString();
            document.getElementById("prevMovesContent").style.marginTop = paddingString + "px";
        }
        else if(move > 0){
            boardPositions.push(currentBoard.slice());
            totalBoardPositions += 1;
            currentBoardPosition += 1;
            currentBoard[allSolutionsResponses[1][3][move-1]-1] =  currentBoard[allSolutionsResponses[1][2][move-1]-1];
            currentBoard[allSolutionsResponses[1][2][move-1]-1] = "x";
            prevMovesStr += puzzleInfo[2][randomPuzzle-1][move-1] + "<br>";
            lines += 1;
            letterStr = String.fromCharCode(96 + allSolutionsResponses[1][2][move-1]%8);
            if(letterStr == "`"){
                letterStr = "h"
            }
            prevMovesStr += letterStr;
            letter = 7-Math.floor((allSolutionsResponses[1][3][move-1]-1)/8)+1;
            letterStr = letter.toString();
            prevMovesStr += letterStr + "→";
            letter = (allSolutionsResponses[1][3][move-1]%8);
            letterStr = String.fromCharCode(96 + letter);
            if(letterStr == "`"){
                letterStr = "h"
            }
            prevMovesStr += letterStr;
            letter = 7-Math.floor((allSolutionsResponses[1][3][move-1]-1)/8)+1;
            letterStr = letter.toString();
            prevMovesStr += letterStr + "<br>";
            lines += 1;
            prevMovesPadding = 68 - 12 * lines;
            let paddingString = "";
            paddingString = prevMovesPadding.toString();
            document.getElementById("prevMovesContent").style.marginTop = paddingString + "px";
            move += 1;
            document.getElementById("prevMovesContent").innerHTML = prevMovesStr;
            document.getElementById("hintDisplayContent").innerHTML = "Hint Will Display Here";
            hintShown = false;
            moveCount += 1;
        }
    }
    else if(p1 > 0){
        correct = false;
        puzzleComplete();
    }
    if(correct == true){
        arrayBoard()
        if(turn == "b"){
            turn = "w";
        }
        else if(turn == "w"){
            turn = "b";
        }
        boardPositions.push(currentBoard.slice())
        totalBoardPositions += 1;
        currentBoardPosition += 1;
        if(moveCount > allSolutionsResponses[1][0].length){
            moveCount = allSolutionsResponses[1][0].length;
        }
        document.getElementById("puzzleID").innerHTML = puzzleInfo[1][randomPuzzle-1] + " | Moves Correct: " + moveCount + "/" + allSolutionsResponses[0][0][randomPuzzle-1].length;
    }
}

function squareClicked(id){
    hideDots();
    if(boardMoves == true){
        if(p1 == 0){
            if(currentBoard[parseInt(id)-1] != "x"){
                p1 = parseInt(id);
                legalMoves();
            }
        } 
        else{
            p2 = parseInt(id);
            if(p2 != p1){
                if(currentBoard[p1-1] == currentBoard[p1-1].toUpperCase()){
                    currentPiece = currentPiece.toLowerCase();
                    currentBoard[p2-1] =  currentBoard[p1-1];
                    currentBoard[p1-1] = "x";
                    boardSetup();
                }
                p1 = 0;
                p2 = 0;
            }
            else if(p1 == p2){
                p1 = 0;
                p2 = 0;
            }
        }
    }
}

function back(){
    if(currentBoardPosition > 1){
        currentBoardPosition -= 1;
        currentBoard = boardPositions[currentBoardPosition-1].slice();
        boardMoves = false;
        arrayBoard()
    }
}

function forward(){
    if(currentBoardPosition < totalBoardPositions){
        currentBoardPosition += 1;
        currentBoard = boardPositions[currentBoardPosition-1].slice();
        boardMoves = false;
        if(currentBoardPosition == totalBoardPositions && puzzleCompleted == false){
            boardMoves = true;
        }
        arrayBoard()
    }

}

function fback(){
    currentBoardPosition = 1;
    currentBoard = boardPositions[currentBoardPosition-1].slice();
    boardMoves = false;
    arrayBoard()
}

function fforward(){
    currentBoardPosition = totalBoardPositions;
    currentBoard = boardPositions[currentBoardPosition-1].slice();
    boardMoves = false;
    if(currentBoardPosition == totalBoardPositions && puzzleCompleted == false){
        boardMoves = true;
    }
    arrayBoard()
}

function legalMoves(){
    hideDots();
    stop = false;
    if(currentBoard[p1-1] == "P"){
        if(currentBoard[p1-9] == "x"){
            document.getElementById("dot" + (p1-8)).style.visibility = "visible";
        }
        else{
            stop = true;
        }
        if(currentBoard[p1-17] == "x" && stop == false){
            if(Math.floor((p1-1)/8) == 6){
                document.getElementById("dot" + (p1-16)).style.visibility = "visible";
            }
        }
        for(let i=0;i>-3;i-=2){
            if(currentBoard[p1-7+i-1] == currentBoard[p1-7+i-1].toLowerCase() && currentBoard[p1-7+i-1] != "x"){
                document.getElementById("dot" + (p1+(-7+i))).style.visibility = "visible";
            }
        } //pawn
    }
    if(currentBoard[p1-1] == "R" || currentBoard[p1-1] == "Q"){
        for(let j=-1;j<2;j+=2){
            stop = false;
            for(let i=8*j;i!=64*j;i += 8*j){
                if(stop == false){
                    if(p1-i > 0 && p1-i<65){
                        if(currentBoard[p1-i-1] == "x"){
                            document.getElementById("dot" + (p1-i)).style.visibility = "visible";
                        }
                        else if(currentBoard[p1-i-1] == currentBoard[p1-i-1].toLowerCase()){
                            document.getElementById("dot" + (p1-i)).style.visibility = "visible";
                            stop = true;
                        }
                        else{
                            stop = true;
                        }
                    }
                }
            }//up
            stop = false;
            for(let i=j;i!=8*j;i+=j){
                if(stop == false){
                    if(Math.floor((p1+i-1)/8) == Math.floor((p1-1)/8)){
                        if(currentBoard[p1+i-1] == "x"){
                            document.getElementById("dot" + (p1+i)).style.visibility = "visible";
                        }
                        else if(currentBoard[p1+i-1] == currentBoard[p1+i-1].toLowerCase()){
                            document.getElementById("dot" + (p1+i)).style.visibility = "visible";
                            stop = true;
                        }
                        else{
                            stop = true;
                        }
                    }
                }
            }//right
        }
    }
    if(currentBoard[p1-1] == "B" || currentBoard[p1-1] == "Q"){
        for(let j=-1;j<2;j+=2){
            stop = false;
            for(let i=-7*j;i!=-56*j;i -= 7*j){
                if((p1+i)%8 == (j+1)/2){
                    stop = true;
                }
                if(stop == false){
                    if(p1+i > 0 && p1+i <65){
                        if(currentBoard[p1+i-1] == "x"){
                            document.getElementById("dot" + (p1+i)).style.visibility = "visible";
                        }
                        else if(currentBoard[p1+i-1] == currentBoard[p1+i-1].toLowerCase()){
                            document.getElementById("dot" + (p1+i)).style.visibility = "visible";
                            stop = true;
                        }
                        else{
                            stop = true;
                        }
                    }
                }
            } //NE
            stop = false;
            for(let i=-9*j;i!=-72*j;i -= 9*j){
                if(p1+i > 0 && p1+i < 65){
                    if(Math.floor((p1+i-1)/8)-Math.floor((p1+i+8)/8) == -1){
                        if(stop == false){
                            if(p1+i > 0){
                                if(currentBoard[p1+i-1] == "x"){
                                    document.getElementById("dot" + (p1+i)).style.visibility = "visible";
                                }
                                else if(currentBoard[p1+i-1] == currentBoard[p1+i-1].toLowerCase()){
                                    document.getElementById("dot" + (p1+i)).style.visibility = "visible";
                                    stop = true;
                                }
                                else{
                                    stop = true;
                                }
                            }
                        }
                    }
                    else{
                        stop = true;
                    }
                }
            }
        }
    }
    if(currentBoard[p1-1] == "N"){
        for(let j=-1;j<2;j+=2){
            if(currentBoard[p1+10*j-1] != currentBoard[p1+10*j-1].toUpperCase()){
                if((p1+10*j)%8 - p1%8 == -6*j ||(p1+10*j)%8 - p1%8 == 2*j){
                    if(Math.floor((p1+10*j-1)/8) - Math.floor((p1-1)/8) == 1*j){
                        document.getElementById("dot" + (p1+10*j)).style.visibility = "visible";
                    }
                }
            }
            if(currentBoard[p1+17*j-1] != currentBoard[p1+17*j-1].toUpperCase()){
                if((p1+17*j)%8 - p1%8 == -7*j ||(p1+17*j)%8 - p1%8 == 1*j ){
                    if(Math.floor((p1+17*j-1)/8) - Math.floor((p1-1)/8) == 2*j){
                        document.getElementById("dot" + (p1+17*j)).style.visibility = "visible";
                    }
                }
            }
            if(currentBoard[p1+15*j-1] != currentBoard[p1+15*j-1].toUpperCase()){
                if((p1+15*j)%8 - p1%8 == 7*j ||(p1+15*j)%8 - p1%8 == -1*j ){
                    if(Math.floor((p1+15*j-1)/8) - Math.floor((p1-1)/8) == 2*j){
                        document.getElementById("dot" + (p1+15*j)).style.visibility = "visible";
                    }
                }
            }
            if(currentBoard[p1+6*j-1] != currentBoard[p1+6*j-1].toUpperCase()){
                if((p1+6*j)%8 - p1%8 == 6*j ||(p1+6*j)%8 - p1%8 == -2*j ){
                    if(Math.floor((p1+6*j-1)/8) - Math.floor((p1-1)/8) == 1*j){
                        document.getElementById("dot" + (p1+6*j)).style.visibility = "visible";
                    }
                }
            }
        }
    }
    if(currentBoard[p1-1] == "K"){
        for(let j=-1;j<2;j+=2){
            if(p1+1*j<65 && p1+1*j>0){
                if((p1+1*j)%8 - p1%8 == 1*j || (p1+1*j)%8 - p1%8 == -7*j){
                    if(Math.floor((p1+1*j-1)/8) - Math.floor((p1-1)/8) == 0*j){
                        if(currentBoard[p1+1*j-1] != currentBoard[p1+1*j-1].toUpperCase()){
                            kingInCheck(p1+1*j);
                            if(kingCheck == false){
                                document.getElementById("dot" + (p1+1*j)).style.visibility = "visible";
                            }
                        }
                    }
                }
            }
            if(p1+7*j<65 && p1+7*j>0){
                if((p1+7*j)%8 - p1%8 == -1*j || (p1+7*j)%8 - p1%8 == 7*j){
                    if(Math.floor((p1+7*j-1)/8) - Math.floor((p1-1)/8) == 1*j){
                        if(currentBoard[p1+7*j-1] != currentBoard[p1+7*j-1].toUpperCase()){
                            kingInCheck(p1+7*j);
                            if(kingCheck == false){
                                document.getElementById("dot" + (p1+7*j)).style.visibility = "visible";
                            }
                        }
                    }
                }
            }
            if(p1+8*j<65 && p1+8*j>0){
                if((p1+8*j)%8 - p1%8 == 0*j){
                    if(Math.floor((p1+8*j-1)/8) - Math.floor((p1-1)/8) == 1*j){
                        if(currentBoard[p1+8*j-1] != currentBoard[p1+8*j-1].toUpperCase()){
                            kingInCheck(p1+8*j);
                            if(kingCheck == false){
                                document.getElementById("dot" + (p1+8*j)).style.visibility = "visible";
                            }
                        }
                    }
                }
            }
            if(p1+9*j<65 && p1+9*j>0){
                if((p1+9*j)%8 - p1%8 == 1*j || (p1+9*j)%8 - p1%8 == -7*j){
                    if(Math.floor((p1+9*j-1)/8) - Math.floor((p1-1)/8) == 1*j){
                        if(currentBoard[p1+9*j-1] != currentBoard[p1+9*j-1].toUpperCase()){
                            kingInCheck(p1+9*j);
                            if(kingCheck == false){
                                document.getElementById("dot" + (p1+9*j)).style.visibility = "visible";
                            }
                        }
                    }
                }
            }
        }
    }
}

function hideDots(){
    for(let i=1;i<65;i++){
        document.getElementById("dot" + i).style.visibility = "hidden";
    }
}

function kingInCheck(newPosition){
    kingCheck = false;
    for(let j=-1;j<2;j+=2){
        stop = false;
        for(let i=8*j;i!=64*j;i+=8*j){
            if (stop == false){
                if(i+newPosition > 0 && i+newPosition < 65){
                    if(currentBoard[i+newPosition-1] == "r" || currentBoard[i+newPosition-1] == "q"){
                        kingCheck = true;
                        stop = true;
                    }
                    else if(currentBoard[newPosition+i-1] != "x"){
                        stop = true;
                    }
                }
            }
        }
        stop = false
        for(let i=-1*j;i!=-8*j;i -= 1*j){
            if(stop == false){
                if(Math.floor((newPosition+i-1)/8) == Math.floor((newPosition-1)/8)){
                    if(currentBoard[newPosition+i-1] == "r" || currentBoard[newPosition+i-1] == "q"){
                        kingCheck = true;
                    }
                    else if(currentBoard[newPosition+i-1] != "x"){
                        stop = true;
                    }
                }
            }
        }
        if(newPosition+1*j<65){
            if((newPosition+1*j)%8 - newPosition%8 == 1 || (newPosition+1*j)%8 - newPosition%8 == -7){
                if(Math.floor((newPosition+1*j-1)/8) - Math.floor((newPosition-1)/8) == 0){
                    if(currentBoard[newPosition+1*j-1] == "k"){
                        kingCheck = true;
                    }
                }
            }
        }
        if(newPosition+7*j<65){
            if((newPosition+7*j)%8 - newPosition%8 == -1 || (newPosition+7*j)%8 - newPosition%8 == 7){
                if(Math.floor((newPosition+7*j-1)/8) - Math.floor((newPosition-1)/8) == 1*j){
                    if(currentBoard[newPosition+7*j-1] == "k"){
                        kingCheck = true;
                    }
                }
            }
        }
        if(newPosition+8*j<65){
            if((newPosition+8*j)%8 - newPosition%8 == 0){
                if(Math.floor((newPosition+8*j-1)/8) - Math.floor((newPosition-1)/8) == 1*j){
                    if(currentBoard[newPosition+8*j-1] == "k"){
                        kingCheck = true;
                    }
                }
            }
        }
        if(newPosition+9*j<65){
            if((newPosition+9*j)%8 - newPosition%8 == 1 || (newPosition+9*j)%8 - newPosition%8 == -7){
                if(Math.floor((newPosition+9*j-1)/8) - Math.floor((newPosition-1)/8) == 1){
                    if(currentBoard[newPosition+9*j-1] == "k"){
                        kingCheck = true;
                    }
                }
            }
        }
        stop = false;
        for(let i=-7*j;i!=j*-56;i -= 7*j){
            if((newPosition+i)%8 == 1){
                stop = true;
            }
            if(stop == false){
                if(newPosition+i > 0){
                    if(currentBoard[newPosition+i-1] == "b" || currentBoard[newPosition+i-1] == "q"){
                        kingCheck = true;
                        stop = true;
                    }
                    else if(currentBoard[newPosition+i-1] != "x"){
                        stop = true;
                    }
                }
            }
        }
        stop = false;
        for(let i=9*j;i!=72*j;i += 9*j){
            if(newPosition+i > 0 && newPosition+i < 65){
                if(Math.floor((newPosition+i-1)/8)-Math.floor((newPosition+i-10)/8) == 1){
                    if(stop == false){
                        if(newPosition+i > 0){
                            if(currentBoard[newPosition+i-1] == "b" || currentBoard[newPosition+i-1] == "q"){
                                kingCheck = true;
                                stop = true;
                            }
                            else if(currentBoard[newPosition+i-1] != "x"){
                                stop = true;
                            }
                        }
                    }
                }
                else{
                    stop = true;
                }
            }
        }
        if(currentBoard[newPosition-6*j-1] == "n"){
            if((newPosition-6*j)%8 - newPosition%8 == -6 ||(newPosition-6*j)%8 - newPosition%8 == 2 ){
                if(Math.floor((newPosition-6*j-1)/8) - Math.floor((newPosition-1)/8) == -1*j){
                    kingCheck = true;
                }
            }
        }//knight
        if(currentBoard[newPosition-10*j-1] == "n"){
            if((newPosition-10*j)%8 - newPosition%8 == 6 ||(newPosition-10*j)%8 - newPosition%8 == -2 ){
                if(Math.floor((newPosition-10*j-1)/8) - Math.floor((newPosition-1)/8) == -1*j){
                    kingCheck = true;
                }
            }
        }//knight
        if(currentBoard[newPosition-15*j-1] == "n"){
            if((newPosition-15*j)%8 - newPosition%8 == -7 ||(newPosition-15*j)%8 - newPosition%8 == 1 ){
                if(Math.floor((newPosition-15*j-1)/8) - Math.floor((newPosition-1)/8) == -2*j){
                    kingCheck = true;
                }
            }
        }//knight
        if(currentBoard[newPosition-17*j-1] == "n"){
            if((newPosition-17*j)%8 - newPosition%8 == 7 ||(newPosition-17*j)%8 - newPosition%8 == -1 ){
                if(Math.floor((newPosition-17*j-1)/8) - Math.floor((newPosition-1)/8) == -2*j){
                    kingCheck = true;
                }
            }
        }//knight
    }//rook/queen/bishop
    for(let i=0;i>-3;i-=2){
        if(currentBoard[newPosition-7+i-1] == "p"){
            kingCheck = true;
        }//pawn
    } //pawn
}

function arrayBoard(){
    for(let i=0;i<currentBoard.length;i++){
        let currentPiece = currentBoard[i];
        let currentColor = "w";
        if(currentPiece == currentPiece.toLowerCase()){
            currentColor = "b";
        }
        document.getElementById("img" + (i+1)).src = currentColor+ currentPiece.toLowerCase() +".png";
    }
}