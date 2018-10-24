$(document).ready(function(){
    $("#memButton").on("click", function(){
        $.post("memory.html", function(data){
            $(".memoryContent").html(data).fadeIn();
        });
    });
});