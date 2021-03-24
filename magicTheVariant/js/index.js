const gameType = {
    freeForAll: ['Free for all', 'Free For All is played just like a regular duel, except that there are more than 2 players', "In any game with more than 2 players. The player going first does not skip their draw step. Each players first mulligan if free, such that they draw seven cards. Remember, a player s cries after mulligans if that player has less than seven cards in their hand."],
    Teams: ['Teams', 'Pick a friend to help you claim victory!', 'Divide players into 2 or more teams of 2 or more.'],
    twoHeadedGiant: ['Two-Headed Giant', 'Play as part of a two-headed entity with your teammate! This format, also known as 2HG, got a boost with the 2018 release of Battlebond.', 'Players are placed in pairs. Each pair sits together, has a shared life total, (usually 30,) and takes a shared turn. Teams also share poison counters. Resources other than life and turns are not shared.'],
    emperorGeneral: ['Emperor-General', '2 or more Emperors battle alongside their trusty Generals.', 'Split players into teams of 3. One player on each team is the Emperor, and the others are Generals. The Emperor sits between the Generals. Generals have a “spell range” of 1, meaning that they can only choose targets that belong to players up to 1 seat away. Emperors have a spell range of 2. Finally, each creature has "{T}: Target teammate gains control of this creature. Play this ability only any time you could play a sorcery." A team loses when its Emperor is eliminated.'] 
    }
const form = document.querySelectorAll('form');
const submitButton = form[0].querySelector('button[type="submit"]');
const modeButton = document.getElementById('gameMode');
const rulesButton = document.getElementById('rules')
const getDataForm = (event) => {
    event.preventDefault();
    let formData = new FormData(form[0]);
    currentPlayers = formData.get('players')

    const gameVariant = (currentPlayers) => {
        if (currentPlayers >= 3) {
            modeButton.innerHTML = gameType.freeForAll[0];
        } else {
            modeButton.innerHTML = gameType.emperorGeneral[0];
        }
    }
    gameVariant(currentPlayers);
}
const printRules = () => {
    let counter = 0;
    if (counter <= 1) {
        rulesButton.innerHTML = gameType.freeForAll[2];
        counter++;
    } else {
        rulesButton.disabled = true;
    }
    
}

submitButton.addEventListener('click', getDataForm)
modeButton.addEventListener('click', printRules)
