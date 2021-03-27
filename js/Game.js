/**
* Module pattern base class to start the Game with gameToken & playertoken
* Sets an update function "refresh boarrd every x miliseconds"
* @author Dylan Roubos
*/
const Game = (function () {

    //Method that will be called every x miliseconds to refresh the game
    const _getCurrentGameState = function () {
        Game.Model.updateGame();
    }

    //Method to init the game by setting default settings in the model + adding te method interval
    const init = function (token, playerToken) {
        // gameRefreshRate = refreshRate;
        Game.Model.setGameToken(token);
        Game.Model.setPlayerToken(playerToken);

        window.setInterval(function(){      
            _getCurrentGameState()            
        }, 2000);
    };
    return {
        init: init,
    };
})();