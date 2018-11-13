$(document).ready(function()
{   $("#message-wrapper").css("display", "none");
    
    $(".signin-button").click(function(event)
    {   // event handler for "Sign in with..." buttons

        if ($(this).attr("id") === "Google")
        {
        }
        else
        if ($(this).attr("id") === "Facebook")
        {
        }

        window.open("find.html", "_self");
    })

})