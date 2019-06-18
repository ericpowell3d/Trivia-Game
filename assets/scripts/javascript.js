// I chose to do HW Option #2, but I removed the in-between timer so the user could study what the correct answer was
// The correct answer is choice0 in every question. The questions and choices are shuffled to create variation

// Very large object-array of questions and parameters (could probably store this in a JSON in the future)
var questions = [{
    question: "Who is the heaviest character in Smash 64?",
    image: "https://www.ssbwiki.com/images/thumb/c/c9/Donkey_Kong_SSBU.png/250px-Donkey_Kong_SSBU.png",
    choice0: "Donkey Kong",
    choice1: "Bowser",
    choice2: "Samus",
    choice3: "Jigglypuff"
}, {
    question: "Who is the heaviest character in Smash Wii U?",
    image: "https://www.ssbwiki.com/images/thumb/4/49/Bowser_SSBU.png/250px-Bowser_SSBU.png",
    choice0: "Bowser",
    choice1: "Donkey Kong",
    choice2: "Ganondorf",
    choice3: "King K. Rool"
}, {
    question: "Which Rareware character was prototyped in Smash Brawl, but scrapped during development?",
    image: "https://www.ssbwiki.com/images/thumb/5/5d/Dixie_Kong_DKCTF.png/1200px-Dixie_Kong_DKCTF.png",
    choice0: "Dixie Kong",
    choice1: "Banjo-Kazooie",
    choice2: "Conker",
    choice3: "King K. Rool"
}, {
    question: "Which character was prototyped in Smash 64, but didn't make it in until a later entry?",
    image: "https://www.ssbwiki.com/images/thumb/f/f5/King_Dedede_SSBU.png/250px-King_Dedede_SSBU.png",
    choice0: "King Dedede",
    choice1: "Marth",
    choice2: "Wario",
    choice3: "Sonic"
}, {
    question: "Which character was planned for Smash Melee, but didn't make it in until a later entry?",
    image: "https://www.ssbwiki.com/images/thumb/0/02/Snake_SSBU.png/250px-Snake_SSBU.png",
    choice0: "Snake",
    choice1: "Villager",
    choice2: "Pac-Man",
    choice3: "Mach Rider"
}, {
    question: "Which character was scrapped after months of development in Smash Wii U?",
    image: "https://www.ssbwiki.com/images/thumb/1/12/Ice_Climbers_SSBU.png/250px-Ice_Climbers_SSBU.png",
    choice0: "Ice Climbers",
    choice1: "Roy",
    choice2: "Geno",
    choice3: "Olimar"
}, {
    question: "Who is the lightest character in Smash Melee?",
    image: "https://www.ssbwiki.com/images/thumb/c/c1/Pichu_SSBU.png/250px-Pichu_SSBU.png",
    choice0: "Pichu",
    choice1: "Jigglypuff",
    choice2: "Fox",
    choice3: "Mario"
}, {
    question: "Who is the lightest character in Smash Brawl?",
    image: "https://www.ssbwiki.com/images/thumb/a/a6/Jigglypuff_SSB4.png/250px-Jigglypuff_SSB4.png",
    choice0: "Jigglypuff",
    choice1: "Squirtle",
    choice2: "Mr. Game & Watch",
    choice3: "Mario"
}, {
    question: "What year did Smash 64 release in the US?",
    image: "https://i.ytimg.com/vi/FF73P64PMbM/maxresdefault.jpg",
    choice0: "1999",
    choice1: "2000",
    choice2: "2001",
    choice3: "1997"
}, {
    question: "What year did Smash Melee release in the US?",
    image: "https://i5.walmartimages.com/asr/a5d9f9d7-9d8a-4a16-9e38-b0476339f7e2_1.2f3c326dd6189db744cce7af1c183a33.jpeg?odnHeight=560&odnWidth=560&odnBg=FFFFFF",
    choice0: "2001",
    choice1: "2000",
    choice2: "2003",
    choice3: "2004"
}, {
    question: "What year did Smash Brawl release in the US?",
    image: "https://vignette.wikia.nocookie.net/ssb/images/4/49/Super_Smash_Bros._Brawl_-_North_American_Boxart.png/revision/latest?cb=20180716051236",
    choice0: "2008",
    choice1: "2007",
    choice2: "2006",
    choice3: "2005"
}, {
    question: "About how many music tracks are available in Smash Ultimate?",
    image: "https://pbs.twimg.com/media/DkFVhRGVsAAV0iw.jpg",
    choice0: "800+",
    choice1: "700",
    choice2: "500",
    choice3: "400"
}, {
    question: "Which game is the highest selling in the series?",
    image: "https://images-na.ssl-images-amazon.com/images/I/81G1qFsRHDL._AC_SL1500_.jpg",
    choice0: "Ultimate",
    choice1: "Brawl",
    choice2: "Melee",
    choice3: "64"
}, {
    question: "Which Smash game beat out the sales of the latest Legend of Zelda and Mario games upon its release?",
    image: "https://images-na.ssl-images-amazon.com/images/I/81G1qFsRHDL._AC_SL1500_.jpg",
    choice0: "Ultimate",
    choice1: "Brawl",
    choice2: "Melee",
    choice3: "Wii U"
}, {
    question: "Who is the creator of Super Smash Bros?",
    image: "https://cultureofgaming.com/wp-content/uploads/2018/06/Sakurai-edited.png",
    choice0: "Masahiro Sakurai",
    choice1: "Shigeru Miyamoto",
    choice2: "Eji Aonuma",
    choice3: "Sasuke Uchiha"
}, {
    question: "How many unlockable characters did Smash 64 have?",
    image: "https://i.ytimg.com/vi/SS5eo56gLbs/maxresdefault.jpg",
    choice0: "4",
    choice1: "6",
    choice2: "8",
    choice3: "0"
}, {
    question: "Do we tech those in Smash Ultimate?",
    image: "https://vangogh.teespring.com/shirt_pic/5991508/6926236/2/2397/480x9999/front.jpg?v=2016-07-01-02-18",
    choice0: "Only when the game lets me",
    choice1: "Always",
    choice2: "Im uncultured, so I don't get this",
    choice3: "Never"
}, {
    question: "How many character slots does Smash 64 have?",
    image: "https://i.ytimg.com/vi/SS5eo56gLbs/maxresdefault.jpg",
    choice0: "12",
    choice1: "8",
    choice2: "16",
    choice3: "20"
}, {
    question: "How many character slots does Smash Melee have?",
    image: "https://www.ssbwiki.com/images/1/18/KOStars-Melee.png",
    choice0: "25",
    choice1: "24",
    choice2: "28",
    choice3: "35"
}, {
    question: "How many character slots does Smash Brawl have?",
    image: "http://info.sonicretro.org/images/b/ba/SSBB_Character_Select.png",
    choice0: "35",
    choice1: "38",
    choice2: "32",
    choice3: "40"
}, {
    question: "How many character slots does Smash Wii U have (Including all the DLC and the 3 Mii Fighters)?",
    image: "https://www.ssbwiki.com/images/9/9e/SSBWiiU_Character_Select.jpg",
    choice0: "58",
    choice1: "64",
    choice2: "54",
    choice3: "52"
}, {
    question: "How many character slots does Smash Ultimate have (Including all the DLC and the 3 Mii Fighters)?",
    image: "https://www.ssbwiki.com/images/a/af/SSBU_Character_Select_DLC.jpeg",
    choice0: "80",
    choice1: "70",
    choice2: "100",
    choice3: "60"
}, {
    question: "Which game introduced the Final Smash mechanic?",
    image: "https://i.ytimg.com/vi/8tQRjyPkJfQ/maxresdefault.jpg",
    choice0: "Brawl",
    choice1: "Wii U",
    choice2: "Ultimate",
    choice3: "Melee"
}, {
    question: "How many echo fighters are in Smash Ultimate (as of June 2019)?",
    image: "https://vignette.wikia.nocookie.net/nintendo/images/f/f3/Echo_Fighters.png/revision/latest?cb=20180808191219&path-prefix=en",
    choice0: "7",
    choice1: "5",
    choice2: "9",
    choice3: "11"
}, {
    question: "What game series is Pit from?",
    image: "https://www.ssbwiki.com/images/thumb/3/38/Pit_SSBU.png/250px-Pit_SSBU.png",
    choice0: "Kid Icarus",
    choice1: "Fire Emblem",
    choice2: "Metroid",
    choice3: "Naruto"
}, {
    question: "What game series is Ridley from?",
    image: "https://www.ssbwiki.com/images/thumb/2/27/Ridley_SSBU.png/250px-Ridley_SSBU.png",
    choice0: "Metroid",
    choice1: "Fire Emblem",
    choice2: "Mario",
    choice3: "The Legend of Zelda"
}, {
    question: "What game series is Ness from?",
    image: "https://www.ssbwiki.com/images/thumb/8/82/Ness_SSBU.png/250px-Ness_SSBU.png",
    choice0: "Earthbound",
    choice1: "Fire Emblem",
    choice2: "Pac-Man",
    choice3: "Undertale"
}, {
    question: "What game series is Robin from?",
    image: "https://www.ssbwiki.com/images/thumb/8/82/Robin_SSBU.png/250px-Robin_SSBU.png",
    choice0: "Fire Emblem",
    choice1: "The Legend of Zelda",
    choice2: "Dragon Quest",
    choice3: "The Elder Scrolls"
}, {
    question: "How old is Young Link (fictionally)?",
    image: "https://www.ssbwiki.com/images/thumb/8/8a/Young_Link_SSBU.png/250px-Young_Link_SSBU.png",
    choice0: "9",
    choice1: "12",
    choice2: "14",
    choice3: "5"
}, {
    question: "Which Fire Emblem character does not have a sword?",
    image: "https://i.ytimg.com/vi/GoCCd6PFmZk/maxresdefault.jpg",
    choice0: "They all have swords",
    choice1: "Robin",
    choice2: "Corrin",
    choice3: "Hector"
}, {
    question: "Who voices Mario, Luigi, Wario & Waluigi?",
    image: "https://pbs.twimg.com/profile_images/252199857/CharlesMartinet_-_Headshot_with_Characters_nintendo_2_bodyFACEBOOK.jpg",
    choice0: "Charles Martinet",
    choice1: "Masahiro Sakurai",
    choice2: "Mario Segale",
    choice3: "Bill Trinen"
}, {
    question: "Who voices King Dedede?",
    image: "https://cultureofgaming.com/wp-content/uploads/2018/06/Sakurai-edited.png",
    choice0: "Masahiro Sakurai",
    choice1: "Charles Martinet",
    choice2: "Koji Kondo",
    choice3: "Satoru Iwata"
}, {
    question: "Who was the only character to have all their smash attacks fundamentally changed from Smash 64 to Smash Melee?",
    image: "https://www.ssbwiki.com/images/thumb/d/da/Captain_Falcon_SSBU.png/250px-Captain_Falcon_SSBU.png",
    choice0: "Captain Falcon",
    choice1: "Fox",
    choice2: "Link",
    choice3: "Mario"
}, {
    question: "Which character was visibly left handed in Smash Brawl?",
    image: "https://www.ssbwiki.com/images/thumb/5/56/Toon_Link_SSBU.png/250px-Toon_Link_SSBU.png",
    choice0: "Toon Link",
    choice1: "Marth",
    choice2: "Olimar",
    choice3: "Ike"
}, {
    question: "What other two series were created by Sora Ltd?",
    image: "https://www.ssbwiki.com/images/thumb/9/93/Sora_logo.png/1200px-Sora_logo.png",
    choice0: "Kid Icarus & Kirby",
    choice1: "Metroid & Kirby",
    choice2: "Donkey Kong & Kirby",
    choice3: "Mario & Donkey Kong"
}, {
    question: "How many ball-shaped characters are in Smash Ultimate?",
    image: "https://www.ssbwiki.com/images/thumb/0/07/Kirby_SSBU.png/250px-Kirby_SSBU.png",
    choice0: "4",
    choice1: "2",
    choice2: "1",
    choice3: "5"
}, {
    question: "What was the slogan during the ad campaign for Smash Ultimate?",
    image: "https://i.ytimg.com/vi/EXnbMp1yr1k/maxresdefault.jpg",
    choice0: "Everyone is Here!",
    choice1: "Bash, Thrash & Smash!",
    choice2: "Smash Bros. Assemble!",
    choice3: "Gotta Catch 'Em all!"
}, {
    question: "How many normal stages are featured in Smash Ultimate (Including all the DLC)?",
    image: "https://oyster.ignimgs.com/mediawiki/apis.ign.com/super-smash-bros-switch/b/b9/Stages.png?width=640",
    choice0: "108",
    choice1: "100",
    choice2: "98",
    choice3: "89"
}, {
    question: "Every sword fighter in the Smash Ultimate has virtually the same down-smash except...",
    image: "https://i.ytimg.com/vi/BPXyNdFjtZA/hqdefault.jpg",
    choice0: "Shulk & Corrin",
    choice1: "Link & Ganondorf",
    choice2: "Marth & Roy",
    choice3: "Pit & Dark Pit"
}, {
    question: "Which character has never been planned to be playable in any of the Smash games?",
    image: "https://i.kym-cdn.com/entries/icons/original/000/026/436/Everyone_is_here..._Except_for_Waluigi.jpg",
    choice0: "Waluigi",
    choice1: "Dixie Kong",
    choice2: "Geno",
    choice3: "Mii Fighters"
}];

// Global variables
const TIMER = 10000;
var questionTimer;
var intervalTimer;
var timeRunning = false;
var timer = TIMER / 1000;

var questionCount = 0;
var right = 0;
var wrong = 0;

var choices = [];
var userChoice = "";

// Algorithm that randomly shuffles the questions array (Fisher-Yates Shuffle)
function shuffle(array) {
    // Setup current element
    var currentIndex = array.length, tempValue, randomIndex;
    while (0 !== currentIndex) {
        // Draw from the hat (Pick an element that's left)
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        // Place into the next slot (Swap the current and random array elements)
        tempValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = tempValue;
    }
    return array;
}

// Converter for timers
function timeConverter(t) {
    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    if (minutes === 0) {
        minutes = "00";
    }
    else if (minutes < 10) {
        minutes = "0" + minutes;
    }
    return `${minutes}:${seconds}`;
}
// Countdown for time
function timeCount() {
    timer--;
    var timeConvert = timeConverter(timer);
    $("#clock").text("Time Left: " + timeConvert);
}

// Function to hide and empty essential HTML elements
function hideHTML() {
    $(".overview").hide();
    $(".clock").hide();
    $(".question").hide();
    $(".choiceBtn").empty();
    $(".result").hide();
    $(".final").hide();
    $(".mainBtn").empty();
}

// On start/reset
function start() {
    // Hide HTML
    hideHTML();

    // Shuffle questions
    questions = shuffle(questions);

    // Reset variables
    questionCount = -1;
    right = 0;
    wrong = 0;

    // Render elements
    $(".overview").show();
    $(".mainBtn").append(`<button id="next">Begin</button>`);
}

// To next question
function next() {
    // Hide HTML
    hideHTML();

    // Add to total questions so far + reset userChoice
    questionCount++
    userChoice = "";

    // Reset and shuffle choices
    choices = [questions[questionCount].choice0, questions[questionCount].choice1, questions[questionCount].choice2, questions[questionCount].choice3];
    choices = shuffle(choices);

    // Give question
    $("#question").text(questions[questionCount].question);

    // Render elements
    $(".clock").show();
    $(".question").show();
    $(".choiceBtn").append(`<button class="choice">${choices[0]}</button>`);
    $(".choiceBtn").append(`<button class="choice">${choices[1]}</button>`);
    $(".choiceBtn").append(`<button class="choice">${choices[2]}</button>`);
    $(".choiceBtn").append(`<button class="choice">${choices[3]}</button>`);

    // Start timers
    if (!timeRunning) {
        timer = TIMER / 1000;
        intervalTimer = setInterval(timeCount, 1000);
        questionTimer = setTimeout(result, TIMER);
        timeRunning = true;
        $("#clock").text("Time Left: 00:" + timer);
    }
}

// To question result
function result() {
    // Hide HTML
    hideHTML();

    // Set userChoice based on the button clicked
    userChoice = $(this).text();
    console.log(userChoice);

    // Clear timers
    clearInterval(intervalTimer);
    clearTimeout(questionTimer);
    timeRunning = false;

    // Check if timed out, right, or wrong
    if (userChoice === "") {
        wrong++;
        $("#resultChoice").text("Out of Time!");
        $("#resultChoice").css("color", "#966496");
    }
    else if (userChoice === questions[questionCount].choice0) {
        right++;
        $("#resultChoice").text("Correct!");
        $("#resultChoice").css("color", "#00dd80");
    }
    else {
        wrong++;
        $("#resultChoice").text("Wrong!");
        $("#resultChoice").css("color", "#ff0000");
    }
    $("#resultCorrect").text("The answer is... " + questions[questionCount].choice0);
    $("#resultImg").attr("src", questions[questionCount].image);

    // Render elements
    $(".clock").show();
    $(".question").show();
    $(".result").show();

    if (questionCount < 19)
        $(".mainBtn").append(`<button id="next">Next Question</button>`);
    else
        $(".mainBtn").append(`<button id="end">Final Results</button>`);
}

// To final result and totals
function finalResult() {
    // Hide HTML
    hideHTML();

    // Give ranking
    if (right <= 8) {
        $("#finalRank").text("Rank: Uncultured Swine!");
        $("#finalRank").css("background", "#800000");
        $("#finalPercent").css("color", "#800000");
    }
    if (right > 8 && right <= 12) {
        $("#finalRank").text("Rank: Filthy Casual!");
        $("#finalRank").css("background", "#804000");
        $("#finalPercent").css("color", "#804000");
    }
    if (right > 12 && right <= 15) {
        $("#finalRank").text("Rank: Average Bro!");
        $("#finalRank").css("background", "#804080");
        $("#finalPercent").css("color", "#804080");
    }
    if (right > 15 && right <= 18) {
        $("#finalRank").text("Rank: Elite Smasher!");
        $("#finalRank").css("background", "#008080");
        $("#finalPercent").css("color", "#008080");
    }
    if (right > 18 && right <= 20) {
        $("#finalRank").text("Rank: Smash Lore-ologist!");
        $("#finalRank").css("background", "#008000");
        $("#finalPercent").css("color", "#008000");
    }

    // Give final results
    $("#finalPercent").text("Score: " + (right * 5) + "%");
    $("#finalRight").text("Correct: " + right);
    $("#finalWrong").text("Incorrect: " + wrong);

    // Render elements
    $(".final").show();
    $(".mainBtn").append(`<button id="again">Play Again</button>`);
}

// Ready and Click functions
$(document).ready(function(){ start(); });
$(document).on("click", ".choice", result); // Action of choosing an answer
$(document).on("click", "#next", next); // Action of hitting the Next Button
$(document).on("click", "#end", finalResult); // Action of hitting the Final Results Button
$(document).on("click", "#again", start); // Action of hitting the Play Again Button