$(document).ready(function() {
  var $imageProfile = $('#image-profile');
  // photo que se debe de capturar desde la computadora
  var $photo = $('#capture');
  // imagen para capturar desde la computadora
  var $image = $('#input-file');

  // instanciando el objeto
  var $newDB = firebase.database();
  var dataReference = $dataBase.ref('newDB');
  console.log(dataReference);

  $('#share-btn').click(function() {
    event.preventDefault();
    var $post = $('#input-post').val();
    if ($post.length > 1) {
      $('#new-post').prepend('<div class="col-xs-10 col-xs-offset-1"><p>' + $post + '</p></div>');
      console.log($('#capture').val());
      $('#input-post').val('');
    } else {
      alert('No puedes ingresar campos vacíos');
    }
  });
});