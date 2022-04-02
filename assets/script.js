const moment = require("moment")

var project = $('#project')
var type = $('#type')
var dueDate = $('#dueDate')
var perHour = $('#perHour')
var now = moment();
var timer = $('');
var inputData = $('');
var submitEl = $("#button"
)

var dt = new Date();
document.getElementById('date-time').innerHTML=dt;

var today = moment();
$("#timer").text(today.format("MMM Do, YYYY"));
var now = localStorage.getItem("now");
function inputData (){
    var perHour = JSON.parse(localStorage.getItem("perHour"));
    var dueDate = JSON.parse(localStorage.getItem("dueDate"));
    var type = JSON.parse(localStorage.getItem("type"))
    var project = JSON.parse(localStorage.getItem(project))
localStorage.setItem("#perHour", JSON.stringify(perHour)
);
localStorage.setItem("#dueDate", JSON.stringify(dueDate));
localStorage.setItem("#type",JSON.stringify(type));
localStorage.setItem("#project",JSON.stringify(project));
return
}



inputData(){
    return
}


