function OpenPlayerConfig(e){
    let  clickeButton =  e.target.dataset.playerid;
    editedPlayer =Number(clickeButton);
    modal.style.display='block';
    backDrop.style.display='block'; 
}

function ClosePlayerConfig(){
    modal.style.display='none';
    backDrop.style.display='none';
    config_Error.classList.remove('red');
    config_Error.textContent ='';
    form.children[0].lastElementChild.value='';
}

function SavePlayerConfig(e){
    e.preventDefault();
   
    const formData  = new FormData(e.target);
    const playerName = formData.get('playerName').trim();
   
    if(!playerName){
        config_Error.classList.add('red');
        config_Error.textContent ='‼ Do not leave the field empty 😐‼';
        return;
    }

    const updatedPlayerData = document.getElementById(`player-${editedPlayer}-data`);
    updatedPlayerData.children[1].textContent =playerName;

    players[editedPlayer-1].name =playerName;
    ClosePlayerConfig();
}