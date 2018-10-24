$(document).ready(buildImages(16, sessionStorage.getItem('language')));
/*
 * Makes an AJAX request to the server to dynamically build images for the memory game
 * from the dataset. 
 *
 * Takes in gameSize as an INT to determine how many images to build,
 * and language as a STRING to determine what language to use.
 * 
 * Creates images on server and returns their filepaths as an array
 */
function buildImages(gameSize, language) {
    var totalImages = gameSize / 2;
    language = "Turubul";
    // Create an AJAX request to the server in order to build the images using image_builder.php
    // Retuned data will be JSON of list of images created on server
    jQuery.ajax({
        type: "POST",
        url: 'php/memory_image_builder.php',
        dataType: 'json',
        data: {functionname: 'generate_images', arguments: [language]},

        success: function (data) {
            console.log("I get here: " + data);
            //buildGame(gameSize, language, images);
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) { 
            console.log("Status: " + textStatus); 
            console.log("Error: " + errorThrown); 
        }     
    });
}

/*
 * Builds the actual functionality for the game.
 * Takes in gameSize as an INT to determine how many cards to build,
 * language as a STRING to determine what language to use, and images as an
 * ARRAY of STRINGS defining the location of the images to be used.
 */
function buildGame(gameSize, language, images) {
    buildHTML(gameSize, language, images);

    card = $(".card");
    cards = [...card];
    deck = $(".card-deck");
    moves = 0;
    counter = $(".moves");
    stars = $(".fa-star");
    matchedCards = $(".match");
    starsListElement = $(".stars li");
    close = $(".close");
    winModal = $("#popup1");
    flippedCards = Array();
    second = 0, minute = 0; hour = 0;
    timer = $(".timer");
    interval;

    cards = shuffle(cards);

    // Strip all classes from each card, setting game to default state
    for (var i = 0; i < cards.length; i++) {
        deck.html("");
        [].forEach.call(cards, function(item) {
            deck.append(item);
        });
        cards[i].classList.remove("show", "open", "match", "disabled");
    }

    // Set moves to 0
    moves = 0;
    counter.html(moves);

    // Set rating to default
    for (var i = 0; i < stars.length; i++) {
        stars[i].style.color = "#FFD700";
        stars[i].style.visibility = "visible";
    }

    // Set time to default
    second = 0;
    minute = 0; 
    hour = 0;
    var timer = $(".timer");
    timer.html("0 mins 0 secs");
    clearInterval(interval);

    // Adds event listeners to each card
}

/*
 * Toggles classes to display cards
 */
var displayCard = function (){
    this.classList.toggle("open");
    this.classList.toggle("show");
    this.classList.toggle("disabled");
};

/*
 * Adds flipped cards to the list of flipped cards and checks for matches
 */
function cardOpen() {
    openedCards.push(this);
    var len = openedCards.length;
    if(len === 2){
        moveCounter();
        if(openedCards[0].type === openedCards[1].type){
            matched();
        } else {
            unmatched();
        }
    }
};

/*
 * Declares selected cards to be matched and updates classes accordingly
 */
function matched(){
    openedCards[0].classList.add("match", "disabled");
    openedCards[1].classList.add("match", "disabled");
    openedCards[0].classList.remove("show", "open", "no-event");
    openedCards[1].classList.remove("show", "open", "no-event");
    openedCards = [];
}

/*
 * Declares selected cards to be matched and updates classes accordingly
 */
function unmatched(){
    openedCards[0].classList.add("unmatched");
    openedCards[1].classList.add("unmatched");
    disable();
    setTimeout(function(){
        openedCards[0].classList.remove("show", "open", "no-event","unmatched");
        openedCards[1].classList.remove("show", "open", "no-event","unmatched");
        enable();
        openedCards = [];
    },1100);
}

/*
 * Disables all cards to prevent cheating
 */
function disable(){
    Array.prototype.filter.call(cards, function(card){
        card.classList.add('disabled');
    });
}

/*
 * Enables cards after a call from disable(), then re-disables already matched cards
 */
function enable(){
    Array.prototype.filter.call(cards, function(card){
        card.classList.remove('disabled');
        for(var i = 0; i < matchedCard.length; i++){
            matchedCard[i].classList.add("disabled");
        }
    });
}

/*
 * Tracks the moves made and time spent playing the current games
 */
function moveCounter() {
    moves++;
    counter.html(moves);
    // Start the timer on the first move made
    if(moves == 1){
        second = 0;
        minute = 0; 
        hour = 0;
        startTimer();
    }
    // Set rating based on moves
    if (moves > 8 && moves < 12){
        for( i= 0; i < 3; i++){
            if(i > 1){
                stars[i].style.visibility = "collapse";
            }
        }
    }
    else if (moves > 13){
        for( i= 0; i < 3; i++){
            if(i > 0){
                stars[i].style.visibility = "collapse";
            }
        }
    }
}

/*
 * Starts the game timer
 */
function startTimer(){
    interval = setInterval(function(){
        timer.html(minute + "mins " + second + "secs");
        second++;
        if(second == 60){
            minute++;
            second=0;
        }
        if(minute == 60){
            hour++;
            minute = 0;
        }
    },1000);
}

/*
 * Shows the congratulations modal on game finish
 */
function congratulations(){
    if (matchedCard.length == 16){
        clearInterval(interval);
        finalTime = timer.html();

        // show congratulations modal
        modal.classList.add("show");

        // declare star rating variable
        var starRating = $(".stars").html();

        //showing move, rating, time on modal
        $("#finalMove").html(moves);
        $("#starRating").html(starRating);
        $("#totalTime").html(finalTime);

        //closeicon on modal
        closeModal();
    };
}

/*
 * Restarts game on player request
 */
function playAgain(){
    modal.classList.remove("show");
    startGame();
}

/* 
 * Takes in an array representing a deck of cards and randomly shuffles them,
 * returning the array passed in, but in a different order.
 *
 * NOTE: Shuffling has been implemented naively, so it is quite possible that
 * the shuffles may not "appear" random to human players. If this turns out to
 * be a problem, this function will need to be changed to be less random.
 */
function shuffle(cards) {
    var cardOnePos, cardTwoPos, tempPos = 0;
    // Shuffle the cards between 1 and 100 times
    var shuffles = Math.floor(Math.random() * 100);

    for (shuffles; shuffles > 0; shuffles--) {
        // Pick two random cards in the deck
        cardOnePos = Math.floor(Math.random() * cards.length);
        cardTwoPos = Math.floor(Math.random() * cards.length);
        // Swap these two cards with via an intermediate var
        tempPos = cards[cardOnePos];
        cards[cardOnePos] = deck[cardTwoPos];
        cards[cardTwoPos] = tempPos;
    }

    return cards;
}

/*
 * Creates the list elements that will form the memory cards for the game.
 *
 * Takes in gameSize as an INT to determine how many cards to build,
 * language as a STRING to determine what language to use, and images as an
 * ARRAY of STRINGS defining the location of the images to be used.
 */
function buildHTML(gameSize, language, images) {
    // Build the header for the memory HTML content
    var memoryHTML = `
        <div class="container">
            <section class="score-panel">
                <ul class="stars">
                    <li><i class="fa fa-star"></i></li>
                    <li><i class="fa fa-star"></i></li>
                    <li><i class="fa fa-star"></i></li>
                </ul>

                <span class="moves">0</span> Move(s)

                <div class="timer">
                </div>

                <div class="restart" onclick=startGame()>
                    <i class="fa fa-repeat"></i>
                </div>
            </section>
            <ul class="deck" id="card-deck">
    `;

    // Generate list elements for the cards with their respective images
    for (var i = 0; i < gameSize; i++) {
        // Use math.floor() to imitate integer maths
        var cardType = Math.floor(i/2);

        var cardHTML = `
            <li class="card" type="` + cardType + `">
                <img src="` + images[cardType] + `" height="42" width="42">
            </li>
        `;

        memoryHTML += cardHTML;
    }

    // Build the footer for the memory HTML content
    var footerHTML = `
        </ul>
            <div id="popup1" class="overlay">
                <div class="popup">
                    <h2>Congratulations</h2>
                    <a class="close" href=# >×</a>
                    <div class="content-1">
                        Congratulations you're a winner
                    </div>
                    <div class="content-2">
                        <p>You made <span id=finalMove> </span> moves </p>
                        <p>in <span id=totalTime> </span> </p>
                        <p>Rating:  <span id=starRating></span></p>
                    </div>
                    <button id="play-again"onclick="playAgain()">
                        Play again</a>
                    </button>
                </div>
            </div>
        </div>
    `;

    memoryHTML += footerHTML;

    // Load memory html into the div with id = memContent
    $('#memContent').html(memoryHTML);
}

