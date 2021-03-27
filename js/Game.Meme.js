/**
* Game module to show the meme
* @author Dylan Roubos
*/
Game.Meme = (() => {

    //Get the game data & show it on the page using the handlebars
    const showMeme = () => {
        Game.Data.apicall("https://meme-api.herokuapp.com/gimme")
        .then(function (data) {
            $("#meme").html(
                Game.Template.parseTemplate("meme", {src: data["url"]})
            )
        })
    }

    return {
        showMeme, showMeme
    }
})();