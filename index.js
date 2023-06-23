var level = 0;
var computerSequence = [];
var userSequence = [];
var started = false;



//Audio
var audio = new Audio();
var playlist = new Array('./sounds/green.mp3','./sounds/red.mp3','./sounds/yellow.mp3','./sounds/blue.mp3','./sounds/wrong.mp3')

//random genertor
let randomBtn = () => {
  const randomSelect = $('.btn')[Math.floor(Math.random()*4)]
  //return only the id for sound
   let thisBtnId = $(randomSelect).attr('id')
  return thisBtnId
};

//Press A to start
$(document).click(function() {
  if (!started) {
    nextSequence();
    started = true;
  }
});

//Next Sequence
function nextSequence(){
  userSequence = [];
  level++;
  $("#level-title").text("Level " + level);
  var currentBtn = randomBtn()
  computerSequence.push(currentBtn);
  $("#" + currentBtn).fadeIn(100).fadeOut(100).fadeIn(100);
  playAudio(currentBtn);
}

//player click 
$(".btn").click(function() {
  var userChosenColour = $(this).attr("id");
  userSequence.push(userChosenColour);

  playAudio(userChosenColour);
  animatePress(userChosenColour);
  checkAnswer(userSequence.length-1);
});





//compare answers
function checkAnswer(currentLevel) {
    if (computerSequence[currentLevel] === userSequence[currentLevel]) {
      if (userSequence.length === computerSequence.length){
        setTimeout(function () {
          nextSequence();
        }, 1000);
      }
    } else {
      playAudio("wrong");
      $("body").addClass("game-over");
      $("#level-title").text("Game Over, Press Any Key to Restart");

      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);

      gameOver();
    }
}

//gameover
function gameOver() {
  level = 0;
  computerSequence = [];
  started = false;
}

//Animation for Pressing btn
function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

//Audio Switch
function playAudio(key){
  switch(key){
  case 'green':
  audio.src = (playlist[0]);
  audio.play() 
  break;

  case 'red':
  audio.src = (playlist[1]);
  audio.play() 
  break;

  case 'yellow':
  audio.src = (playlist[2]);
  audio.play() 
  break;

  case 'blue':
  audio.src = (playlist[3]);
  audio.play() 
  break;

  case 'gameOver':
  audio.src = (playlist[4]);
  audio.play() 
  break;
  }

  
}



