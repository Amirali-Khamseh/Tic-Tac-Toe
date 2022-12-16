let gameData = [
    [0,0,0],
    [0,0,0],
    [0,0,0],
];
let currentRound = 1;
let editedPlayer = 0;
let activePlayer = 0 ;
const players= [
    {
        name :'',
        symbol:'❌'
    },
    {
        name:'',
        symbol:'⭕'
    }
];

const edit_player1_btn1 = document.querySelector('#edit-player1_btn');
const edit_player1_btn2 = document.querySelector('#edit-player2_btn');
const modal = document.querySelector('.modal') ;
const backDrop= document.querySelector('#backdrop') ;
const cancel = document.querySelector('#cancel-btn');
const form = document.querySelector('form');
const config_Error = document.querySelector('.config-err');
const start = document.querySelector('#start-btn');
const gameBoard= document.querySelector('#game-field');
const listElemenets = document.querySelectorAll('#game-board li');
const activePlayerName = document.querySelector('#active-player');
const winnerMessage = document.querySelector('#game-field article');
const winnerName = document.querySelector('#winner-name');
const timer = document.querySelector('#time');

form.addEventListener('submit',SavePlayerConfig)
backDrop.addEventListener('click',ClosePlayerConfig);
cancel.addEventListener('click',ClosePlayerConfig);
edit_player1_btn1.addEventListener('click',OpenPlayerConfig);
edit_player1_btn2.addEventListener('click',OpenPlayerConfig);
start.addEventListener('click',newGame);

for(let item of listElemenets){
    item.addEventListener('click',selectGameField);
}