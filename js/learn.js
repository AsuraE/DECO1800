$(document).ready(function(){
    $("#memButton").on("click", function(){
        $.post("memory.html", function(data){
            $("#memModal").html(data).fadeIn();
        });
    });
});