const Game = (function () {

    let _token;
    let _playerToken;

    const _getCurrentGameState = function () {
        // Game.Model.getGameState()
        console.log("refresh");
        Game.Model.updateGame(_token, _playerToken);
    }

    const init = function (token, playerToken) {
        _token = token;
        _playerToken = playerToken;
        Game.Model.updateGame(_token, _playerToken);
        window.setInterval(function(){      
            _getCurrentGameState()            
        }, 2000);
    };
    return {
        init: init,
    };
})();