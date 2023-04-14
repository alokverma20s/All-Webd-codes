$("h1").css("color", "red");
$("button").css("color", "green");
$("h1").addClass("big-title margin-50");


$("button").click(function () {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    $("body").css("background-color", "rgb(" + r + "," + g + "," + b + ")");
});

$(document).keydown(function(event){
    $("h1").text(event.key);
});