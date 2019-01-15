//Spell #1

$(".Counterspell").click(function(){
 $(".Begone").hide();
});



//Spell #2

$(".Scry").click(function(){
    $(".Cry").slideUp();
});



//Spell #3
$(".OldJace").hide();
$(".GrowOld").click(function(){
    $(".YoungJace").fadeOut();
    $(".OldJace").toggle();
 
});



