Game.Api = (() => {

    console.log("joejoe vanuit api");

    const showMeme = () => {
        Game.Data.apicall("https://meme-api.herokuapp.com/gimme")
        .then(function (data) {
            $("#test").html(
                Game.Template.parseTemplate("meme", {src: data["url"]})
            )
        })
    }

    return {
        showMeme: showMeme,
    }
})();