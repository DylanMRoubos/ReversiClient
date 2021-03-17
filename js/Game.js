const Game = (function (url) {

    let _url = url;

    const _getCurrentGameState = function () {
        // Game.Model.getGameState()
    }

    const init = function (afterInit) {        
        setInterval(
            // _getCurrentGameState(),
            2000
        );
        afterInit();
    };
    // Waarde/object geretourneerd aan de outer scope
    return {
        init: init,
    };
})('https://meme-api.herokuapp.com/gimme');