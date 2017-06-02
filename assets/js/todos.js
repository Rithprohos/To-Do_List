/**
 * Created by Prohos on 6/1/2017.
 */


//click on ul if it click li it will exe code
$('ul').on('click' , 'li' , function(){
    $(this).toggleClass('completed');
});

//delete to-do
$('ul').on('click' , 'span' , function(e){

    //remove parent of span (li)
    $(this).parent().slideUp(500,function () {
        $(this).remove()
    });

    //prevent parent element run
    e.stopPropagation();
});

$("input[type='text']").keypress(function (event) {
    if (event.which === 13){
        //get text from input
        var toDoText = $(this).val();
        $(this).val('');
        //create new li and add to ul
        var nodeText = "<li><span><i class='fa fa-trash'></i></span>"+ toDoText +"</li>";
        $(nodeText).hide().appendTo('ul').fadeIn(500);
    }
});

$('#add-todo').click(function(){
    $("input[type='text']").slideToggle();
})