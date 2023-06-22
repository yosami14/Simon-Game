var levelCount = 1;
var sequence = ''


//Audio
var audio = new Audio();
var playlist = new Array('./sounds/green.mp3','./sounds/red.mp3','./sounds/yellow.mp3','./sounds/blue.mp3','./sounds/wrong.mp3')

//random genertor
let randomNum = () => {
  const randomSelect = $('.btn')[Math.floor(Math.random()*4)]
  return  randomSelect.attr('id')
};

//Press A to start
$(document).keypress(function(event){
  if(event.key === 'a'||event.key === 'A'){
  startGame()
  }
})

function startGame(){
  //Level display: 
  $('#level-title').text('Level '+levelCount)
  //Random Generated Sound



  //Play Sound
  $('.btn').click(function(){
    var clickedBtnId = $(this).attr('id');
    playAudio(clickedBtnId);
  })


  //Show the random animation
  
  
  //play random sound

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



