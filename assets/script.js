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
var userInput = $("#input-09", "#input-10", "#input-11", "#input-12", "#input-1", 
"#input-2", "#input-3", "#input-4", "#input-5");
var currentTime = dayjs().format("H");
var hour09 = "09";
var hour10 = "10";
var hour11 = "11";
var hour12 = "12";
var hour13 = "13";
var hour14 = "14";
var hour15 = "15";
var hour16 = "16";
var hour17 = "17";
$('#currentDay').text(currentDay.format('dddd MMM D, YYYY'));
m
if (hour09 === currentTime) {
  document.getElementById("hour-09").style.backgroundColor = '#ff6961'
} else if (hour09 < currentTime) {
  document.getElementById("hour-09").style.backgroundColor = '#d3d3d3'
} else if (hour09 > currentTime) {
  document.getElementById("hour-09").style.backgroundColor = '#77dd77'
}

if (hour10 === currentTime) {
  document.getElementById("hour-10").style.backgroundColor = '#ff6961'
} else if (hour10 < currentTime) {
  document.getElementById("hour-10").style.backgroundColor = '#d3d3d3'
} else if (hour10 > currentTime) {
  document.getElementById("hour-10").style.backgroundColor = '#77dd77'
}
if (hour11 === currentTime) {
  document.getElementById("hour-11").style.backgroundColor = '#ff6961'
} else if (hour11 < currentTime) {
  document.getElementById("hour-11").style.backgroundColor = '#d3d3d3'
} else if (hour11 > currentTime) {
  document.getElementById("hour-11").style.backgroundColor = '#77dd77'
}
if (hour12 === currentTime) {
  document.getElementById("hour-12").style.backgroundColor = '#ff6961'
} else if (hour12 < currentTime) {
  document.getElementById("hour-12").style.backgroundColor = '#d3d3d3'
} else if (hour12 > currentTime) {
  document.getElementById("hour-12").style.backgroundColor = '#77dd77'
}
if (hour13 === currentTime) {
  document.getElementById("hour-13").style.backgroundColor = '#ff6961'
} else if (hour13 < currentTime) {
  document.getElementById("hour-13").style.backgroundColor = '#d3d3d3'
} else if (hour13 > currentTime) {
  document.getElementById("hour-13").style.backgroundColor = '#77dd77'
}
if (hour14 === currentTime) {
  document.getElementById("hour-14").style.backgroundColor = '#ff6961'
} else if (hour14 < currentTime) {
  document.getElementById("hour-14").style.backgroundColor = '#d3d3d3'
} else if (hour14 > currentTime) {
  document.getElementById("hour-14").style.backgroundColor = '#77dd77'
}
if (hour15 === currentTime) {
  document.getElementById("hour-15").style.backgroundColor = '#ff6961'
} else if (hour15 < currentTime) {
  document.getElementById("hour-15").style.backgroundColor = '#d3d3d3'
} else if (hour15 > currentTime) {
  document.getElementById("hour-15").style.backgroundColor = '#77dd77'
}
if (hour16 === currentTime) {
  document.getElementById("hour-16").style.backgroundColor = '#ff6961'
} else if (hour16 < currentTime) {
  document.getElementById("hour-16").style.backgroundColor = '#d3d3d3'
} else if (hour16 > currentTime) {
  document.getElementById("hour-16").style.backgroundColor = '#77dd77'
}
if (hour17 === currentTime) {
  document.getElementById("hour-17").style.backgroundColor = '#ff6961'
} else if (hour17 < currentTime) {
  document.getElementById("hour-17").style.backgroundColor = '#d3d3d3'
} else if (hour17 > currentTime) {
  document.getElementById("hour-17").style.backgroundColor = '#77dd77'
}

saveButton9.on("click", saveUserInput9);
saveButton10.on("click", saveUserInput10);
saveButton11.on("click", saveUserInput11);
saveButton12.on("click", saveUserInput12);
saveButton1.on("click", saveUserInput13);
saveButton2.on("click", saveUserInput14);
saveButton3.on("click", saveUserInput15);
saveButton4.on("click", saveUserInput16);
saveButton5.on("click", saveUserInput17);

function saveUserInput9(event) {
  event.preventDefault();
  var input9 = document.getElementById("input-09").value;
  console.log(input9);
  localStorage.setItem("input 9", input9)
}
function saveUserInput10(event) {
  event.preventDefault();
  var input10 = document.getElementById("input-10").value;
  console.log(input10);
  localStorage.setItem("input 10", input10)
}
function saveUserInput11(event) {
  event.preventDefault();
  var input11 = document.getElementById("input-11").value;
  console.log(input11);
  localStorage.setItem("input 11", input11)
}
function saveUserInput12(event) {
  event.preventDefault();
  var input12 = document.getElementById("input-12").value;
  console.log(input12);
  localStorage.setItem("input 12", input12)
}
function saveUserInput13(event) {
  event.preventDefault();
  var input13 = document.getElementById("input-13").value;
  console.log(input13);
  localStorage.setItem("input 13", input13) 
}
function saveUserInput14(event) {
  event.preventDefault();
  var input14 = document.getElementById("input-14").value;
  console.log(input14);
  localStorage.setItem("input 14", input14)
}
function saveUserInput15(event) {
  event.preventDefault();
  var input15 = document.getElementById("input-15").value;
  console.log(input15);
  localStorage.setItem("input 15", input15)
}
function saveUserInput16(event) {
  event.preventDefault();
  var input16 = document.getElementById("input-16").value;
  console.log(input16);
  localStorage.setItem("input 16", input16)
}
function saveUserInput17(event) {
  event.preventDefault();
  var input17 = document.getElementById("input-17").value;
  console.log(input17);
  localStorage.setItem("input 17", input17)
}
