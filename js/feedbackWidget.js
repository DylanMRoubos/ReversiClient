$(function() {
    let x = new FeedbackWidget("feedback-danger")
    console.log( "ready!" );
    $("#selector").on("click", function(){
        x.show();
        alert("The button was clicked.");
    });
}); 

var logs = 0;
class FeedbackWidget{
    
    constructor(elementId) {
        this._elementId = elementId;
    }
    get elementId() { //getter, set keyword voor setter methode
        return this._elementId;
    }
    
    log(message){
        localStorage.setItem(logs, JSON.stringify(message))
        if(localStorage.length > 9){
            localStorage.removeItem(localStorage.key(0))
        }
        logs++
    }

    removeLog(){
        localStorage.clear();   
    }

    history(){
        for(let i = 0; i < localStorage.length; i++){
            let x = JSON.stringify(new Array(localStorage.getItem(i).message, localStorage.getItem(i).type))
            console.log(x + '\n')
        }
    }

    show(message){
        $(".alert-text").text(message + "Hello friend")
            $("#feedback-widget").removeClass("fade-out")
            $("#feedback-widget").addClass("fade-in")
    }

    hide(){
        var feedback = document.getElementById("feedback-widget")
        
        $("#feedback-widget").removeClass("fade-in")
        $("#feedback-widget").addClass("fade-out")
    } 
}