/**
* Game module to handle the statistics graphics
* @author Dylan Roubos
*/
Game.Stats = (() => {
    //Method to update to get the data
    const updateStats = () => {
        _updateAmounts().then((data) => {
            _placeGraphic(data);
        });
    }
    //Method that returns a Promise with the data fetched from the api and parsed into usable data for the handeblar tempalt
    const _updateAmounts = () => {
        return new Promise(function (resolve, reject) {
            //Get the player statistics data from the API
            var token = Game.Model.getGame().token;
            Game.Data.apicall('https://localhost:5001/api/spel/Amount/' + token).then(function (data) {

                var jsonData = JSON.parse(data);

                //Create a js array template based on the expected format from the handlebar template
                playerPieceHistory = {
                    player1: [],
                    player2: []
                };

                //Add the data for the first player to the array template
                for (let key in jsonData[0]) {
                    playerPieceHistory.player1.push(jsonData[0][key].Amount);
                }
                //Add the data for the second player array template
                for (let key in jsonData[1]) {
                    playerPieceHistory.player2.push(jsonData[1][key].Amount);
                }
                resolve(playerPieceHistory);
            })
        })

    }
    //Method to place the statistics onto the screen witht the handlebar template
    const _placeGraphic = (playerPieceHistory) => {
        $("#Chart").html(Game.Template.parseTemplate("stats", playerPieceHistory))
    }

    return {
        updateStats: updateStats,
    }

})();