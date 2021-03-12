Game.Api = (function () {

    console.log("joejoe vanuit api");

    const showMeme = () => {
        Game.Data.apicall("https://meme-api.herokuapp.com/gimme")
        .then(function (data) {
            console.log(data["url"]);
        })
    }

    return {
        showMeme: showMeme,
    }
})();