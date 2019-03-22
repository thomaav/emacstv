window.onload = function()
{
    $(".command-selector, .package-selector").click(
        function() {
            if ($(this).is("#selected")) {
                return;
            }

            // show static while fetching new gif
            $("#current-gif").hide();
            $("#static-noise").show();

            // change bolded element
            $("#selected").removeAttr("id");
            $(this).attr("id", "selected");

            // change title and description
            var index = $(".command-selector, .package-selector").index($(this));
            $("#selected-gif-title").removeAttr("id");
            $("#selected-gif-description").removeAttr("id");
            $(".gif-title").eq(index).attr("id", "selected-gif-title");
            $(".gif-description").eq(index).attr("id", "selected-gif-description");

            // change src of gif-tv
            $("#current-gif").attr("src", "");
            var gif_src = $(this).attr("gif-src");
            $("#current-gif").attr("src", gif_src);

            $("#current-gif").on(
                "load",
                function() {
                    $("#static-noise").hide();
                    $("#current-gif").show();
                }
            );
        }
    );

    $("#commands-title").click(
        function()
        {
            // gifs for commands
            $(".command-selector").toggle();
            if ($(this).text() === "Commands") {
                $(this).text("Commands [...]");
            } else {
                $(this).text("Commands");
            }
        }
    );

    $("#packages-title").click(
        function()
        {
            // gifs for commands
            $(".package-selector").toggle();
            if ($(this).text() === "Packages") {
                $(this).text("Packages [...]");
            } else {
                $(this).text("Packages");
            }
        }
    );

    $("#themes-title").click(
        function()
        {
            // gifs for commands
            $(".theme-selector").toggle();
            if ($(this).text() === "Themes") {
                $(this).text("Themes [...]");
            } else {
                $(this).text("Themes");
            }
        }
    );
}
