//==============================================================
$("ul").on("click", "li", function(){
   $(this).toggleClass("completed");
 });
//==============================================================
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500,function(){
      $(this).remove(); 
     });  
    event.stopPropagation();   //stoping bubbling to other elements
});
//==============================================================
$("input[type='text']").keypress(function(event){
    if(event.which === 13){
       var todoText = $(this).val();             //reading value of input box
       $(this).val("");                         //clearing input box
       $("ul").append("<li><span><i class='fa fa-trash'></i> </span>" + todoText + "</li>")  //to add something inside a selected tag
    }
});	
//===============================================================
$(".fa-plus").click(function(){
  $("input[type='text']").fadeToggle();
});
//===============================================================



















