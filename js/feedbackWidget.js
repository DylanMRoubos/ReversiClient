//Function for showing a feedbackwidget, including multiple 
//options to customise onclick event and which buttons are shown
//@author Dylan Roubos
//
const FeedbackWidget = (() => {
    //Buttons enabled:
    // 0 = close only
    // 1 = close & accept
    // 2 = close & accept & deny
    const show = (message, onclick, buttonsEnabled) => {
        $(".alert-text").text(message)
        $("#feedback-widget").removeClass("fade-out")
        $("#feedback-widget").addClass("fade-in")            

        //Add the onclick to both the close & accept button
        $("#feedback-icon").on("click", _buttonHandling.bind(null, onclick));
        $(".FeedbackButton1").on("click", _buttonHandling.bind(null, onclick));

        //Check which buttons should be enabled
        if(buttonsEnabled == 0) {        
            $(".FeedbackButton").css("display", "none");                     
        } else if(buttonsEnabled == 1) {
            $(".FeedbackButton1").css("display", "inline");     
            $(".FeedbackButton2").css("display", "none");       
        } else if(buttonsEnabled == 2) {
            $(".FeedbackButton").css("display", "inline");   
        }
    } 

    //Method to be able to add multiple function to the onclick of an element
    const _buttonHandling = (customFunction) => {
        customFunction();
        hide();
    }

    const hide = () => {  
        $("#feedback-widget").removeClass("fade-in")
        $("#feedback-widget").addClass("fade-out")
    }

    return {
        hide: hide,
        show: show,
    }

})();