Game.Stats = (() => {

    const updateAmounts = () => {
        var token = Game.Model.getGame().token;
        console.log(token);
        Game.Data.apicall('https://localhost:5001/api/spel/Amount/' + token ).then(function (data) {

        var jsonData= JSON.parse(data);
            playerPieceHistory = {
                player1: [],
                player2: []
            };
            for(let key in jsonData[0]) {
                playerPieceHistory.player1.push(jsonData[0][key].Amount);               
            }
            for(let key in jsonData[1]) {
                playerPieceHistory.player2.push(jsonData[1][key].Amount);               
            }

            $("#Chart").html(Game.Template.parseTemplate("stats", playerPieceHistory))
        })
    }

    const init = () => {
    }

    return {
        init: init,
        updateAmounts: updateAmounts,
    }

})();