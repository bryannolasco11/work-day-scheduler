// 1) display current day- I can do that in the <p> id currentDay
// 2) display the 10 hour in the workday from 8-5
// 3) make the colors of the workday in the past, present, or future
// 4) enter an event (need calender)
// 5) need save button then it saves the event in local storage
//      still displays on the screen

// 1) display current day- I can do that in the <p> id currentDay
console.log("this is working");
var currentDayEl = document.querySelector("#currentDay");
var containerEl = document.querySelector(".container");

var hours = ['8:00am', 
            '9:00am', 
            '10:00am', 
            '11:00am',
            '12:00pm',
            '1:00pm',
            '2:00pm',
            '3:00pm',
            '4:00pm',
            '5:00pm'
        ]
var hourCounter = hours.length;
setInterval(function() {
    currentDayEl.textContent = moment().format("dddd, MMMM Do YYYY");
},1000);

// 2) display the 10 hour in the workday from 8-5



hours.forEach(function(hour) {
    var timeBlockP = $("<p>")
        .text(hour)
        .addClass("hour")
    var saveButton = $("<button>")
        .text("save")
        .addClass("saveBtn")
    //var hoursLength = hours.length;
        // for(let hr = 0 ; hr < hoursLength; hr++) {
    var textAreaEl = $("<textarea>")
        .addClass("textArea")
    
   
    //saveButton.className = `options-${i+1}`;
           
        
    // var textAreaEl = $("<textarea>")
    //     .addClass("textArea"+hoursLength)

    console.log("my loop is working");
    $(".container").append(timeBlockP);
    
    timeBlockP.append(textAreaEl);
    timeBlockP.append(saveButton);
    console.log(hour);  
   
});
//loadTasks();
// saves text in text area when save button is clicked
$(".saveBtn").click (function() {
    console.log("<button> was clicked");
    var hourText = $(".textArea").val();
    console.log(hourText);
    localStorage.setItem("hourText", JSON.stringify(hourText));
    
  });

// var createTask = function(hourText) {

// }

//change colors
//if time is before current time, make class .past
// present .present
// future .future



