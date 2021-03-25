Game.Model = (function () {

    var game;
    var currentPlayer;
    var _playerToken;

    const getGame = () => {
        return game;
    }
    const getPlayerToken = () => {
        return _playerToken;
    }

    const updateGame = (token, playerToken) => {
        _getGameData(token).then(function (data) {
            game = data;
            _playerToken = playerToken;      
            Game.Data.printboard(game.board);
            Game.Data.printDetails(game);
            Game.Stats.updateAmounts();            
            _checkTurn(game);
        }).catch(function (error) {
            console.log("Error in getting the data")
        })
    }

    const _checkTurn = (game) => {
        if (game.finished == true) {
            FeedbackWidget.show("The game has ended and " + game.winner + " has won", true)
            $("#board").css("opacity","0.5");
            return;
        }
        if (game.currentPlayer == 1) {
            currentPlayer = game.playerToken1;
        } else {
            currentPlayer = game.playerToken2;
        }
        if (currentPlayer != _playerToken) {
            $("#board").css("opacity","0.5");
        }
    }

    const _getGameData = (token) => {
        return new Promise(function (resolve, reject) {
            Game.Data.apicall("https://localhost:5001/api/spel/" + token).then(function (data) {
                if (data != null) {
                    resolve(data);
                }
                reject();
            }).catch(function (error) {
                console.log("Error in getting the data")
            })
        })
    }

    // Waarde/object geretourneerd aan de outer scope
    return {
        getGame: getGame,
        getPlayerToken: getPlayerToken,
        updateGame: updateGame,
    };

})();