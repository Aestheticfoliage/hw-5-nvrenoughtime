var now = moment().format("HHMM");
console.log(now);
var projectFormEl = $("#projectForm");
var projectEl = $("#project");
var typeEl = $("#type");
var dueDate = $("#dueDate");
var perHour = $("#perHour");
var userInput = $("#userInput");
// var submitbuttonEl = $(handleFormSubmit);
/*{$(".container").on("click", ".saveBtn", 
function (event) {
    var target = $(event.currentTarget);
  //[12:00 PM]
  
return;
}
function handleFormSubmit(event) {
  event.preventDefault();
  var projectFormEl = $(`input[name= "projectForm"]`).val();
  if (!projectFormEl) {
    console.log("no projects today");
    
  projectFormEl.append("<form>" + projectFormObj + "</form>");
  $(`input[name= "projectForm"]`).val("");
  var test3 = $(`<div class="col-md-6">test3</div>`);
  userInput.append(test3);
  for (var i = 0; i < totalProjects.length; i++) {}}

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
*/
console.log("Current time", moment().hours());

$(".saveBtn").on("click", function () {
  console.log("Save button clicked", $(this));
  //grab the time label
  var time = $(this).siblings(".hour").text();
  console.log(time);
  var description = $(this).siblings(".description").val(); //value
  var wage = $(this).siblings(".wage").val(); //value
  var dueDate = $(this).siblings(".project-date").val(); //value

  var projectDetails = {
    description: description,
    hourlyWage: wage,
    projectDate: dueDate,
  };
  console.log(projectDetails);

  //save it to local storage
  //localStorage.setItem(time, description);
  localStorage.setItem(time, JSON.stringify(projectDetails));
});
