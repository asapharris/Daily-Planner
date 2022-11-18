var saveButton9 = $('#9-btn');
var saveButton10 = $('#10-btn');
var saveButton11 = $('#11-btn');
var saveButton12 = $('#12-btn');
var saveButton1 = $('#1-btn');
var saveButton2 = $('#2-btn');
var saveButton3 = $('#3-btn');
var saveButton4 = $('#4-btn');
var saveButton5 = $('#5-btn');
var currentDay = dayjs();

$('#currentDay').text(currentDay.format('dddd MMM D, YYYY'));
var userInput = $("#input-9", "#input-10", "#input-11", "#input-12", "#input-1", "#input-2", "#input-3", "#input-4", "#input-5");
var currentTime = dayjs().format("H");

function saveUserInput(event) {
  event.preventDefault();
  console.log("Hello");
  console.log(userInput);
  console.log(currentTime)
}
var hour9 = "9";
var hour10 = "10";
var hour11 = "11";
var hour12 = "12";
var hour13 = "13";
var hour14 = "14";
var hour15 = "15";
var hour16 = "16";
var hour17 = "17";
 

if (hour9 === currentTime)
document.getElementById("hour-9").style.backgroundColor = '#ff6961'
  else (hour9 < currentTime)
document.getElementById("hour-9").style.backgroundColor = '#d3d3d3';   

if (hour10 === currentTime)
document.getElementById("hour-10").style.backgroundColor = '#ff6961'
  else (hour10 < currentTime)
document.getElementById("hour-10").style.backgroundColor = '#d3d3d3';

if (hour11 === currentTime)
document.getElementById("hour-11").style.backgroundColor = '#ff6961'
  else (hour11 < currentTime)
document.getElementById("hour-11").style.backgroundColor = '#d3d3d3';

if (hour12 === currentTime)
document.getElementById("hour-12").style.backgroundColor = '#ff6961'
  else (hour12 < currentTime)
document.getElementById("hour-12").style.backgroundColor = '#d3d3d3';

if (hour13 === currentTime)
document.getElementById("hour-13").style.backgroundColor = '#ff6961'
  else (hour13 < currentTime)
document.getElementById("hour-13").style.backgroundColor = '#d3d3d3';

if (hour14 === currentTime)
document.getElementById("hour-14").style.backgroundColor = '#ff6961'
  else (hour14 < currentTime)
document.getElementById("hour-14").style.backgroundColor = '#d3d3d3';

if (hour15 === currentTime)
document.getElementById("hour-15").style.backgroundColor = '#ff6961'
  else (hour15 < currentTime)
document.getElementById("hour-15").style.backgroundColor = '#d3d3d3';

if (hour16 === currentTime)
document.getElementById("hour-16").style.backgroundColor = '#ff6961'
  else (hour16 < currentTime)
document.getElementById("hour-16").style.backgroundColor = '#d3d3d3';

if (hour17 === currentTime) {
document.getElementById("hour-17").style.backgroundColor = '#ff6961'
} else if (hour17 < currentTime) {
document.getElementById("hour-17").style.backgroundColor = '#d3d3d3'
} else if (hour17 > currentTime) {
document.getElementById("hour-17").style.backgroundColor = '#77dd77'
}
saveButton9.on("click", saveUserInput);
saveButton10.on("click", saveUserInput);
saveButton11.on("click", saveUserInput);
saveButton12.on("click", saveUserInput);
saveButton1.on("click", saveUserInput);
saveButton2.on("click", saveUserInput);
saveButton3.on("click", saveUserInput);
saveButton4.on("click", saveUserInput);
saveButton5.on("click", saveUserInput);


    