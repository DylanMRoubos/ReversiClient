Game.Model = (function () {

    let game;

    // const _getGameState = function(token){
    //     //aanvraag via Game.Data
    //     let state = Game.Data.get("/api/Spel/Beurt/" + token);
    //     //controle of ontvangen data valide is
    //     switch(state){
    //         case 0:
    //             return "Geen specifieke waarde"
    //         case 1:
    //             return "Wit is aan zet"
    //         case 2:
    //             return "Zwart is aan zet"             
    //     }
    // };

    const updateGame = (token) => {
        _getGameData(token).then(function (data) {
            game = data;
            Game.Data.printboard(game.board);
            Game.Data.printDetails(game);
        }).catch(function (error) {
            Game.Data.printboard(game.board);
        })
    }

    const _getGameData = (token) => {
        return new Promise(function (resolve, reject) {
            Game.Data.apicall("https://localhost:5001/api/spel/" + token).then(function (data) {
                if (data != null) {
                    resolve(data);
                }
                reject();
            })
        })
    }

    // Private function init
    const privateInit = function () {
        // console.log(configMap.apiUrl);
    };

    // Waarde/object geretourneerd aan de outer scope
    return {
        init: privateInit,
        updateGame: updateGame,
        game: game,

        // getGameState: _getGameState
    };
})();