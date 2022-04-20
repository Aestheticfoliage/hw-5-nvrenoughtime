// moment = require("moment");
// var now = moment();
var projectFormEl = $("#projectForm");
var projectEl = $("#project");
var typeEl = $("#type");
var dueDate = $("#dueDate");
var perHour = $("#perHour");
var userInput = $("#userInput");
// var submitbuttonEl = $(handleFormSubmit);
function handleFormSubmit(event) {
  event.preventDefault();
  var projectFormEl = $('input[name= "projectForm"]').val();
  if (!projectFormEl) {
    console.log("no projects today");
    return;
  }
  projectFormEl.append("<form>" + projectFormObj + "</form>");
  $('input[name= "projectForm"]').val("");
  var test3 = $(`<div class="col-md-6">test3</div>`);
  userInput.append(test3);
  for (var i = 0; i < totalProjects.length; i++) {}
}
userInput.css("border", "2px solid red");
// userInput.html(`<div class="col-md-6">
// test
// </div><div class="col-md-6">test2</div>
// `);

// sets totalProjects to an array
var projectFormObj = [projectEl, typeEl, dueDate, perHour, now];

var totalProjects = [projectFormObj];

// handling submit event on projectForm
submitbuttonEl.on("submit", handleFormSubmit);

// saving Data returned in the object projectForm to the name in each project
function setData() {
  localStorage.setItem($("#project"), projectFormObj);
}
// creating cards based on projectForm
function renderData(projectFormobj) {}
// function SubmitEvent(createDate){
//     array.forEach.projectFormObj => {

//     });
// // }
// setTimeout(dueDate){
//     for (dueDate )
// }
//  var setItem;
//   if (Array.projectFormObj.data)
//   { setItem}
//     submitbuttonEl.addEventListener("click")
//     data.projectFormObj.inputData();
//     dueDate.appendChild(data);
//     inputData.dueDate.appendChild()
