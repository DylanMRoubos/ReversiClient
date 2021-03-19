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

    let placeDisc = function (cellId) {

        $("#" + cellId).append(
            "<div class=\"disc disc1\"></div>"
        )
    }

    let printboard = (board) => {
        let data = {
            board: JSON.parse(board)
        }
        $("#boardarea").html(Game.Template.parseTemplate("board", data))
    }

    const printDetails = (game) => {
        $("#descriptions").html(game.description);
        $("#player1token").html(game.playerToken1);
        $("#player2token").html(game.playerToken2);

        if(game.currentPlayer == 2) {
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
    };
})();