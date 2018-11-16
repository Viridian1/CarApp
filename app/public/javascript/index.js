$(document).ready(function()
<<<<<<< HEAD
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

=======
{   $(".message-wrapper").css("display", "none");

    $(".signin-button").click(function(event)
    {
        event.preventDefault();
>>>>>>> 70caee38df1a03766b904eaced45ba4a4aa91a77
        window.open("find.html", "_self");
    })

})