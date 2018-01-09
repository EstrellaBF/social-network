$(document).ready(function() {
  $('#share-btn').click(function() {
    event.preventDefault();
    var $post = $('#input-post').val();
    // agregando los post
    $('.new-post').prepend('<div>'+ $post + '</div>');
    // var $input = $('#input-file');
    // console.log($input);
    $('#input-post').val('');
  });
  
});