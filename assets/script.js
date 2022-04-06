const moment = require("moment")

var project = $('#project')
var type = $('#type')
var dueDate = $('#dueDate')
var perHour = $('#wage')
var now = moment();
var timer = $('');
var inputData = $('');
var submitEl = $("")
var projectFormObj ={
    project: document.querySelector("$project"),
    type: document.querySelector("#type"),
    dueDate: document.querySelector("#dueDate"),
    perHour: document.querySelector("#wage"),
    console.localStorage

}
var projectForm = document.querySelector(".projectForm" + project + type + wage + dueDate)
projectForm.addEventListener("click", function(event(submitEl)) {
    var element = event(submitEl).target;
    projectFormObj(){
        console.log()
    }
}
var dt = new Date();
document.getElementById('date-time').innerHTML=dt;
$submitEl.addEventListener("click",function(inputData))

var today = moment();
$("#timer").text(today.format("MMM Do, YYYY"));
var now = localStorage.getItem(today);
function inputData (){
    var perHour = JSON.parse(localStorage.getItem(perHour));
    var dueDate = JSON.parse(localStorage.getItem(dueDate));
    var type = JSON.parse(localStorage.getItem(type))
    var project = JSON.parse(localStorage.getItem(project))
localStorage.setItem("#perHour", JSON.stringify(perHour)
);
localStorage.setItem("#dueDate", JSON.stringify(dueDate));
localStorage.setItem("#type",JSON.stringify(type));
localStorage.setItem("#project",JSON.stringify(project));
return
}



inputData();


