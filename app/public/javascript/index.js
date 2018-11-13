$(document).ready(function()
{   $(".message-wrapper").css("display", "none");

    $(".signin-button").click(function(event)
    {
        event.preventDefault();
        window.open("find.html", "_self");
    })

})