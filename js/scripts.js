//back end logic
function Pingpong(i) {
    // takes in an interger and an interger as a return argument and returns the bollow logical states
    if(i%15===0){
        return "Pingpong";
    }else if ((i%5===0) && (i%15!==0)) {
        return "pong";

    }else if ((i%3===0)&& (i%15!==0)) {
        return "ping";
    }else{
        return i
    }
}
//user interface





$(document).ready(function(){
    $("#ping-form").submit(function(event){
        event.preventDefault();
        var number= parseInt($("#number").val());
        for(var i=1; i<=number; i+=1){
            $(".ping_list").append("<li>" + Pingpong(i)+"</li>");
        }
        // $(".ping_list").append("<li>" + Pingpong(number)+"</li>");
        

    })
})