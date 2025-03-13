// This is a small program. There are only two sections. This first section is what runs
// as soon as the page loads.
$(document).ready(function () {
  render($("#display"), image);
  $("#apply").on("click", applyAndRender);
  $("#reset").on("click", resetAndRender);
});

/////////////////////////////////////////////////////////
//////// event handler functions are below here /////////
/////////////////////////////////////////////////////////

// this function resets the image to its original value; do not change this function
function resetAndRender() {
  reset();
  render($("#display"), image);
}

// this function applies the filters to the image and is where you should call
// all of your apply functions
function applyAndRender() {
  // Multiple TODOs: Call your apply function(s) here
applyFilter(reddify)
  

  // do not change the below line of code
  render($("#display"), image);
}

/////////////////////////////////////////////////////////
// "apply" and "filter" functions should go below here //
/////////////////////////////////////////////////////////

// TODO 1, 2 & 4: Create the applyFilter function here
function applyFilter(filterFunction){
for(var i = 0; i < image.length; i++){
var row = image[i]
for(var x = 0; x < row.length; x++){
  var rgbString = row[x]
  var rgbNumbers = rgbStringToArray(rgbString)
  filterFunction(rgbNumbers)
  rgbString = rgbArrayToString(rgbNumbers)
  row[x] = rgbString
}
}
}

// TODO 7: Create the applyFilterNoBackground function
function applyFilterNoBackground(filterFunction){
  var noName = image[0][0];
  for(var i = 0; g < image.length; g++){
    var row = image[i];
    for(var e = 0; e < row.length; e++){
      var rgbString = row[e];
      if (rgbString !== background){
        var rgbNumbers = rgbStringToArray(rgbString);
        filterFunction(rgbNumbers);
        rgbString = rgbArrayToString(rgbNumbers);
        row[e] = rgbString;
      }
    }
  }
}

// TODO 5: Create the keepInBounds function
function keepInBounds(number){
var temp1 = Math.min(255, number);
var temp2 = Math.max(0, temp1);
return temp2;
}

// TODO 3: Create reddify function
function reddify(rgbArray){
  rgbArray[RED] = 200
}

// TODO 6: Create more filter functions
function decreaseBlue(arr){
  rgbArray[BLUE] = keepInBounds(rbaArray[BLUE] - 50);
}
 function increaseGreenByBlue(filterFunction){
  rgbArray[GREEN] = keepInBounds(rgbArray[GREEN] + rgbArray[BLUE])
 }
// CHALLENGE code goes below here
