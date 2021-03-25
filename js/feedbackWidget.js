const FeedbackWidget = (() => {

    const show = (message, withoutButtons) => {
        $(".alert-text").text(message)
        $("#feedback-widget").removeClass("fade-out")
        $("#feedback-widget").addClass("fade-in")
        
        if(withoutButtons) {
            $(".FeedbackButton").css("display", "none");
        } else {
            $(".FeedbackButton").css("display", "inline");
        }
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