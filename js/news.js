$(document).ready(function() {
  $('#share-btn').click(function() {
    event.preventDefault();
    var $post = $('#input-post').val();
    // validando para que no acepte campos vacios
    if ($post.length > 1) {
      // agregando los post
      $('#new-post').prepend('<div class="col-xs-10 col-xs-offset-1"><p>' + $post + '</p></div>');
      $('#input-post').val('');
    } else {
      alert('No puedes ingresar campos vacíos');
    }
  });
});