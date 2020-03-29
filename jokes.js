// jokes.js

// Get number of jokes from input and create a button and display area for each
function displayNumJokes() {
    $('#getJokeNum').submit(function(e) {
        $('#displayArea').empty()
        numJokes = $('#numJokes').val()
        if (numJokes > 10) {
            numJokes = 10
        }
        for (i=0; i<numJokes;i++) {
            $('#displayArea').append(
                    `<div class="card col-sm-4 p-1 bg-primary" class="d-flex justify-content-center">
                        <textarea rows="4" style="width:100%" id="jokeDisplay${i}"></textarea>
                        <br>
                        <div class="d-flex justify-content-center">
                            <button type="button" id="button${i}" class="jokeButtons bg-warning">Generate Joke</button>
                        </div>
                    </div>`)
        }
        e.preventDefault()
    })
}

// Send request to API and get response as plaintext
function generateJoke() {
    $(document).on('click', '.jokeButtons', function(e) {

        $.ajax({
            headers: {
                Accept : 'text/plain',
                'Content-Type': 'text/plain'
            },
            url: 'https://icanhazdadjoke.com/',
            data: 'data',   //TODO try getting rid of this line
            success: function(response) {
                let num = e.target.id[e.target.id.length - 1]
                $(`#jokeDisplay${num}`).replaceWith(`<textarea rows="4" style="width:100%" id="jokeDisplay${num}">${response}</textarea>`)
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