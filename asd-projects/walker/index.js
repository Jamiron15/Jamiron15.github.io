/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()

  
function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  var FRAME_RATE = 60;
  var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
  var KEY = {
    LEFT: 65,
    RIGHT: 68,
    UP: 87,
    DOWN: 83,
  }

  var Key = {
    W: 87,
    A: 65,
    S: 83,
    D: 68,
  }

  var walker = {
   positionX: 0,
   speedX: 0,
   positionY: 0,
   speedY: 0,
  }
  // Game Item Objects


  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on('keydown', handleKeyDown);
  $(document).on('keyup', handleKeyUp);
  // change 'eventType' to the type of event you want to handle

  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {
    repositionGameItem();
    redrawGameItem();
    wallCollision();
  }
  /* 
  Called in response to events.
  */
  function handleKeyDown(event) {
  if (event.which === KEY.LEFT){
    walker.speedX = -5;
  }
  if (event.which === KEY.RIGHT) {
    walker.speedX = 5;
  }
  if (event.which === KEY.UP){
    walker.speedY = -5;
  }
  if (event.which === KEY.DOWN){
    walker.speedY = 5;
  }
  }
function handleKeyUp(){
  if (event.which === KEY.LEFT){
    walker.speedX = 0;
  }
  if (event.which === KEY.RIGHT) {
    walker.speedX = 0;
  }
  if (event.which === KEY.UP){
    walker.speedY = 0;
  }
  if (event.which === KEY.DOWN){
    walker.speedY = 0;
  }
}
var height = $("#board").height(wallCollision)
var width = $("#board").width(wallCollision)
function wallCollision(){
  if (walker.positionX > 385){
    walker.positionX = 385
  }
  if (walker.positionY > 385){
    walker.positionY = 385
  }
  if (walker.positionX < 0){
    walker.positionY = 0
  }
  if (walker.positionY < 0){
    walker.positionY = 0
  }
}
  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  function repositionGameItem(){
walker.positionX += walker.speedX;
walker.positionY += walker.speedY; 
}

function redrawGameItem(){
  $("#walker").css("left", walker.positionX);
  $("#walker").css("right", walker.positionX);
  $("#walker").css("down", walker.positionY);
  $("#walker").css("top", walker.positionY);
}
  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }
  
}

