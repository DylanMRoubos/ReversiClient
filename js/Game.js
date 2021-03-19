const Game = (function (token) {

    let _token = token;

    const _getCurrentGameState = function () {
        // Game.Model.getGameState()
        console.log("refresh");
        Game.Model.updateGame(_token);
    }

    const init = function () {
        window.setInterval(function(){      
            _getCurrentGameState()            
        }, 2000);
        afterInit();
    };
    // Waarde/object geretourneerd aan de outer scope
    return {
        init: init,
    };
})('d2dd4b51-c863-4dd7-9daa-060ebc38a569');