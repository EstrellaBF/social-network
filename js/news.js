$(document).ready(function() {
  $('#share-btn').click(function() {
    event.preventDefault();
    var $post = $('#input-post').val();
    var $moment = moment().format('LLL');
    // agregando los post
    if ($post.length > 0) {
      $('#new-post').prepend('<div class="col-xs-10 col-xs-offset-1 div-post"><p><strong>' + 'Name & Last name' + '</strong></p><p>' + $post + '</p><p>' + $moment + '</p></div>');
    }
    // limpiando el input
    $('#input-post').val('');
  });
});