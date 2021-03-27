//TODO: remove the function that do not need to be in this module ()
Game.Model = (function () {

    var game = "";
    var gameToken = "";
    var currentPlayer = "";
    var playerToken = "";

    const getGame = () => {
        return game;
    }
    const getPlayerToken = () => {
        return playerToken;
    }
    const setGameToken = (_gameToken) => {
        gameToken = _gameToken;
    }
    const setPlayerToken = (_playerToken) => {
        playerToken = _playerToken;
    }

    const updateGame = () => {
        _getGameData(gameToken).then(function (data) {
            game = data;

            Game.Data.printboard(game.board);
            Game.Data.printDetails(game);
            Game.Stats.updateStats();

            _checkTurn(game);
        }).catch(function (error) {
            console.log("Error in getting the game data from API");
        })
    }

    var _checkTurn = (game) => {
        if (game.token == null) {
            window.location.replace("https://localhost:5002");
        }
        if (game.finished == true) {
            $("#board").css("opacity", "0.5");
            FeedbackWidget.show("The game has ended and " + game.winner + " has won", Game.Delete.acceptDeleteGame, 1)
            return;
        }
        if (game.currentPlayer == 1) {
            currentPlayer = game.playerToken1;
        } else {
            currentPlayer = game.playerToken2;
        }
        if (currentPlayer != playerToken) {
            $("#board").css("opacity", "0.5");
        }
    }

    const _getGameData = (token) => {
        return new Promise(function (resolve, reject) {
            Game.Data.apicall("https://localhost:5001/api/spel/" + token).then(function (data) {
                if (data != null) {
                    resolve(data);
                    Game.Data.apicall("https://localhost:5001/api/spel/finished/" + token);
                }
            }).catch(function (error) {
                console.log("Error in getting the data 2")
            })
        })
    }
    // Waarde/object geretourneerd aan de outer scope
    return {
        getGame: getGame,
        getPlayerToken: getPlayerToken,
        setGameToken: setGameToken,
        setPlayerToken: setPlayerToken,
        updateGame: updateGame,
    };

})();