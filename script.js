var paragraph = "";//paragraph;
var par_array = "";//paragraph array;
let i = 0;//i variable for paragraph array and seek slider;
var wpm = 200;//words per minute;
var par_array_length;

var startButton = document.getElementById('start-spreeding-button');
var playButton = document.getElementById('play-button');
var pauseButton = document.getElementById('pause-button');
var buttonPanel = document.getElementById('button-panel');

const seekerInput = document.getElementById('seeker');


var isSeekerDraggable = false;//by default seeker is not in draggable state

//startSpreeding button
startButton.addEventListener('click', function() {
  start_spreeding();
});

//play button onclick
playButton.addEventListener('click', function() {
  play();
});

//pause button on click
pauseButton.addEventListener('click', function() {
  isSeekerDraggable= true;
  playButton.style.display="flex";//play button hide
  pauseButton.style.display="none";//play button hide
});

//this two functions specify if the seeker is in drgged state or not
seekerInput.addEventListener('mousedown', function() {
  isSeekerDraggable = true;
  playButton.style.display="flex";//play button hide
  pauseButton.style.display="none";//pause button hide
});
window.addEventListener('mouseup', function() {
  isSeekerDraggable = false;
});

//whenever the seeker is being moved the display is updated in the text box
seekerInput.addEventListener('input', function() {
  updateDisplay();
});

//settings button open popup
document.getElementById("settings-button").addEventListener('click',function(){
  document.getElementById("settings-popup-container").style.display="flex";
});

//settings popup close button
document.getElementById("settings-close-button").addEventListener('click',function(){
  wpm=document.getElementById("wpminput").value;
  document.getElementById("settings-popup-container").style.display="none";
});

//new text button
document.getElementById("new-text-button").addEventListener('click',function(){
  startButton.style.display="flex";
  buttonPanel.style.display="none";
  document.getElementById("input-textarea").value="enter your text here";
  document.getElementById("input-textarea").disabled=false;
});



//start spreeding function
function start_spreeding() {
  document.getElementById("input-textarea").disabled=true;
  startButton.style.display="none";
  buttonPanel.style.display="flex";
  paragraph = document.getElementById("input-textarea").value;//take the paragraph from the textbox
  document.getElementById("input-textarea").value="";
  par_array = paragraph.split(" ");//convert paragraph string into string array
  par_array_length=par_array.length;//get the length  of the array
  seekerInput.setAttribute('max',par_array_length);
}


//play function
function play() {
  playButton.style.display="none";//play button hide
  pauseButton.style.display="flex";//pause button display
  animateSeeker();
}


//function to move the seeker when play button pressed
function animateSeeker() {
  var interval = setInterval(function() {
    if (isSeekerDraggable) {
      clearInterval(interval);  // Stop the automation if seeker is being dragged
      return;
    }
    if (seekerInput.value < par_array_length) {
      seekerInput.value++;
      updateDisplay();
    } 
    else {
      clearInterval(interval);
    }
  }, 60000/wpm);
}

function updateDisplay(){
  document.getElementById("input-textarea").value = par_array[seekerInput.value];
}