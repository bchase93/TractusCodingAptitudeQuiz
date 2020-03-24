// jokes.js

// Send request to API and get response as plaintext
function generateJoke() {
    $('#jokeButton').click(function() {
        $.ajax({
            headers: {
                Accept : 'text/plain',
                'Content-Type': 'text/plain'
            },
            url: 'https://icanhazdadjoke.com/',
            data: 'data',
            success: function (response) {
                $('#jokeDisplay').replaceWith(`<div id="jokeDisplay">${response}</div>`)
            },
            error: function(){
                alert('Failed to get joke')
            }
        })
    });
}

$(function() {
    // alert('document ready')
    generateJoke()
})