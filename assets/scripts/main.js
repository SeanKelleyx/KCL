$('form').on('submit', function(e){
  e.preventDefault();
  $.post( "assets/scripts/contact.php", { 
  	name: $("#name")[0].value, 
  	email: $("#email")[0].value,
  	phone: $("#phone")[0].value,
  	message: $("#message")[0].value 
  })
  .done(function( data ) {
    alert( "Data Loaded: " + data );
  });
  console.log('submitted');
});