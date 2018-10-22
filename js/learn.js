$(document).ready(function(){
    $("#memButton").on("click", function(){
        $.post("memory.html", function(data){
            $("#memContent").html(data).fadeIn();
        });
    });
});