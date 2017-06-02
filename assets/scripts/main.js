$('form').on('submit', function(e){
  e.preventDefault();
  $.post( "assets/scripts/contact.php", { 
  	name: $("#name")[0].value, 
  	email: $("#email")[0].value,
  	phone: $("#phone")[0].value,
  	message: $("#message")[0].value 
  })
  .done(function( data ) {
  	console.log(data);
    var x = $("#snackbar")[0];
    x.innerHTML = "Your Message Has Been Sent";
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
  });
});