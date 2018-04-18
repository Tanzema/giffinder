// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

$(document).ready(function(){
    $.ajax({
        url: "https://api.giphy.com/v1/stickers/search?q=dog&api_key=dc6zaTOxFJmzC&limit=10",
        method: "GET",
        success: function(response) {
            $('body').append('<img src=' + response.data[1].images.original.url + '>');
        }
    });
    
});
$(document).ready(function() {

    console.log('the doc is ready bro');
    function getGiphy(i) {
        console.log('The getGiphy Function was called bro');
        $.ajax({
            url: "https://api.giphy.com/v1/stickers/search?q=" + i + "&api_key=dc6zaTOxFJmzC&limit=13",
            method: "GET",
            success: function(response) {
                var image = response.data[0].images.original.url;
                $('#gif').html('<img src=' + image + '>');
            },
        });
    }
    $("#search").click(function() {
        console.log(' the button was clicked bro');
        var input = $("#search-term").val;
        console.log(input);
        getGiphy(input);
    });
});