$(document).ready(function() {
    console.log("main.js is active.")

    // Scrolling for button on home screen.
    // $('#learnMoreHome').click(function() {
    //     $('html,body').velocity({
    //         scrollTop: $('#servicesDiv').offset().top
    //     }, 1000);
    // });

    // Scrolling for button on servcies screen.
    $('#learnMoreServices').click(function() {
        $('html,body').velocity({
            scrollTop: $('#servicesInfo').offset().top
        }, 1000);
    });

    {
    $("#newHeadquartersButton").click(function() {
        document.location.href = "newhq.html"
    });

    $("#upgradedSiteButton").click(function() {
        document.location.href = "upgradedsite.html";
    });

    $("#socialMediaButton").click(function() {
        document.location.href = "socialmedia.html";
    });

    $("#newPlanButton").click(function() {
        document.location.href = "newplan.html";
    });

    $("#prescriptionButton").click(function() {
        document.location.href = "prescription.html";
    });

    $("#appointmentsBox").click(function() {
        document.location.href = "services.html#appointmentsSection";
    });

    $("#schedulingBox").click(function() {
        document.location.href = "services.html#schedulingSection";
    });

    $("#diagnosisBox").click(function() {
        document.location.href = "services.html#diagnosisSection";
    });

    $("#prescriptionBox").click(function() {
        document.location.href = "services.html#prescriptionSection";
    });
    }



    // Send message button.
    $("#sendMessageButton").click(function() {
        // Show "Sent!" text.
        $("#sentText").velocity({
            opacity: 1
        }, 100, function() {
            //Time out for 4 seconds, then hide "Sent!" text.
            setTimeout(function() {
                $("#sentText").velocity({
                    opacity: 0
                }, 500)
            }, 4000)
        });

        // Clear input and textarea fields.
        $("#nameInput").val("");
        $("#emailInput").val("");
        $("#messageInput").val("");
    });

    // Adds drop shadow to navbar on small screens when navbar toggler is pressed.
    $(".navbar-toggler").click(function() {
        if ($(".main-navbar").hasClass("drop-shadow")) {
            $(".main-navbar").removeClass("drop-shadow")
        } else {
            $(".main-navbar").addClass("drop-shadow")
        }
    });

    $(window).resize(function() {
        if (window.innerWidth > 767) {
            if ($(".main-navbar").hasClass("drop-shadow")) {
                $(".main-navbar").removeClass("drop-shadow")
            }
            if ($(".navbar-collapse").hasClass("in")) {
                $(".navbar-collapse").removeClass("in")
            }
        }
    });
});