// jokes.js

// TODO Event propegation to get joke buttons working because they are created dynamically

function displayNumJokes() {
    $('#getJokeNum').submit(function(e) {
        // alert("form submitted")
        // alert($('#numJokes').val())
        $('#displayArea').empty()
        for (i=0; i<$('#numJokes').val();i++) {
            $('#displayArea').append(`<button type="button" id="button${i}" class="jokeButtons">Generate Joke</button><div id="jokeDisplay"></div>`)
        }
        e.preventDefault()
    })
}

// Send request to API and get response as plaintext
function generateJoke() {
    $('.jokeButtons').on('click', function(e) {
        alert("pressed")

        $.ajax({
            headers: {
                Accept : 'text/plain',
                'Content-Type': 'text/plain'
            },
            url: 'https://icanhazdadjoke.com/',
            data: 'data',   //TODO try getting rid of this line
            success: function(response) {
                // $('#jokeDisplay').replaceWith(`<div id="jokeDisplay">${response}</div>`)
            },
            error: function() {
                alert('Failed to get joke')
            }
        })
        e.preventDefault()

    })
}

$(function() {
    // alert('document ready')
    displayNumJokes()
    generateJoke()
})