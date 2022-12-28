$('#notes').emojioneArea();
$('#title').emojioneArea();
$(document).ready(()=>{
$('.btn-primary').click(function(){
    if($('#title').val() === '' || $('#notes').val() === ''){
        $('.alert-danger').show().text('Fild should not be empty');
    }
    else{
        addNotes($('#title').val(), $('#notes').val());
        $('.alert-success').show().text('Successfully added');
       
    }
});

function addNotes(title, notes){
 $('.row').append('<div class="column col-sm-6 my-2"><div class="card"><div class="card-body">'+
 '<h5 class="card-title">'+ title +'</h5>'+
 '<p class="card-text">'+ notes +'</p>'+
 '<a href="#" class="btn btn-danger mr-2" id="removeNotes">Remove</a>'
 +'</div></div></div>');
}
$('.row').on("click", "#removeNotes", function(){
    $(this).closest("div .col-sm-6").remove();
    $('.alert-success').show().text('Successfully removed notes');
});
});



