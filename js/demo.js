$(document).ready(function(){
    console.log("demo.js is active.");

    setTimeout(function() {
        $("#demoLoadingDiv").velocity({
            opacity: 0
        }, 500, function(){
            $(this).hide();
        });
    }, 2500);

    setTimeout(function() {
        // $("#demoModalBox").velocity({
        //     marginTop: 0,
        //     opacity: 1
        // }, 1000);

        $("#demoModalBox").addClass("animationMode");
    }, 2900);

    $("#demoModalButton").click(function(){
        $("#modalDiv").addClass("demoFadeOut");
        hideModal();
    });

    $(".demo-return").click(function(){
        document.location.href="services.html#schedulingSection";
    })

    function hideModal() {
        setTimeout(function() {
            $("#modalDiv").css("display", "none");
        }, 1000);
    }
});