$(document).ready(function() {
  var $friends = $('#friends');
  var $invitationForm = $('#invitation-form');
  var $sendInvitation = $('#send-invitation');
  var $searchFriends = $('#search-friends');
  var $mailCoder = $('#mail-coder');
  var $messageCoder = $('#message-coder');
  
  // Ocultando formulario de invitación
  $invitationForm.hide();
  $sendInvitation.prop('disabled', true);

  // FIREBASE
  // LOGIN
  var provider = new firebase.auth.GoogleAuthProvider();
  // Jalando a todos los usuarios de la BD
  firebase.database().ref('newDB').on('child_added', function(s) {
    var user = s.val();   
    console.log(user.photo);
    var $img = '<img src=\'' + user.photo + '\'/>';
    $friends.append('<div class="col-xs-6 col-sm-3">' + $img + '<p>' + user.name + '<p/></div>');  
  });
  // END FIREBASE
  
  // Evento para enviar mensaje de invitación
  $searchFriends.on('click', function() {
    $searchFriends.hide();
    $invitationForm.show();
  });

  // Si se escribe el correo y si este se verifica que es correo y si sse llegó a escribir en el mensaje, el boton para enviar se activa.
  $mailCoder.on('input', function() {
    // debugger
    var patternEmail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
    if ($messageCoder.val().length >= 2 && patternEmail.test($mailCoder.val())) {
      $sendInvitation.prop('disabled', false);
    } else {
      $sendInvitation.prop('disabled', true);
    };
  });

  // Si se hace click en el botón de enviar, se ocultará el formulario. 
  $sendInvitation.on('click', function() {
    $invitationForm.hide();
    $searchFriends.show();
  });

});