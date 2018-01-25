$(function() {

    $("#burger").click(function() {
        if ($(".toggle").hasClass("hideMe")) {
            $(".toggle").fadeIn("slow", function() {
                $(".toggle").removeClass("hideMe")
                $(".toggle").addClass("revealMe")
            })
        } else {
            $(".toggle").fadeOut("fast", function() {
                $(".toggle").addClass("hideMe")
                $(".toggle").removeClass("revealMe")
            })
        }
        
    })
});