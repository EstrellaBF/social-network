$(document).ready(function() {
  var $friends = $('#friends');
  var $invitationForm = $('#invitation-form');
  var $searchFriends = $('#search-friends');
  var $mailCoder = $('#mail-coder');
  var $messageCoder = $('#message-coder');
  
  // Ocultando formulario de invitación
  $invitationForm.hide();
  $invitationForm.find('button').prop('disabled', true);

  // FIREBASE
  // Initialize Firebase
  var config = {
    apiKey: 'AIzaSyDjfb8eBnSQuL_ZLz1lldnhrfRmhh3P1AE',
    authDomain: 'primer-proyecto-c38c2.firebaseapp.com',
    databaseURL: 'https://primer-proyecto-c38c2.firebaseio.com',
    projectId: 'primer-proyecto-c38c2',
    storageBucket: 'primer-proyecto-c38c2.appspot.com',
    messagingSenderId: '352532098931'
  };
  firebase.initializeApp(config);
  // LOGIN
  var provider = new firebase.auth.GoogleAuthProvider();
  // Jalando a todos los usuarios de la BD
  firebase.database().ref('newDB').on('child_added', function(s) {
    var user = s.val();   
    console.log(user);
    $friends.append('<img width=\'100px\' src=\'' + user.foto + '\'/>', '<p> ' + user.nombre + '<p/>');  
  });
  // END FIREBASE
  
  // Evento para enviar mensaje de invitación
  $searchFriends.on('click', function() {
    $searchFriends.hide();
    $invitationForm.show();
  });
  
  // Evento para guardar el email y verificar que sea email
  // $mailCoder.on('input', function () {
  //   var patternEmail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
  //   // console.log(patternEmail.test($(this).val()));
  //   if (patternEmail.test($(this).val())) {
  //     $invitationForm.find('button').prop('disabled', false);
  //   } else {
  //     $invitationForm.find('button').prop('disabled', true);
  //   }
  //   // 
  // });

  // Funcion de mensaje
  function isMessageValid() {
    return $messageCoder.val().length >= 2;
  };

  // función de correo
  function isMailValid() {
    var patternEmail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
    // console.log(patternEmail.test($(this).val()));
    return patternEmail.test($(this).val())
  };

  // Evento pasa mensaje

  function passwordEvent() {
    if (isMessageValid()) {
      console.log(true);
    } else {
      console.log(false);
    }
  };
  passwordEvent()

});