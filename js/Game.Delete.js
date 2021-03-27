/**
* Game module to handle everything Delete related
* @author Dylan Roubos
*/
Game.Delete = (() => {

    //Method to send a put request to the api with gametoken & playertoken to accept te end of the game from the user his side
    const acceptDeleteGame = () => {
        //Get the user its data from the model according to the expected API format
        var data = {
            playerToken: Game.Model.getPlayerToken(),
            gameToken: Game.Model.getGame().token,
        }
        //Send the data the api
        Game.Data.apicallPut("https://localhost:5001/api/spel/finish", data);
    }

    return {
        acceptDeleteGame, acceptDeleteGame,
    }
})();