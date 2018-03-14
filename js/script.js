// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

$(document).ready(function(){
    $.ajax({
        url: "https://api.giphy.com/v1/stickers/search?q=dog&api_key=dc6zaTOxFJmzC&limit=1",
        method: "GET",
        success: function(response) {
            $('body').append('<img src=' + response.data[0].images.original.url + '>');
        }
    });
});