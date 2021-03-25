Game.Data = (function () {

    let apicall = (_url) => {
        return new Promise(function (resolve, reject) {
            $.ajax({
                url: _url,
                data: {},
                type: "GET",
                success: function (data) {
                    resolve(data);
                },
                error: function (data) {
                    reject(data);
                },
            })
        })
    }

    let apicallPut = (_url, putData) => {
        return new Promise(function (resolve, reject) {
            $.ajax({
                url: _url,
                type: "PUT",
                headers: { 'Content-Type': 'application/json' },
                data: JSON.stringify(putData),
                success: function (data) {
                    resolve(data);
                },
                error: function (data) {
                    reject(data);
                },
            })
        })
    }

    let placeDisc = function (div) {

        var x;
        var y;
        var count = 0;
        $('#board').find('div').each(function () {
            if (div == this) {
                var count1 = count / 2;

                x = count1 % 8;
                y = ~~(count1 / 8);
            }
            count++;
        });

        let data = {
            x: x,
            y: y,
            playerToken: Game.Model.getPlayerToken(),
            gameToken: Game.Model.getGame().token,
            pass: false
        }

        apicallPut("https://localhost:5001/api/Spel/Zet", data).then((data) => {
            Game.Api.showMeme();
        }).catch(function (error) {
            console.log("Erro in getting the data")
        });

        console.log(apicallPut)
    }

    let skip = () => {
        let data = {
            gameToken: Game.Model.getGame().token,
            playerToken: Game.Model.getPlayerToken(),
        }
        apicallPut("https://localhost:5001/api/Spel/Skip", data)
    }

    let printboard = (board) => {
        let data = {
            board: JSON.parse(board)
        }

        $("#boardarea").html(Game.Template.parseTemplate("board", data))
    }

    const printDetails = (game) => {
        $("#descriptions").html(game.description);
        $("#player1token").html("Wit: " + game.playerToken1);
        $("#player2token").html("Zwart: " + game.playerToken2);

        if (game.currentPlayer == 1) {
            $("#player1token").css('font-weight', 'bold');
            $("#player2token").css('font-weight', 'normal');
        } else {
            $("#player2token").css('font-weight', 'bold');
            $("#player1token").css('font-weight', 'normal');
        }
    }


    return {
        printboard: printboard,
        printDetails, printDetails,
        showFiche: placeDisc,
        apicall: apicall,
        skip: skip,
        // surrender: surrender,
    };
})();