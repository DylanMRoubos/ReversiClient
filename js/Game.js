const Game = (function (url) {

    let _url = url;

    const _getCurrentGameState = function () {
        // Game.Model.getGameState()
    }

    // Private function init
    const privateInit = function (afterInit) {        
        setInterval(
            // _getCurrentGameState(),
            2000
        );
        afterInit();
    };
    // Waarde/object geretourneerd aan de outer scope
    return {
        init: privateInit,
    };
})('https://meme-api.herokuapp.com/gimme');